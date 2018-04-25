import * as ActionTypes from '../../constants/ActionTypes';
import * as TransactionActions from '../Actions';

describe('Add new transaction', () => {
  it('should create an action to add a new sale item', () => {
    const newTransactionItem = { description: 'test description', date: '27/01/2018', amount: 230, category: 'sales' };
    const expectedAction = { type: ActionTypes.ADD_SALE_ITEM, newTransactionItem };

    expect(TransactionActions.addTransactionItem(newTransactionItem)).toEqual(expectedAction);
  });

  it('should create an action to add a new purchase item', () => {
    const newTransactionItem = { description: 'test description', date: '27/01/2018', amount: 230, category: 'purchases' };
    const expectedAction = { type: ActionTypes.ADD_PURCHASE_ITEM, newTransactionItem };

    expect(TransactionActions.addTransactionItem(newTransactionItem)).toEqual(expectedAction);
  });

});
