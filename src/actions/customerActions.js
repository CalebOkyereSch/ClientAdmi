import axios from "axios";

import {
  DELETE_CUSTOMER,
  GET_ERRORS,
  GET_CUSTOMERS,
  CUSTOMER_LOADING,
  UPDATE_CUSTOMER,
  GET_UPDATE_CUSTOMER,
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
export const updateCustomer = (data, id, history) => (dispatch) => {
  axios
    .post(`api/admi/user/update/${id}`, data)
    .then((res) => {
      dispatch({
        type: UPDATE_CUSTOMER,
      });
      history.push("/customers");
    })
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

export const setCusUpdate = (data) => (dispatch) => {
  return dispatch({
    type: GET_UPDATE_CUSTOMER,
    payload: data,
  });
};

export const setCustomerLoading = () => {
  return {
    type: CUSTOMER_LOADING,
  };
};
