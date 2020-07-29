import axios from "axios";

import { GET_ERRORS, GET_ORDER, ORDER_LOADING } from "./types";

export const getOrder = () => (dispatch) => {
  dispatch(setOrderLoading());
  axios
    .get("/api/admi/orders")
    .then((res) => {
      dispatch({
        type: GET_ORDER,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

export const setOrderLoading = () => {
  return {
    type: ORDER_LOADING,
  };
};
