import store from 'configs/store'
import { SET_ACTIVE_POST, CLEAR_ACTIVE_POST } from 'actions/active-post'

const initialState = null

let actionHandlers = {}

actionHandlers[SET_ACTIVE_POST] = (state, payload) => {
  const { posts } = store.getState()
  const activePost = posts.filter(post => post._id === payload)
  return activePost[0] || null
}

actionHandlers[CLEAR_ACTIVE_POST] = (state, payload) => {
  return null
}

export default (state = initialState, action) => {
  var handler = actionHandlers[action.type]
  if (handler) return handler(state, action.payload)
  return state
}
