import React from 'react'
import { shallow } from 'enzyme'

import '__tests__/config'

import PostDetail from '../index'
const props = {
  snippet: 'snippet',
  source: 'source',
  pub_date: 'pub_date',
}
const wrapper = shallow(<PostDetail {...props} />)

test('it should render the PostDetail component with h2 tag', () => {
  expect(wrapper.find('h2').text()).toEqual(props.snippet)
})

test('it should render the PostDetail component with p tag', () => {
  expect(wrapper.find('p').text()).toEqual(props.source)
})

test('it should render the PostDetail component with i tag', () => {
  expect(wrapper.find('i').text()).toEqual(props.pub_date)
})
