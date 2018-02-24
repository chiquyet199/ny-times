import { setActivePost, clearActivePost, SET_ACTIVE_POST, CLEAR_ACTIVE_POST } from '../posts'

describe('>>>A C T I O N --- Test active-post action', () => {
  it('+++ actionCreator addInputs', () => {
    const action = setActivePost(1)
    expect(action).toEqual({ type: SET_ACTIVE_POST, payload: 1 })
  })

  it('+++ actionCreator clearActivePost', () => {
    const action = clearActivePost()
    expect(action).toEqual({ type: CLEAR_ACTIVE_POST })
  })
})
