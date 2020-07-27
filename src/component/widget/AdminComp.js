import React from "react";
import { Link } from "react-router-dom";
function AdminComp() {
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
        }}
      >
        <div>
          {" "}
          <small className="form-text text-muted">Name : </small>
        </div>
        <div>
          {" "}
          <small className="form-text text-muted">Username : </small>
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

export default AdminComp;
