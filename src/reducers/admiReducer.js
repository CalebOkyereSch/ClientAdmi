import {
  ADMI_LOADING,
  GET_ADMI,
  GET_ERRORS,
  ADD_ADMI,
  GET_UPDATE_ADMI,
} from "../actions/types";

const initialState = {
  loading: false,
  admi: null,
  admiUpdate: null,
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
    case ADD_ADMI:
      return {
        ...state,
        loading: false,
      };
    case GET_UPDATE_ADMI:
      return {
        ...state,
        loading: false,
        admiUpdate: action.payload,
      };

    default:
      return state;
  }
}
