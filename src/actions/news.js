import Api from 'services/api'
export const FETCH_NEW = 'FETCH_NEW'

export { getNewsDetail }

function getNewsDetail() {
  return dispatch => {
    Api.get('')
    dispatch({ type: FETCH_NEW, payload: {} })
  }
}
