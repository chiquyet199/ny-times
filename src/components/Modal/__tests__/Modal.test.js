import React from 'react'
import { mount } from 'enzyme'

import '__tests__/config'

import Modal from '../index'

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
const wrapper = mount(
  <Modal>
    <div>123</div>
  </Modal>,
)

test('it should render the Modal component with modal noscript', () => {
  expect(wrapper.find('noscript').length).toEqual(1)
})
