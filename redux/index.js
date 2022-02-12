import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers";
import { createWrapper } from "next-redux-wrapper";
const rootReducer = combineReducers(reducers);
const middleware = [thunk];

//TODO: get any initialState from localStorage such as cart info, login Info etc.
const initialState = {};
var makeStore = () =>
  createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );
export const wrapper = createWrapper(makeStore, { debug: true });
export default makeStore;
