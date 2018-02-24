import { GET_POSTS_SUCCESS, SET_ACTIVE_POST, CLEAR_ACTIVE_POST } from 'actions/posts'

const initialState = {
  activePost: null,
  data: [],
}

let actionHandlers = {}

actionHandlers[SET_ACTIVE_POST] = (state, payload) => {
  const activePosts = state.data.filter(post => post._id === payload)
  return { ...state, activePost: activePosts[0] || null }
}

actionHandlers[CLEAR_ACTIVE_POST] = (state, payload) => {
  return { ...state, activePost: null }
}

actionHandlers[GET_POSTS_SUCCESS] = (state, posts) => {
  return {
    ...state,
    data: posts.map(post => {
      const { _id, snippet, pub_date, source, multimedia } = post
      return {
        _id,
        snippet,
        pub_date,
        source,
        multimedia: multimedia[0],
      }
    }),
  }
}

export default (state = initialState, action) => {
  var handler = actionHandlers[action.type]
  if (handler) return handler(state, action.payload)
  return state
}
