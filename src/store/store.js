/** @format */
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./../reduser";
const initialState = {};

const store = createStore(
	reducers,
	initialState,
	compose(applyMiddleware(thunk)),
);

export default store;
