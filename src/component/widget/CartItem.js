import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteCartItem } from "../../actions/cartActions";
const CartItem = (props) => {
  return (
    <div
      className="card "
      style={{
        // flexDirection: "row",
        marginTop: "20px",
        justifyContent: "space-between",
        // border: "1px solid red",
        width: "350px",
        margin: "20px",
        alignItems: "center",
      }}
    >
      <div style={{ border: "1px solid #aaa", margin: "5px 0 5px 5px" }}>
        <img
          // src={`http://localhost:5050/assets?filename=${props.picture}`}
          src={`../images/${props.picture}`}
          className="card-img-top col "
          style={{
            backgroundSize: "cover !important",
            backgroundRepeat: "no-repeat !important",
            backgroundPosition: "center !important",
            width: "300px",
            height: "300px",
            padding: "10px 20px",
          }}
        />
        <div className="card-body col">
          <h5 className="card-title">{props.price}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{props.location}</h6>
          <p className="card-text">{props.description}</p>
        </div>

        {/* Seperation  */}

        <div className="row" style={{ padding: "20px" }}>
          <img
            // src={`http://localhost:5050/assets?filename=${props.picture}`}
            src={`../images/${props.picture}`}
            className="card-img-top "
            style={{
              backgroundSize: "cover !important",
              backgroundRepeat: "no-repeat !important",
              backgroundPosition: "center !important",
              width: "50px",
              height: "50px",
              // padding: "5px",
              borderRadius: "100%",
              border: "2px solid #aaa",
              marginTop: "10px",
            }}
          />
          <div
            className="card-body "
            style={{
              textAlign: "center",
            }}
          >
            <h5 className="card-title">{props.price}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{props.location}</h6>
            <p className="card-text">{props.description}</p>
          </div>
        </div>
      </div>
      <Link to="#" className="btn btn-lg btn-dark " style={{ height: "50px" }}>
        Contact Customer
      </Link>
    </div>
  );
};

CartItem.propTypes = {
  deleteCartItem: PropTypes.func.isRequired,
};
export default connect(null, { deleteCartItem })(CartItem);
