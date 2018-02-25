import React from 'react'
import { shallow } from 'enzyme'

import 'configs/tests'

import { Home } from './Home'

describe('>>>S C R E E N --- Test Home', () => {
  it('+++ Render Loading if posts empty', () => {
    const wrapper = shallow(<Home posts={[]} />)
    expect(wrapper.find('Loading').length).toEqual(1)
  })

  it('+++ Render PostList if posts is not empty', () => {
    const wrapper = shallow(<Home posts={[{ _id: 123, snippet: 'snippet' }]} />)
    expect(wrapper.find('Loading').length).toEqual(0)
  })
})
