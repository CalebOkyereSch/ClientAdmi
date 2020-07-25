import React, { Component } from "react";
import Layout from "../../component/layout/Layout";
import AdminComp from "../../component/widget/AdminComp";
export default class ManageAdmin extends Component {
  render() {
    return (
      <Layout heading="Manage Admins">
        <div className="container-fluid">
          <AdminComp />
          <AdminComp />
        </div>
      </Layout>
    );
  }
}
