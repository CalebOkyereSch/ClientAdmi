import React, { Component } from "react";
import Layout from "../../component/layout/Layout";
import { getProduct } from "../../actions/productActions";
import { getItem } from "../../actions/itemActions";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import Item from "../../component/widget/Item";
import Spinner from "../../component/widget/Spinner";
import Scroller from "../../component/widget/Scroller";
import db from "../../db.json";
import Chart from "../../component/widget/Chart";
// import Item from "../../component/widget/Item";
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
            {db.Buildings.map((item, index) => {
              if (index < 5) {
                return (
                  <Item
                    key={index}
                    picture={item.picture}
                    bedrooms={item.bedrooms}
                    bathrooms={item.bathrooms}
                    location={item.location}
                    doors={item.doors}
                    price={item.price}
                    id={item.id}
                  />
                );
              }
            })}
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
