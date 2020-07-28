import axios from "axios";

import { GET_ERRORS } from "./types";

export const addProduct = (product, history) => (dispatch) => {
  axios
    .post("/api/admi/product", product)
    .then((res) => {
      console.log(res);
      history.push("/products");
    })
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};
