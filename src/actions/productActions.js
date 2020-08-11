import axios from "axios";
import {
  GET_PRODUCT,
  PRODUCT_LOADING,
  DELETE_PRODUCT,
  GET_UPDATE_PRODUCT,
  UPDATE_PRODUCT,
  GET_ERRORS,
} from "./types";

// get current user cart

export const getProduct = () => (dispatch) => {
  dispatch(setProductLoading());
  axios
    .get("/api/products/")
    .then((res) => {
      dispatch({
        type: GET_PRODUCT,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch({
        type: GET_PRODUCT,
        payload: {},
      })
    );
};
export const deleteProduct = (id) => (dispatch) => {
  axios
    .delete(`api/admi/product/${id}`)
    .then((res) => {
      dispatch({
        type: DELETE_PRODUCT,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: DELETE_PRODUCT,
        payload: err.response.data,
      });
    });
};

export const updateProduct = (data, id, history) => (dispatch) => {
  axios
    .post(`api/admi/product/update/${id}`, data)
    .then((res) => {
      dispatch({
        type: UPDATE_PRODUCT,
      });
      history.push("/products");
    })
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

export const setProdUpdate = (id, product) => (dispatch) => {
  console.log(product);
  if (product) {
    for (let i = 0; i < product.length; i++) {
      if (product[i]._id === id) {
        return dispatch({
          type: GET_UPDATE_PRODUCT,
          payload: product[i],
        });
      }
    }
  }
};

// Cart Loading

export const setProductLoading = () => {
  return {
    type: PRODUCT_LOADING,
  };
};
