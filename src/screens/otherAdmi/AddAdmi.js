import React, { Component } from "react";
import Layout from "../../component/layout/Layout";
import { addAdmi } from "../../actions/admiActions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
class AddAdmi extends Component {
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

    this.props.addAdmi(userData, this.props.history);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    // const { errors } = this.state;
    return (
      <Layout>
        <div className="container-fluid">
          <h1 className="display-4 text-center">Add</h1>
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
              value="Add Administrator"
            />
          </form>
        </div>
      </Layout>
    );
  }
}

AddAdmi.propTypes = {
  addAdmi: PropTypes.func.isRequired,
};

export default connect(null, { addAdmi })(withRouter(AddAdmi));
