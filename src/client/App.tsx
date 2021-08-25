import * as React from 'react';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import Orders from './views/Orders';
import ReviewOrder from './views/ReviewOrder';

/* HOOK REACT EXAMPLE */
const App = () => {

	return (
		<>
		<Router>
			<main className="container m-2">
				<Navbar />
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route exact path='/orders'>
						<Orders />
					</Route>
					<Route exact path='/orders/:id'>
						<ReviewOrder />
					</Route>
					<Route path='*'>
						<h1 className="display-1 text-warning">404, ya ding-dong</h1>
					</Route>
				</Switch>
			</main>
		</Router>
		</>
	);
};

interface AppProps { }


export default App;
