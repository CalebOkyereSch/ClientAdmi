import React, { Component } from "react";
import Layout from "../../component/layout/Layout";
import AdminComp from "../../component/widget/AdminComp";
import { Link } from "react-router-dom";
export default class ManageAdmin extends Component {
  render() {
    return (
      <Layout heading="Manage Admins">
        <Link to="#" className="btn btn-md btn-dark" style={{ margin: "10px" }}>
          Add New Adminstrator
        </Link>
        <div className="container-fluid">
          <AdminComp />
          <AdminComp />
        </div>
      </Layout>
    );
  }
}
