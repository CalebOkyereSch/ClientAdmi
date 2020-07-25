import React, { Component } from "react";
import { AdmiSideNav, AdmiTopNav } from "../widget/AdmiNav";
import { getProduct } from "../../actions/productActions";
import { getItem } from "../../actions/itemActions";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
class Layout extends Component {
  componentDidMount() {
    this.props.getProduct();
  }
  render() {
    const { product, loading } = this.props.product;
    return (
      <div>
        <AdmiTopNav />
        <div className="container-fluid">
          <div className="row">
            <AdmiSideNav />

            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
              <h1 className="h2 my-4 fixed ">{this.props.heading}</h1>
              <div className="row">{this.props.children}</div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

Layout.propTypes = {
  getProduct: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  product: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  getItem: PropTypes.func.isRequired,
};

const mapStateToProp = (state) => ({
  product: state.product,
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProp, { getProduct, getItem })(
  withRouter(Layout)
);
