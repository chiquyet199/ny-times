import Api from 'services/api'
export const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS'

export { getNewsDetail }

function getNewsDetail() {
  return dispatch => {
    const today = new Date()
    const currentMonth = today.getMonth() + 1
    const currentYear = today.getFullYear()
    const url = `archive/v1/${currentYear}/${currentMonth}.json`
    Api.get(url).then(res => {
      dispatch({ type: FETCH_NEWS_SUCCESS, payload: res.docs })
    })
  }
}
