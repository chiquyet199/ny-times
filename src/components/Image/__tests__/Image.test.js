import React from 'react'
import { shallow } from 'enzyme'

import '__tests__/config'

import Image from '../index'

describe('>>>C O M P O N E N T --- Test PostDetail', () => {
  it('+++ it should render the Image component', () => {
    const wrapper = shallow(<Image path="images/abc.jpg" />)
    expect(wrapper.find('img').length).toEqual(1)
  })
})
