import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class CustomerComp extends Component {
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
              src={`../images/1.jpg`}
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
            // onClick={() => props.getItem(props.id)}
          >
            Delete
          </Link>
          <Link
            to="#"
            className="btn btn-sm btn-dark"
            style={{
              margin: "5px 20px 0px 0px",
            }}
            // onClick={() => props.getItem(props.id)}
          >
            Update
          </Link>
        </div>
      </div>
    );
  }
}
