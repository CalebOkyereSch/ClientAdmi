import React, { Component } from "react";
import Layout from "../../component/layout/Layout";
import { getProduct } from "../../actions/productActions";
import { getItem } from "../../actions/itemActions";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import Item from "../../component/widget/Item";
import Spinner from "../../component/widget/Spinner";
class Dashboard extends Component {
  componentDidMount() {
    this.props.getProduct();
  }
  render() {
    const { product, loading } = this.props.product;
    return (
      <Layout heading="Products">
        <div className="container-fluid">
          <div className="row">
            {product === loading ? (
              <Spinner />
            ) : product === null || {} ? (
              <h1>No Product Found</h1>
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

Dashboard.propTypes = {
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
  withRouter(Dashboard)
);
