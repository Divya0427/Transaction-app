import React from 'react';
import { render } from 'react-dom';
import Home from '../Home.component';

describe('Home Component', () => {  
  it('should render the component without crashing', () => {
    const div = document.createElement('div');
    render(<Home />, div);
  });
});
