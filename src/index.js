import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux'
import { Route } from 'react-router'

import { routerMiddleware } from 'react-router-redux';
import { reducer } from './reducers';
import createHistory from 'history/createBrowserHistory';
import Home from "./components/Home.Component";
import { Link, Router } from 'react-router-dom';
import TransactionContainer from "./containers/Transaction.Container";
import BalanceContainer from './containers/Balance.Container';
import Immutable from 'immutable'

const history = createHistory();


const {createLogger} = require(`redux-logger`);
const middlewares = [routerMiddleware(history)];

const stateTransformer = (state) => {
	let newState = {};

	if (typeof state === "object" && state !== null && Object.keys(state).length) {
		for (let i of Object.keys(state)) {
			if (Immutable.Iterable.isIterable(state[i])) {
				newState[i] = state[i].toJS();
			} else {
				newState[i] = stateTransformer(state[i]);
			}
		}
	} else {
		newState = state;
	}

	return newState;
};

const level = 'info';

const logger = {};

for (const method in console) {
	if (typeof console[method] === 'function') {
		logger[method] = console[method].bind(console);
	}
}

logger[level] = function levelFn(...args) {
	const lastArg = args.pop();

	if (Array.isArray(lastArg)) {
		return lastArg.forEach(item => {
			console[level].apply(console, [...args, item]);
		});
	}

	console[level].apply(console, arguments);
};

middlewares.push(createLogger({stateTransformer, level, logger}));

const composables = [applyMiddleware(...middlewares)];
let enhancer = compose(...composables);
const store = createStore(reducer, enhancer);


ReactDOM.render(<Provider store={store}>
	<Router history={history}>

		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div className="navbar-nav">
						<Link className="nav-item nav-link" activeclassname="active" to="/">Home</Link>
						<Link to={{ pathname: '/sales', state: { type: 'sales' } }} className="nav-item nav-link" activeclassname="active" >Sales</Link>
						<Link to={{ pathname: '/purchase', state: { type: 'purchases' } }} className="nav-item nav-link" activeclassname="active">Purchase</Link>
						<Link className="nav-item nav-link" activeclassname="active" to="/balance">Balance</Link>
					</div>
				</div>
			</nav>
			<Route exact path="/" component={Home}/>
			<Route exact path="/sales" component={TransactionContainer}/>
			<Route exact path="/purchase" component={TransactionContainer}/>
			<Route exact path="/balance" component={BalanceContainer}>

			</Route>
		</div>
	</Router>
</Provider>, document.getElementById('root'));
registerServiceWorker();
