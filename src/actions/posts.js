import Api from 'services/api'
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'

export { getPosts }

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
