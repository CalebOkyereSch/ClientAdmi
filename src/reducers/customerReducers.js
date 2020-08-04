import {
  CUSTOMER_LOADING,
  GET_CUSTOMERS,
  UPDATE_CUSTOMER,
  GET_UPDATE_CUSTOMER,
} from "../actions/types";

const initialState = {
  loading: false,
  customers: null,
  cusUpdate: null,
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

    case GET_UPDATE_CUSTOMER:
      return {
        ...state,
        loading: false,
        cusUpdate: action.payload,
      };
    case UPDATE_CUSTOMER:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
