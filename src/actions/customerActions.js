import axios from "axios";

import { GET_ERRORS, GET_CUSTOMERS, CUSTOMER_LOADING } from "./types";

export const getCustomers = () => (dispatch) => {
  dispatch(setCustomerLoading());
  axios
    .get("/api/admi/customers")
    .then((res) => {
      dispatch({
        type: GET_CUSTOMERS,
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

export const setCustomerLoading = () => {
  return {
    type: CUSTOMER_LOADING,
  };
};
