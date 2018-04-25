/**
  @jest-environment node
*/
import PurchasesReducer from '../purchases.reducer';
import * as ActionTypes from '../../actions/Actions';
import initialState from '../initialState';
const intialPurchases = initialState.purchasesHistory;

describe('Purchases Reducer', () => {
  describe('when action type is not supported', () => {
    it('should return initial state', () => {
      expect(PurchasesReducer(undefined, {})).toEqual(intialPurchases);
    });
  });

  describe('when action type is supported', () => {
    describe('when action type is ADD_PURCHASE_ITEM', () => {
      console.log("intialPurchases::::");
      console.log(intialPurchases);
      it('should return the updated state with new purchase item', () => {
        expect(PurchasesReducer(intialPurchases, { type: ActionTypes.ADD_PURCHASE_ITEM, newTransactionItem: { description: 'New purchase', date: '12/2/2015', category: 'purchases', amount: 120 } }))
          .toEqual([
            {
              description: 'New purchase',
              date: '12/2/2015',
              category: 'purchases',
              amount: 120
            },
            ...initialState.purchasesHistory
          ]);
      });
    });
  });
});
