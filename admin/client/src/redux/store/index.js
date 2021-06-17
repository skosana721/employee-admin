import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { employeeReducer } from "../reducer/employeeReducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  employeeReducer,
  composeEnhancers(applyMiddleware(thunk))
);
