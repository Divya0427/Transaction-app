import  { createSelector } from 'reselect';

const getSales = (state) => {
	return state.sales;
}

export const getSalesState = createSelector(
	[ getSales ],
	(sales) => sales
)
