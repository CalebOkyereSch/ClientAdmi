import {
  GET_PRODUCT,
  PRODUCT_LOADING,
  DELETE_PRODUCT,
  GET_UPDATE_PRODUCT,
  UPDATE_PRODUCT,
} from "../actions/types";

const initialState = {
  loading: false,
  product: null,
  prodUpdate: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case PRODUCT_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_PRODUCT:
      return {
        ...state,
        product: action.payload,
        loading: false,
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        message: action.payload,
        loading: false,
      };
    case GET_UPDATE_PRODUCT:
      return {
        ...state,
        prodUpdate: action.payload,
        loading: false,
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
