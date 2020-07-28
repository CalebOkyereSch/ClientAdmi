import { ADD_PRODUCT } from "../actions/types";

const initialState = {
  loading: false,
  product: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case PRODUCT_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ADD_PRODUCT:
      return {
        ...state,
        product: action.payload,
        loading: false,
      };

    default:
      return state;
  }
}
