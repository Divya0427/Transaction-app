import { ADD_PURCHASE_ITEM } from '../constants/ActionTypes';
import initialState from './initialState';
const initialPurchases = initialState.purchasesHistory;

export default function purchasesReducer(state = initialPurchases, action) {
  switch(action.type) {    
    case ADD_PURCHASE_ITEM:
    console.log(state);//purchases array
    console.log(action);
      const { description, amount, date, category } = action.newTransactionItem;
      console.log(action.newTransactionItem);
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
