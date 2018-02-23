import React from 'react'
import { shallow, mount } from 'enzyme'
import configureStore from 'redux-mock-store'

import '__tests__/config'

import { Paging } from '../index'
import Paginator from '../Paginator'

const props = {
  pages: 10,
  currentPage: 1,
}

test('Paginator should render first button and prev button with class disabled when at the first page', () => {
  const wrapper = shallow(<Paginator {...props} />)
  expect(wrapper.find('#first-btn').hasClass('disabled')).toEqual(true)
  expect(wrapper.find('#prev-btn').hasClass('disabled')).toEqual(true)
})

test('Paginator should render last button and next button with class disabled when at the last page', () => {
  const wrapper = shallow(<Paginator {...props} currentPage={props.pages} />)
  expect(wrapper.find('#last-btn').hasClass('disabled')).toEqual(true)
  expect(wrapper.find('#next-btn').hasClass('disabled')).toEqual(true)
})

test('Paging should render children when passed in', () => {
  const wrapper = shallow(
    <Paging
      data={[{ _id: 123, snippet: 'string' }]}
      renderItem={item => (
        <div className={`x${item._id}`} key={item._id}>
          {item.snippet}
        </div>
      )}
    />,
  )
  console.log(wrapper)
  expect(wrapper.find('.x123').length).toEqual(1)
})

test('Paging should render Paginator', () => {
  const wrapper = shallow(<Paging data={[{ _id: 123, snippet: 'string' }]} />)
  expect(wrapper.find('Paginator').length).toEqual(1)
})

test('Paging current state page should be 1 when call function firstPage', () => {
  const data = []
  for (let i = 0; i < 101; i++) {
    data.push({ _id: i, snippet: 'string' })
  }
  const wrapper = mount(<Paging data={data} pageIndex={4} />)
  const firstBtn = wrapper.find('#first-btn')
  firstBtn.simulate('click')
  expect(wrapper.state().pageIndex).toEqual(0)
})

test('Paging current state page should be 11 when call function lastPage', () => {
  const data = []
  for (let i = 0; i < 101; i++) {
    data.push({ _id: i, snippet: 'string' })
  }
  const wrapper = mount(<Paging data={data} pageIndex={4} />)
  const lastBtn = wrapper.find('#last-btn')
  lastBtn.simulate('click')
  expect(wrapper.state().pageIndex).toEqual(10)
})

test('Paging current state page should be 6 when call function nextPage', () => {
  const data = []
  for (let i = 0; i < 101; i++) {
    data.push({ _id: i, snippet: 'string' })
  }
  const wrapper = mount(<Paging data={data} pageIndex={4} />)
  const nextBtn = wrapper.find('#next-btn')
  nextBtn.simulate('click')
  expect(wrapper.state().pageIndex).toEqual(5)
})

test('Paging current state page should be 4 when call function previousPage', () => {
  const data = []
  for (let i = 0; i < 101; i++) {
    data.push({ _id: i, snippet: 'string' })
  }
  const wrapper = mount(<Paging data={data} pageIndex={4} />)
  const previousBtn = wrapper.find('#prev-btn')
  previousBtn.simulate('click')
  expect(wrapper.state().pageIndex).toEqual(3)
})
