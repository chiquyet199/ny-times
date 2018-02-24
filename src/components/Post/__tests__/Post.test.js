import React from 'react'
import { shallow } from 'enzyme'

import '__tests__/config'

import Post from '../index'
const props = {
  snippet: 'snippet',
  source: 'source',
  pub_date: 'pub_date',
}
const wrapper = shallow(<Post {...props} />)

describe('>>>C O M P O N E N T --- Test Post', () => {
  it('+++ it should render the Post component with h1 tag', () => {
    expect(wrapper.find('h1').text()).toEqual(props.snippet)
  })
})
