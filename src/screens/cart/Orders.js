import React, { Component } from "react";
import db from "../../db.json";
import CartItem from "../../component/widget/CartItem";
import Layout from "../../component/layout/Layout";
import { getOrder } from "../../actions/orderActions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Spinner from "../../component/widget/Spinner";
import PropTypes from "prop-types";
import isEmpty from "../../isEmpty";

class Orders extends Component {
  componentDidMount() {
    this.props.getOrder();
  }
  render() {
    const { order, loading } = this.props.order;
    return (
      <Layout heading="Orders">
        <div className="container-fluid row">
          {order === loading ? (
            <Spinner />
          ) : isEmpty(order) || {} ? (
            <h3>No Interest Has Been Shown On Properties</h3>
          ) : (
            order.map((item, index) => {
              if (index < 6) {
                return (
                  <CartItem
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
        </div>
      </Layout>
    );
  }
}

Orders.propTypes = {
  getOrder: PropTypes.func.isRequired,
  order: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProp = (state) => {
  return {
    order: state.order,
    errors: state.errors,
  };
};

export default connect(mapStateToProp, { getOrder })(withRouter(Orders));
