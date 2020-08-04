import axios from "axios";

import {
  GET_ERRORS,
  GET_ADMI,
  ADMI_LOADING,
  ADD_ADMI,
  GET_UPDATE_ADMI,
} from "./types";

export const getAdmi = () => (dispatch) => {
  dispatch(setAdmiLoading());
  axios
    .get("/api/admi/others")
    .then((res) => {
      dispatch({
        type: GET_ADMI,
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

export const addAdmi = (admi, history) => (dispatch) => {
  dispatch(setAdmiLoading());
  axios.post("api/admi/others", admi).then((res) => {
    dispatch({
      type: ADD_ADMI,
    });
    history.push("/admin");
  });
};

export const deleteAdmi = (id) => (dispatch) => {
  axios
    .delete(`api/admi/others/${id}`)
    .then((res) => {
      dispatch({
        type: GET_ADMI,
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

export const setAdmiUpdate = (data) => (dispatch) => {
  return dispatch({
    type: GET_UPDATE_ADMI,
    payload: data,
  });
};

export const updateAdmi = (data, id, history) => (dispatch) => {
  axios
    .post(`api/admi/update/${id}`, data)
    .then((res) => {
      dispatch({
        type: ADD_ADMI,
      });
      history.push("/admin");
    })
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

export const setAdmiLoading = () => {
  return {
    type: ADMI_LOADING,
  };
};
