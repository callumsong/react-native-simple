import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

configure({ adapter: new Adapter() });

describe('App', () => {
  const wrapper = shallow(<App />);

  it('should have one Image', () => {
    expect(wrapper.find('Image').length).toBe(1);
  });

  it('should have no name and no full stop if there is no value', () => {
    expect(wrapper.find('Text').length).toBe(1);
    expect(wrapper.find('Text').first().dive().text())
      .toBe('Hello, my name is');
  });

  it('should be able to handle change of text', () => {
    wrapper.instance().handleChange('Bob');
    wrapper.setState(wrapper.instance().state);
    expect(wrapper.find('Text').first().dive().text())
      .toBe('Hello, my name is Bob.');
  });
});
