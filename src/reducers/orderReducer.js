import { ORDER_LOADING, GET_ORDER } from "../actions/types";

const initialState = {
  loading: false,
  order: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ORDER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_ORDER:
      return {
        ...state,
        order: action.payload,
        loading: false,
      };

    default:
      return state;
  }
}
