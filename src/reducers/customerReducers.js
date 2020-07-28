import { CUSTOMER_LOADING, GET_CUSTOMERS } from "../actions/types";

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

    default:
      return state;
  }
}
