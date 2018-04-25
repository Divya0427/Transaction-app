import * as ActionTypes from '../../constants/ActionTypes';
import * as TransactionActions from '../Actions';

describe('Add new transaction', () => {
  it('should create an action to add a new transaction item', () => {
    const newSaleItem = { description: 'test description', date: '27/01/2018', amount: 230 };
    const expectedAction = { type: ActionTypes.ADD_SALE_ITEM, newSaleItem };

    expect(TransactionActions.addTransactionItem(newSaleItem)).toEqual(expectedAction);
  });
});
