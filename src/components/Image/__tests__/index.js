import React from 'react'
import { shallow } from 'enzyme'

import '__tests__/config'

import Image from '../index'

test('it should render the Image component', () => {
  const wrapper = shallow(<Image path="images/abc.jpg" />)
  expect(wrapper.find('img').length).toEqual(1)
})
