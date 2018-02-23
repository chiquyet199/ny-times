import posts from './posts'
import paging from './paging'
import activePost from './active-post'
import { combineReducers } from 'redux'

export default combineReducers({
  posts,
  paging,
  activePost,
})
