import axios from "axios";
import { GET_PRODUCT, PRODUCT_LOADING, DELETE_PRODUCT } from "./types";

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

// Cart Loading

export const setProductLoading = () => {
  return {
    type: PRODUCT_LOADING,
  };
};
