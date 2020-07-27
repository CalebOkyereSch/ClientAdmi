import React, { Component } from "react";
import Layout from "../../component/layout/Layout";
import CustomerComp from "../../component/widget/CustomerComp";
export default class User extends Component {
  render() {
    return (
      <Layout heading=" User">
        <div className="container-fluid">
          <CustomerComp />
          <CustomerComp />
        </div>
      </Layout>
    );
  }
}
