import React from 'react'
import { shallow, mount } from 'enzyme'
import configureStore from 'redux-mock-store'

import 'configs/tests'

import Paginator from './Paginator'

const props = {
  pages: 10,
  currentPage: 1,
}

it('+++ Paginator should render first button and prev button with class disabled when at the first page', () => {
  const wrapper = shallow(<Paginator {...props} />)
  expect(wrapper.find('#first-btn').hasClass('disabled')).toEqual(true)
  expect(wrapper.find('#prev-btn').hasClass('disabled')).toEqual(true)
})

it('+++ Paginator should render last button and next button with class disabled when at the last page', () => {
  const wrapper = shallow(<Paginator {...props} currentPage={props.pages} />)
  expect(wrapper.find('#last-btn').hasClass('disabled')).toEqual(true)
  expect(wrapper.find('#next-btn').hasClass('disabled')).toEqual(true)
})
