import {
  DELETE_CUSTOMER,
  CUSTOMER_LOADING,
  GET_CUSTOMERS,
  GET_ERRORS,
} from "../actions/types";

const initialState = {
  loading: false,
  customers: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CUSTOMER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_CUSTOMERS:
      return {
        ...state,
        customers: action.payload,
        loading: false,
      };

    case GET_ERRORS:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
