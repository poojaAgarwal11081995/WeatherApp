/** @format */

// /** @format */

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import App from "./App";
ReactDOM.render(
	<React.StrictMode>
	
		<Provider store={store}>
			<BrowserRouter basename="/">
			<ToastContainer
position="top-right"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick

pauseOnFocusLoss
draggable
pauseOnHover
/>
<App />
<ToastContainer />
				
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root"),
);
