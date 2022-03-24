import ACTION_KEYS from "../../constants/action-keys";
import { HYDRATE } from "next-redux-wrapper";
const initialState = {
  id: "",
};

const RouteReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case HYDRATE:
      return {
        ...state, // use previous state
        ...action.payload, // apply delta from hydration
      };
    case ACTION_KEYS.ROUTE_PUSH:
      return {
        ...state,
        id: action.payload.id,
      };
    case ACTION_KEYS.ROUTE_CLEAR:
      return {
        ...state,
        id: "",
      };
    default:
      return state;
  }
};

export default RouteReducer;
