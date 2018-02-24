import React from 'react'

import { SET_ACTIVE_POST, CLEAR_ACTIVE_POST } from 'actions/posts'
import postsReducer from '../posts'

let state = {
  activePost: null,
  data: [{ _id: 124, snippet: 'test' }, { _id: 123, snippet: 'test' }],
}

describe('>>>R E D U C E R --- Test posts', () => {
  it('+++ reducer for SET_ACTIVE_POST', () => {
    const payload = 124
    state = postsReducer(state, { type: SET_ACTIVE_POST, payload })
    expect(state.activePost).toEqual({ _id: 124, snippet: 'test' })
  })
  it('+++ reducer for CLEAR_ACTIVE_POST', () => {
    state = postsReducer(state, { type: CLEAR_ACTIVE_POST })
    expect(state.activePost).toEqual(null)
  })
})
