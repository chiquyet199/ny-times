import { SET_PAGE_INDEX } from 'actions/paging'

const initialState = { pageIndex: 0 }

let actionHandlers = {}

actionHandlers[SET_PAGE_INDEX] = (state, page) => {
  return { ...state, pageIndex: page }
}

export default (state = initialState, action) => {
  var handler = actionHandlers[action.type]
  if (handler) return handler(state, action.payload)
  return state
}
