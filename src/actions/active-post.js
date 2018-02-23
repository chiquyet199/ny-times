export const SET_ACTIVE_POST = 'SET_ACTIVE_POST'
export const CLEAR_ACTIVE_POST = 'CLEAR_ACTIVE_POST'

export { setActivePost, clearActivePost }

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
