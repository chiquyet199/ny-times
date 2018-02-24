import React from 'react'
import { shallow } from 'enzyme'

import '__tests__/config'

import Loading from '../index'

describe('>>>C O M P O N E N T --- Test PostDetail', () => {
  it('+++ it should render the Loading component correct', () => {
    const wrapper = shallow(<Loading />)
    expect(wrapper.contains(<div className="loading" />)).toEqual(true)
  })
})
