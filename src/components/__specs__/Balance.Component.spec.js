import React from 'react';
import { render } from 'react-dom';
import BalanceComponent from '../Balance.component';

describe('Balance Component', () => {
  const data = {
    totalSales: 120,
    totalPurchases: 700
  }

  it('should render the component without crashing', () => {
    const div = document.createElement('div');
    render(<BalanceComponent data={data} />, div);
  });
});
