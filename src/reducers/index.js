import {routerReducer} from 'react-router-redux';
import {combineReducers} from "redux";
import salesReducer from './sales.reducer';
import purchasesReducer from './purchases.reducer';

export const reducer = combineReducers({
	sales: salesReducer,
	purchases: purchasesReducer,
	router: routerReducer
});
