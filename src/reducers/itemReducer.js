import { GET_ITEM, ITEM_LOADING } from "../actions/types";

const initialState = {
  loading: false,
  item: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ITEM_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_ITEM:
      return {
        ...state,
        item: action.payload,
        loading: false,
      };

    default:
      return state;
  }
}
