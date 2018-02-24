import React from 'react'
import { shallow, mount } from 'enzyme'
import configureStore from 'redux-mock-store'

import { SET_ACTIVE_POST, CLEAR_ACTIVE_POST } from 'actions/posts'
import activePostReducer from '../posts'

let state = {
  activePost: null,
  data: [{ _id: 124, snippet: 'test' }, { _id: 123, snippet: 'test' }],
}

describe('>>>R E D U C E R --- Test posts', () => {
  it('+++ reducer for SET_ACTIVE_POST', () => {
    const payload = 124
    state = activePostReducer(state, { type: SET_ACTIVE_POST, payload })
    expect(state.activePost).toEqual({ _id: 124, snippet: 'test' })
  })
  it('+++ reducer for CLEAR_ACTIVE_POST', () => {
    state = activePostReducer(state, { type: CLEAR_ACTIVE_POST })
    expect(state.activePost).toEqual(null)
  })
})
