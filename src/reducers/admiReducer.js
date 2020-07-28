import { ADMI_LOADING, GET_ADMI } from "../actions/types";

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

    default:
      return state;
  }
}
