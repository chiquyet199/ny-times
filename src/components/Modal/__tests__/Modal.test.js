import React from 'react'
import { mount } from 'enzyme'

import 'configs/tests'

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
describe('>>>C O M P O N E N T --- Test Modal', () => {
  it('+++ it should render the Modal component with modal noscript', () => {
    expect(wrapper.find('noscript').length).toEqual(1)
  })
})
