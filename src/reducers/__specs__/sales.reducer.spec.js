import SalesReducer from '../salesReducer';
import * as ActionTypes from '../../actions/Actions';
import initialState from '../initialState';

describe('Sales Reducer', () => {
  describe('when action type is not supported', () => {
    it('should return initial state', () => {
      expect(SalesReducer(undefined, {})).toEqual(initialState.salesHistory);
    });
  });

  describe('when action type is supported', () => {
    describe('when action type is ADD_SALE_ITEM', () => {
      it('should return the updated state with new sale item', () => {
        expect(SalesReducer(initialState, { type: ActionTypes.ADD_SALE_ITEM, newTransactionItem: { description: 'New Sale', date: '12/2/2015', amount: 120 } }))
          .toEqual([
            {
              description: 'New Sale',
              date: '12/2/2015',
              amount: 120
            },
            ...initialState,
          ]);
      });
    });
  });
});
