import React, { Component } from "react";
import Layout from "../../component/layout/Layout";
class CustomerUpdate extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
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
      email: this.state.email,
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
          <p className="lead text-center"> Customer Information</p>
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

              {/* {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )} */}
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Email"
                name="email"
                value={this.state.email}
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

export default CustomerUpdate;
