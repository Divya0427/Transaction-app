import { ADD_SALE_ITEM } from '../constants/ActionTypes';
import initialState from './initialState';
const initialSales = initialState.salesHistory;

export default function salesReducer(state = initialSales, action) {
  switch (action.type) {    
    case ADD_SALE_ITEM:
      const { description, amount, date, category } = action.newTransactionItem;
      return [
        {
          description,
          amount,
          date,
          category
        },
        ...state,
      ];

    default:
      return state;
  }
}
