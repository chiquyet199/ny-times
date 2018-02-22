import posts from './posts'
import activePost from './active-post'
import { combineReducers } from 'redux'

export default combineReducers({
  posts,
  activePost,
})
