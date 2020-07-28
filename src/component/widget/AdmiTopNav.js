import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class AdmiTopNav extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  }
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark flex-md-nowrap p-0 shadow sticky-top">
        <div>
          <img src="../images/logo.ico" width="20" height="20" alt="logo" />
          <Link className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" to="/">
            Hemight Properties
          </Link>
        </div>

        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap">
            <Link
              className="nav-link text-secondary"
              to="/signin"
              onClick={this.onLogoutClick.bind(this)}
            >
              Sign out
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
AdmiTopNav.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logoutUser })(AdmiTopNav);
