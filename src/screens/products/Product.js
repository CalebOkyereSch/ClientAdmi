import React, { Component } from "react";
import Layout from "../../component/layout/Layout";
import { getProduct } from "../../actions/productActions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import Spinner from "../../component/widget/Spinner";
import Item from "../../component/widget/Item";

class Products extends Component {
  componentDidMount() {
    this.props.getProduct();
  }
  render() {
    const { product, loading } = this.props.product;
    return (
      <Layout heading=" Properties Available">
        <div className="container-fluid">
          <div className="row">
            {product === loading ? (
              <Spinner />
            ) : product === null ? (
              <h3>No Properties Found</h3>
            ) : (
              product.map((item, index) => {
                return (
                  <Item
                    key={index}
                    picture={item.main}
                    bedrooms={item.bed}
                    bathrooms={item.bath}
                    location={item.location}
                    doors={item.rooms}
                    price={item.price}
                    id={item._id}
                  />
                );
              })
            )}
          </div>
        </div>
      </Layout>
    );
  }
}
Products.propTypes = {
  getProduct: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  product: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProp = (state) => ({
  product: state.product,
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProp, { getProduct })(withRouter(Products));
