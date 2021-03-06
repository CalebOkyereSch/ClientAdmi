// Add to Cart  and  view item
import axios from "axios";
import { GET_ITEM, ITEM_LOADING, GET_ERRORS } from "./types";

// get current user cart

export const getItem = (id) => (dispatch) => {
  dispatch(setItemLoading());
  axios
    .get(`/api/products/${id}`)
    .then((res) =>
      dispatch({
        type: GET_ITEM,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_ITEM,
        payload: {},
      })
    );
};

// Cart Loading

export const setItemLoading = () => {
  return {
    type: ITEM_LOADING,
  };
};

export const addToCart = (user, item) => (dispatch) => {
  axios
    .post(`/api/products/${item}`, user)
    .then(
      (res) => {
        console.log(res.data);
      }
      // dispatch({
      //   type: GET_CURRENT_USER,
      //   payload: res.data,
      // })
    )
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};
