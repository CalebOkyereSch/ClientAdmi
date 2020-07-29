import React, { Component } from "react";
import Layout from "../../component/layout/Layout";
import AdminComp from "../../component/widget/AdminComp";
import { Link } from "react-router-dom";
import { getAdmi } from "../../actions/admiActions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Spinner from "../../component/widget/Spinner";
import PropTypes from "prop-types";
class ManageAdmin extends Component {
  componentDidMount() {
    this.props.getAdmi();
  }

  render() {
    const { admi, loading } = this.props.admi;
    return (
      <Layout heading="Manage Admins">
        <Link
          to="/add-admi"
          className="btn btn-md btn-dark"
          style={{ margin: "10px" }}
        >
          Add New Adminstrator
        </Link>
        <div className="container-fluid">
          {admi === loading ? (
            <Spinner />
          ) : admi === null ? (
            <h3>No Administrator Found </h3>
          ) : (
            admi.map((item, index) => {
              return (
                <AdminComp
                  name={item.name}
                  username={item.username}
                  id={item._id}
                  key={index}
                />
              );
            })
          )}
        </div>
      </Layout>
    );
  }
}

ManageAdmin.propTypes = {
  getAdmi: PropTypes.func.isRequired,
  admi: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProp = (state) => {
  return {
    admi: state.admi,
    errors: state.errors,
  };
};

export default connect(mapStateToProp, { getAdmi })(withRouter(ManageAdmin));
