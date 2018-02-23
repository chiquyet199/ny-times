import React from 'react'
import { shallow } from 'enzyme'

import '__tests__/config'

import App from '../index'

test('it should render the App component', () => {
  const wrapper = shallow(<App name="World" />)
  expect(wrapper.find('h1').text()).toEqual('Hello, World!')
})
