import { ADD_PURCHASE_ITEM } from '../constants/ActionTypes';
import initialState from './initialState';
const initialPurchases = initialState.purchasesHistory;

export default function purchasesReducer(state = initialPurchases, action) {
  switch(action.type) {    
    case ADD_PURCHASE_ITEM:
      const { description, amount, date } = action.newTransactionItem;
      return [
        {
          description,
          amount,
          date
        },
        ...state,
      ];
    default: 
      return state;
  }
}
