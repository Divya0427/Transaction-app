/**
  @jest-environment node
*/
import SalesReducer from '../sales.reducer';
import * as ActionTypes from '../../actions/Actions';
import initialState from '../initialState';
const initialSales = initialState.salesHistory;

describe('Sales Reducer', () => {
  describe('when action type is not supported', () => {
    it('should return initial state', () => {
      expect(SalesReducer(undefined, {})).toEqual(initialSales);
    });
  });

  describe('when action type is supported', () => {
    describe('when action type is ADD_SALE_ITEM', () => {
      it('should return the updated state with new sale item', () => {
        expect(SalesReducer(initialState.salesHistory, { type: ActionTypes.ADD_SALE_ITEM, newTransactionItem: { description: 'New Sale', category: 'sales', date: '12/2/2015', amount: 120 } }))
          .toEqual([
            {
              description: 'New Sale',
              date: '12/2/2015',
              amount: 120,
              category: 'sales'
            },
            ...initialState.salesHistory
          ]);
      });
    });
  });
});
