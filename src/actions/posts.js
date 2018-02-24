import Api from 'services/api'

export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
export const SET_ACTIVE_POST = 'SET_ACTIVE_POST'
export const CLEAR_ACTIVE_POST = 'CLEAR_ACTIVE_POST'

export { setActivePost, clearActivePost, getPosts }

function getPosts() {
  return (dispatch, getState) => {
    const today = new Date()
    const currentMonth = today.getMonth() + 1
    const currentYear = today.getFullYear()
    const url = `archive/v1/${currentYear}/${currentMonth}.json`
    Api.get(url).then(res => {
      dispatch({ type: GET_POSTS_SUCCESS, payload: res.docs })
    })
  }
}

function setActivePost(id) {
  return {
    type: SET_ACTIVE_POST,
    payload: id,
  }
}

function clearActivePost() {
  return {
    type: CLEAR_ACTIVE_POST,
  }
}
