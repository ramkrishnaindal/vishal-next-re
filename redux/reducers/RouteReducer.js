import ACTION_KEYS from "../../constants/action-keys";

const initialState = {
  id: "",
};

const RouteReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
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
