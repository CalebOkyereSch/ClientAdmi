import React, { Component } from "react";
import Layout from "../../component/layout/Layout";
import { getProduct } from "../../actions/productActions";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import DashItem from "../../component/widget/DashItem";
import Spinner from "../../component/widget/Spinner";
import Scroller from "../../component/widget/Scroller";
import Chart from "../../component/widget/Chart";
import isEmpty from "../../isEmpty";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getProduct();
  }
  render() {
    const { product, loading } = this.props.product;
    return (
      <Layout heading="Dashboard">
        <Chart />
        <div className="container-fluid">
          <Scroller
            topic="Properties"
            buttonText="Go To Properties Page"
            buttonLink="/products"
          >
            {product === loading ? (
              <Spinner />
            ) : isEmpty(product) ? (
              <h3>No Properties Found</h3>
            ) : (
              product.map((item, index) => {
                if (index < 6) {
                  return (
                    <DashItem
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
                }
              })
            )}
          </Scroller>
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
};

const mapStateToProp = (state) => ({
  product: state.product,
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProp, { getProduct })(withRouter(Dashboard));
