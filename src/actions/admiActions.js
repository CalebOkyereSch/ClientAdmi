import axios from "axios";

import { GET_ERRORS, GET_ADMI, ADMI_LOADING } from "./types";

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

export const setAdmiLoading = () => {
  return {
    type: ADMI_LOADING,
  };
};
