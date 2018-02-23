import React from 'react'
import { shallow } from 'enzyme'

import '__tests__/config'

import { PostList } from '../index'

const props = {
  activePost: {},
  posts: [
    {
      snippet: 'snippet',
      source: 'source',
      pub_date: 'pub_date',
    },
  ],
}
const wrapper = shallow(<PostList {...props} />)

test('it should render the PostList component with Modal if there is activePost', () => {
  expect(wrapper.find('Modal').length).toEqual(1)
})

test('it should render the PostList component without Modal if there is no activePost', () => {
  const wrapper = shallow(<PostList {...props} activePost={null} />)
  expect(wrapper.find('Modal').length).toEqual(0)
})
