import React from 'react'
import { shallow, mount } from 'enzyme'
import configureStore from 'redux-mock-store'

import 'configs/tests'

import { Paging } from './Paging'

it('+++ Paging should render children when passed in', () => {
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
  expect(wrapper.find('.x123').length).toEqual(1)
})

describe('>>>C O M P O N E N T --- Test Paging and Paginator', () => {
  it('+++ Paging should render Paginator', () => {
    const wrapper = shallow(<Paging data={[{ _id: 123, snippet: 'string' }]} />)
    expect(wrapper.find('Paginator').length).toEqual(1)
  })

  it('+++ Paging current state page should be 1 when call function firstPage', () => {
    const data = []
    for (let i = 0; i < 101; i++) {
      data.push({ _id: i, snippet: 'string' })
    }
    const wrapper = mount(<Paging data={data} pageIndex={4} />)
    const firstBtn = wrapper.find('#first-btn')
    firstBtn.simulate('click')
    expect(wrapper.state().pageIndex).toEqual(0)
  })

  it('+++ Paging current state page should be 11 when call function lastPage', () => {
    const data = []
    for (let i = 0; i < 101; i++) {
      data.push({ _id: i, snippet: 'string' })
    }
    const wrapper = mount(<Paging data={data} pageIndex={4} />)
    const lastBtn = wrapper.find('#last-btn')
    lastBtn.simulate('click')
    expect(wrapper.state().pageIndex).toEqual(10)
  })

  it('+++ Paging current state page should be 6 when call function nextPage', () => {
    const data = []
    for (let i = 0; i < 101; i++) {
      data.push({ _id: i, snippet: 'string' })
    }
    const wrapper = mount(<Paging data={data} pageIndex={4} />)
    const nextBtn = wrapper.find('#next-btn')
    nextBtn.simulate('click')
    expect(wrapper.state().pageIndex).toEqual(5)
  })

  it('+++ Paging current state page should be 4 when call function previousPage', () => {
    const data = []
    for (let i = 0; i < 101; i++) {
      data.push({ _id: i, snippet: 'string' })
    }
    const wrapper = mount(<Paging data={data} pageIndex={4} />)
    const previousBtn = wrapper.find('#prev-btn')
    previousBtn.simulate('click')
    expect(wrapper.state().pageIndex).toEqual(3)
  })
})
