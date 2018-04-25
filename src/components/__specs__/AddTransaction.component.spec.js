import React from 'react';
import { render } from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AddTransactionComponent from '../AddTransaction.Component';

Enzyme.configure({ adapter: new Adapter() });

describe('AddTransactionComponent Component', () => {
  let enzymeWrapper;
  let props;

  beforeEach(() => {
    props = {
      actions: {
        addTransactionItem: jest.fn()
      },

    };

    enzymeWrapper = shallow(<AddTransactionComponent {...props} />);
  });

  it('should render without crashing', () => {
    const div = document.createElement('div');
    render(<AddTransactionComponent {...props} />, div);
  });

  it('should render the component', () => {
    expect(enzymeWrapper).toMatchSnapshot();
  });

  it('should contain a form element', () => {
    expect(enzymeWrapper.find('form').length).toEqual(1);
  });

  it('should contain an textarea field', () => {
    expect(enzymeWrapper.find('textarea[name="tweetBody"]').length).toEqual(1);
  });

  it('should update the state onChange event on the textarea field', () => {
    enzymeWrapper.find('textarea[name="tweetBody"]').props().onChange({
      target: {
        name: 'tweetBody',
        value: 'Test Tweet',
      },
    });
    expect(enzymeWrapper.state('tweetBody')).toBeDefined();
    expect(enzymeWrapper.state('tweetBody')).toEqual('Test Tweet');
    expect(enzymeWrapper).toMatchSnapshot();
  });


  describe('when the tweetBody in state has a value', () => {
    it('should call addTransactionItem on form submit', () => {
      const preventDefault = jest.fn();

      enzymeWrapper.find('form').simulate('submit', { preventDefault });
      expect(enzymeWrapper).toMatchSnapshot();
    });
  });

  describe('when the tweetBody in state has a value', () => {
    const now = Date.now();
    Date.now = jest.fn;

    it('should call addTransactionItem on form submit', () => {
      const preventDefault = jest.fn();
      enzymeWrapper.setState({ tweetBody: 'Test Tweet', date: Date.now() });
      expect(enzymeWrapper.instance().props.actions.addTransactionItem.mock.calls.length).toBe(0);
      enzymeWrapper.find('form').simulate('submit', { preventDefault });
      expect(enzymeWrapper.instance().props.actions.addTransactionItem.mock.calls.length).toBe(1);
      expect(enzymeWrapper).toMatchSnapshot();
    });
  });
});
