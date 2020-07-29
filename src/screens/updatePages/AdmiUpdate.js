import React, { Component } from "react";
import Layout from "../../component/layout/Layout";

class AdmiUpdate extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      name: "",
      errors: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();

    const userData = {
      name: this.state.name,
      username: this.state.username,
      password: this.state.password,
    };

    // this.props.loginUser(userData);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    // const { errors } = this.state;
    return (
      <Layout>
        <div className="container-fluid">
          <h1 className="display-4 text-center">Update</h1>
          <p className="lead text-center"> Administrator</p>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Full Name"
                name="name"
                value={this.state.name}
                onChange={this.onChange}
              />

              {/* {errors.username && (
                <div className="invalid-feedback">{errors.username}</div>
              )} */}
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Username"
                name="username"
                value={this.state.username}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control form-control-lg"
                placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={this.onChange}
              />
              {/* {errors.password && (
                <div className="invalid-feedback">{errors.password}</div>
              )} */}
            </div>
            <input
              type="submit"
              className="btn btn-dark btn-block mt-4"
              value="Update"
            />
          </form>
        </div>
      </Layout>
    );
  }
}

export default AdmiUpdate;

// AdmiUpdate.propTypes = {
//     auth: PropTypes.object.isRequired,
//     errors: PropTypes.object.isRequired,
//     loginUser: PropTypes.func.isRequired,
//   };
//   const mapStateToProps = (state) => ({
//     auth: state.auth,
//     errors: state.errors,
//   });

//   export default connect(mapStateToProps, { loginUser })(withRouter(AdmiUpdate));
