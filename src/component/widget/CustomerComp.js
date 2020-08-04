import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { deleteCustomer, setCusUpdate } from "../../actions/customerActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class CustomerComp extends Component {
  onClick() {
    let data = {
      id: this.props.id,
      name: this.props.name,
      email: this.props.email,
    };

    this.props.setCusUpdate(data);
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
            // justifyContent: "space",
            padding: "10px",
          }}
        >
          <div>
            <img
              className="card-img-top"
              src={this.props.picture}
              alt="something"
              style={{ height: "70px", width: "70px", borderRadius: "100px" }}
            />
          </div>
          <div style={{ marginLeft: 20 }}>
            <div>
              {" "}
              <small className="form-text text-muted">
                Name : {this.props.name}{" "}
              </small>
            </div>
            <div>
              {" "}
              <small className="form-text text-muted">
                Email : {this.props.email}{" "}
              </small>
            </div>
            <div>
              <small className="form-text text-muted">
                Date Of Registeration : {this.props.date}{" "}
              </small>
            </div>
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
              this.props.deleteCustomer(this.props.id);
              window.location.reload(false);
            }}
          >
            Delete
          </Link>
          <Link
            to="/update-customer"
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

CustomerComp.propTypes = {
  deleteCustomer: PropTypes.func.isRequired,
  setCusUpdate: PropTypes.func.isRequired,
};

export default connect(null, { deleteCustomer, setCusUpdate })(
  withRouter(CustomerComp)
);
