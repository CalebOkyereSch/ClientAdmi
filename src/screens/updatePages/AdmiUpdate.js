import React, { Component } from "react";
import Layout from "../../component/layout/Layout";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { updateAdmi } from "../../actions/admiActions";
import PropTypes from "prop-types";

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
    const { admiUpdate } = this.props.admi;
    const userData = {
      name: this.state.name,
      username: this.state.username,
      password: this.state.password,
    };

    this.props.updateAdmi(userData, admiUpdate.id, this.props.history);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  componentWillMount() {
    const { admiUpdate } = this.props.admi;
    if (admiUpdate) {
      this.setState({
        name: admiUpdate.name,
        username: admiUpdate.username,
      });
    }
  }

  render() {
    const { admi } = this.props.admi;
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
                type="text"
                className="form-control form-control-lg"
                placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={this.onChange}
              />
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

AdmiUpdate.propTypes = {
  admi: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  updateAdmi: PropTypes.func.isRequired,
};

const mapStateToProp = (state) => {
  return {
    admi: state.admi,
    errors: state.errors,
  };
};

export default connect(mapStateToProp, { updateAdmi })(withRouter(AdmiUpdate));
