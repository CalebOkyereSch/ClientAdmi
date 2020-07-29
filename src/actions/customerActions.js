import axios from "axios";

import {
  DELETE_CUSTOMER,
  GET_ERRORS,
  GET_CUSTOMERS,
  CUSTOMER_LOADING,
} from "./types";

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
        payload: err.data,
      })
    );
};

export const deleteCustomer = (id) => (dispatch) => {
  axios
    .delete(`api/admi/customer/${id}`)
    .then((res) => {
      dispatch({
        type: DELETE_CUSTOMER,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};
export const setCustomerLoading = () => {
  return {
    type: CUSTOMER_LOADING,
  };
};
