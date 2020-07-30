import React, { Component } from "react";
import Layout from "../../component/layout/Layout";
import CustomerComp from "../../component/widget/CustomerComp";
import { getCustomers } from "../../actions/customerActions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Spinner from "../../component/widget/Spinner";
import PropTypes from "prop-types";

class User extends Component {
  componentDidMount() {
    this.props.getCustomers();
  }
  render() {
    const { customers, loading } = this.props.customers;
    return (
      <Layout heading=" User">
        <div className="container-fluid">
          {customers === loading ? (
            <Spinner />
          ) : customers === null ? (
            <h3>No User Found</h3>
          ) : (
            customers.map((item, index) => {
              return (
                <CustomerComp
                  picture={item.avatar}
                  id={item._id}
                  name={item.name}
                  date={item.date}
                  key={index}
                  email={item.email}
                />
              );
            })
          )}
        </div>
      </Layout>
    );
  }
}
User.propTypes = {
  getCustomers: PropTypes.func.isRequired,
  customers: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProp = (state) => {
  return {
    customers: state.customers,
    errors: state.errors,
  };
};

export default connect(mapStateToProp, { getCustomers })(withRouter(User));
