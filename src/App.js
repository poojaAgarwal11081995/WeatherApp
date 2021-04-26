/** @format */

import "./App.css";
import { WeatherComponent } from "./component";
import { Route, Switch } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/" component={WeatherComponent} />
				</Switch>
		</div>
	);
}

export default App;
