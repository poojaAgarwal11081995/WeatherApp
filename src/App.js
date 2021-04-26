/** @format */
// a21e2ca3f7d978a2e50f0499735296d5
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
