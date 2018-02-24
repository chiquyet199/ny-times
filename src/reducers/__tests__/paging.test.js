import React from 'react'

import { SET_PAGE_INDEX } from 'actions/paging'
import pagingReducer from '../paging'

describe('>>>R E D U C E R --- Test paging', () => {
  it('+++ reducer for SET_PAGE_INDEX', () => {
    let state = { pageIndex: 0 }
    const payload = 1
    state = pagingReducer(state, { type: SET_PAGE_INDEX, payload })
    expect(state.pageIndex).toEqual(1)
  })
})
