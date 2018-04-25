import  { createSelector } from 'reselect';

const getPurchases = (state) => {
	return state.purchases;
}

export const getPurchasesState = createSelector(
	[ getPurchases ],
	(purchases) => purchases
)

