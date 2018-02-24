import { setPageIndex, SET_PAGE_INDEX } from '../paging'

describe('>>>A C T I O N --- Test paging action', () => {
  it('+++ actionCreator addInputs', () => {
    const action = setPageIndex(1)
    expect(action).toEqual({ type: SET_PAGE_INDEX, payload: 1 })
  })
})
