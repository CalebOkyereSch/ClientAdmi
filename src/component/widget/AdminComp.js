import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { deleteAdmi, setAdmiUpdate } from "../../actions/admiActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class AdminComp extends Component {
  onClick() {
    let data = {
      id: this.props.id,
      name: this.props.name,
      username: this.props.username,
    };

    this.props.setAdmiUpdate(data);
  }

  render() {
    return (
      <div
        className="container-fluid card-footer"
        style={{ marginBottom: "20px" }}
      >
        <div
          className="card row"
          style={{
            flexDirection: "row",
            marginTop: "20px",
            justifyContent: "space-between",
            padding: "10px",
            paddingRight: "40px",
          }}
        >
          <div>
            {" "}
            <small className="form-text text-muted">
              Name : {this.props.name}{" "}
            </small>
          </div>
          <div>
            {" "}
            <small className="form-text text-muted">
              Username : {this.props.username}
            </small>
          </div>
        </div>
        <div
          className=""
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            margin: "5px 20px 0px 0px",
          }}
        >
          <Link
            to="#"
            className="btn btn-sm btn-danger"
            style={{
              margin: "5px 20px 0px 0px",
            }}
            onClick={() => {
              this.props.deleteAdmi(this.props.id);
              window.location.reload(false);
            }}
          >
            Delete
          </Link>
          <Link
            to="/update-admi"
            className="btn btn-sm btn-dark"
            style={{
              margin: "5px 20px 0px 0px",
            }}
            onClick={() => this.onClick()}
          >
            Update
          </Link>
        </div>
      </div>
    );
  }
}

AdminComp.propTypes = {
  deleteAdmi: PropTypes.func.isRequired,
  setAdmiUpdate: PropTypes.func.isRequired,
};

export default connect(null, { deleteAdmi, setAdmiUpdate })(
  withRouter(AdminComp)
);
