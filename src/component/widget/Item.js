import React, { Component } from "react";
import styles from "./item.css";
import { Link, withRouter } from "react-router-dom";
import { deleteProduct } from "../../actions/productActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
class Item extends Component {
  render() {
    return (
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="card h-100">
          <div>
            <img
              className="card-img-top"
              src={`http://localhost:5050/assets?filename=${this.props.picture}`}
              alt="something"
            />
          </div>
          <div className="card-body">
            <h4 className="card-title">
              <p className="">{this.props.location}</p>
            </h4>
            <div className={styles.itemEquip}>
              <div className={styles.info}>
                <i className="fas fa-bed"></i>
                <span>{this.props.bedrooms}</span>
                <p>Bedrooms</p>
              </div>
              <div className={styles.info}>
                <i className="fas fa-bath"></i>
                <span>{this.props.bathrooms}</span>
                <p>Bathrooms</p>
              </div>
              <div className={styles.info}>
                <i className="fas fa-door-open"></i>
                <span>{this.props.doors}</span>
                <p> Rooms</p>
              </div>
            </div>
            <h5>Ghc {this.props.price} </h5>
          </div>
          <div
            className="card-footer"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Link
              to="#"
              className="btn btn-sm btn-danger"
              onClick={(e) => {
                this.props.deleteProduct(this.props.id);
                window.location.reload(false);
              }}
            >
              Delete
            </Link>
            <Link
              to="/update-product"
              className="btn btn-sm btn-dark"
              // onClick={() => this.props.getItem(this.props.id)}
            >
              Update
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

Item.propTypes = {
  deleteProduct: PropTypes.func.isRequired,
};

export default connect(null, { deleteProduct })(Item);
