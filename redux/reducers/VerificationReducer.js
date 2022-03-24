import ACTION_KEYS from "../../constants/action-keys";
import { HYDRATE } from "next-redux-wrapper";
const initialState = {
  isRequesting: false,
  success: false,
  error: null,
  data: null,
  isAuth: true,
};

const VerificationReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case HYDRATE:
      return {
        ...state, // use previous state
        ...action.payload, // apply delta from hydration
      };
    case ACTION_KEYS.VERIFICATION_REQUEST:
      return {
        ...state,
        isRequesting: true,
      };
    case ACTION_KEYS.VERIFICATION_SUCCESS:
      return {
        ...state,
        isRequesting: false,
        response: payload,
      };
    case ACTION_KEYS.VERIFICATION_ERROR:
      return {
        ...state,
        isRequesting: false,
        response: payload.error.response.data,
      };
    default:
      return state;
  }
};

export default VerificationReducer;
