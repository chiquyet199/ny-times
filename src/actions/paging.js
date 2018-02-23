export const SET_PAGE_INDEX = 'SET_PAGE_INDEX'

export { setPageIndex }

function setPageIndex(page) {
  return {
    type: SET_PAGE_INDEX,
    payload: page,
  }
}
