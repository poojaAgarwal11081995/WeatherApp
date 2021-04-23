/** @format */
// a21e2ca3f7d978a2e50f0499735296d5
import "./App.css";
import { PageOne, PageTwo } from "./component";
import { Route, Router, Switch } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/" component={PageOne} />
				</Switch>
		</div>
	);
}

export default App;
