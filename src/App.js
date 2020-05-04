import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './screens/Home';
import Dashboard from './screens/Dashboard';
function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" exact>
					<Home />
				</Route>
				<Route path="/dashboard" exact>
					<Dashboard />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
