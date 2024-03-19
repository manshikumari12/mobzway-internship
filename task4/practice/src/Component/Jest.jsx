
import React from 'react';
import { shallow } from 'enzyme';

import { MyComponent } from './MyComponent';

describe('Counter component', () => {
  it('renders the component', () => {
    const wrapper = shallow(<MyComponent />);
    expect(wrapper.find('p').text()).toEqual('Count: 0');
  });

  it('increments count when button is clicked', () => {
    const wrapper = shallow(<MyComponent />);
    wrapper.find('button').simulate('click');
    expect(wrapper.find('p').text()).toEqual('Count: 1');
  });
});
