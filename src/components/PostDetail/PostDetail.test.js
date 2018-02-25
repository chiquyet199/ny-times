import React from 'react'
import { shallow } from 'enzyme'

import 'configs/tests'

import PostDetail from './PostDetail'
const props = {
  snippet: 'snippet',
  source: 'source',
  pub_date: 'pub_date',
  multimedia: { url: 'image/1.jpg' },
}
const wrapper = shallow(<PostDetail {...props} />)

describe('>>>C O M P O N E N T --- Test PostDetail', () => {
  it('+++ it should render the PostDetail component with h2 tag', () => {
    expect(wrapper.find('h2').text()).toEqual(props.snippet)
  })

  it('+++ it should render the PostDetail component with p tag', () => {
    expect(wrapper.find('p').text()).toEqual(props.source)
  })

  it('+++ it should render the PostDetail component with i tag', () => {
    expect(wrapper.find('i').text()).toEqual(props.pub_date)
  })
})
