/** @format */
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "../reduser";
const initialState = {};

const store = createStore(
	reducer,
	initialState,
	compose(applyMiddleware(thunk)),
);

export default store;
