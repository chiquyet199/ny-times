import Api from 'services/api'
export const FETCH_NEW = 'FETCH_NEW'

export { getNewsDetail }

function getNewsDetail() {
  return dispatch => {
    const today = new Date()
    const currentMonth = today.getMonth() + 1
    const currentYear = today.getFullYear()
    const url = `archive/v1/${currentYear}/${currentMonth}.json`
    Api.get(url).then(res => {
      console.log(res.docs)
    })
    dispatch({ type: FETCH_NEW, payload: [] })
  }
}
