import React from 'react'
import PropTypes from 'prop-types'

import './Paginator.scss'

const beforeSteps = [-500, -150, -50, -10, -2, -1]
const afterSteps = [1, 2, 10, 50, 150, 500]

const Paginator = props => {
  let { pages, currentPage, onPageClick, firstPage, lastPage, nextPage, previousPage } = props
  const canMoveBack = currentPage > 1
  const canMoveNext = currentPage < pages
  const moveBackClassName = canMoveBack ? 'item' : 'item disabled'
  const moveNextClassName = canMoveNext ? 'item' : 'item disabled'
  return (
    <div className="paginator">
      <div id="first-btn" onClick={firstPage} className={moveBackClassName}>
        First
      </div>
      <div id="prev-btn" onClick={previousPage} className={moveBackClassName}>
        {'<'}
      </div>

      {beforeSteps.map(step => {
        const page = currentPage + step
        return page > 0 ? (
          <div
            key={page}
            className="item"
            onClick={() => {
              onPageClick(page)
            }}
          >
            {page}
          </div>
        ) : null
      })}

      <div className="item active">{currentPage}</div>

      {afterSteps.map(step => {
        const page = currentPage + step
        return page < pages ? (
          <div
            key={page}
            className="item"
            onClick={() => {
              onPageClick(page)
            }}
          >
            {page}
          </div>
        ) : null
      })}

      <div id="next-btn" onClick={nextPage} className={moveNextClassName}>
        {'>'}
      </div>
      <div id="last-btn" onClick={lastPage} className={moveNextClassName}>
        Last
      </div>
    </div>
  )
}

Paginator.propTypes = {
  pages: PropTypes.number,
  currentPage: PropTypes.number,
  onPageClick: PropTypes.func,
  firstPage: PropTypes.func,
  lastPage: PropTypes.func,
  nextPage: PropTypes.func,
  previousPage: PropTypes.func,
}

Paginator.defaultProps = {
  pages: 1,
  currentPage: 1,
  onPageClick: () => {},
  firstPage: () => {},
  lastPage: () => {},
  nextPage: () => {},
  previousPage: () => {},
}

export default Paginator
