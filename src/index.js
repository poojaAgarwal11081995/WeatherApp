/** @format */

// /** @format */

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import { BrowserRouter } from "react-router-dom";


import App from "./App";
ReactDOM.render(
	<React.StrictMode>
	
		<Provider store={store}>
			<BrowserRouter basename="/">
				<App />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root"),
);
