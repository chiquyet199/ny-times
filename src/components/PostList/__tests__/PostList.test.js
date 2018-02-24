import React from 'react'
import { shallow } from 'enzyme'

import '__tests__/config'

import { PostList } from '../index'

const props = {
  activePost: {
    snippet: 'snippet',
    source: 'source',
    pub_date: 'pub_date',
    multimedia: {},
  },
  posts: [
    {
      snippet: 'snippet',
      source: 'source',
      pub_date: 'pub_date',
      multimedia: {},
    },
  ],
}
const wrapper = shallow(<PostList {...props} />)

describe('>>>C O M P O N E N T --- Test PostList', () => {
  it('+++ it should render the PostList component with Modal if there is activePost', () => {
    expect(wrapper.find('Modal').length).toEqual(1)
  })

  it('+++ it should render the PostList component without Modal if there is no activePost', () => {
    const wrapper = shallow(<PostList {...props} activePost={null} />)
    expect(wrapper.find('Modal').length).toEqual(0)
  })
})
