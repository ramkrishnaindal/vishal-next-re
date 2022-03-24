import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers";
import { createWrapper, HYDRATE } from "next-redux-wrapper";

const rootReducer = combineReducers(reducers);
const middleware = [thunk];
const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    return nextState;
  } else {
    return rootReducer(state, action);
  }
};
//TODO: get any initialState from localStorage such as cart info, login Info etc.
const initialState = {};
var makeStore = () =>
  createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );
export const wrapper = createWrapper(makeStore, { debug: true });
export default makeStore;
