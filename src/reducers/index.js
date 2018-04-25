import {routerReducer} from 'react-router-redux';
import {combineReducers} from "redux";
import salesReducer from './salesReducer';
import purchasesReducer from './purchaseReducer';

export const reducer = combineReducers({
	sales: salesReducer,
	purchases: purchasesReducer,
	router: routerReducer
});
