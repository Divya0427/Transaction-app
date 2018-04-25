import * as ActionTypes from '../constants/ActionTypes';

export const addTransactionItem = (newTransactionItem) => {
	const type = (newTransactionItem.category === 'sales') ? ActionTypes.ADD_SALE_ITEM : ActionTypes.ADD_PURCHASE_ITEM;
	return {
			type,
			newTransactionItem
		}
}
