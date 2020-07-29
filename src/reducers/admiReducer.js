import {
  ADMI_LOADING,
  GET_ADMI,
  DELETE_ADMI,
  GET_ERRORS,
  ADD_ADMI,
} from "../actions/types";

const initialState = {
  loading: false,
  admi: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADMI_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_ADMI:
      return {
        ...state,
        admi: action.payload,
        loading: false,
      };

    case GET_ERRORS:
      return {
        ...state,
        customers: {},
      };
    case ADD_ADMI:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
