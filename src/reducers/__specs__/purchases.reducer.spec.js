import PurchasesReducer from '../purchaseReducer';
import * as ActionTypes from '../../actions/Actions';
import initialState from '../initialState';

describe('Purchases Reducer', () => {
  describe('when action type is not supported', () => {
    it('should return initial state', () => {
      expect(PurchasesReducer(undefined, {})).toEqual(initialState.purchasesHistory);
    });
  });

  describe('when action type is supported', () => {
    describe('when action type is ADD_PURCHASE_ITEM', () => {
      it('should return the updated state with new purchase item', () => {
        expect(PurchasesReducer(initialState, { type: ActionTypes.ADD_PURCHASE_ITEM, newTransactionItem: { description: 'New purchase', date: '12/2/2015', amount: 120 } }))
          .toEqual([
            {
              description: 'New purchase',
              date: '12/2/2015',
              amount: 120
            },
            ...initialState,
          ]);
      });
    });
  });
});
