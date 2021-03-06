import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { setPageIndex } from 'actions/paging'
import Paginator from './Paginator/Paginator'

export class Paging extends React.Component {
  constructor(props) {
    super(props)
    this.goToPage = this.goToPage.bind(this)
    this.lastPage = this.lastPage.bind(this)
    this.nextPage = this.nextPage.bind(this)
    this.firstPage = this.firstPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
    const { data, pageSize, pageIndex } = this.props
    this.state = {
      data: data.slice(pageIndex, pageSize),
      pages: Math.ceil(data.length / pageSize),
      pageSize,
      pageIndex,
    }
  }

  goToPage(page) {
    const { data, pageSize } = this.props
    const pageIndex = page - 1
    const beginIndex = pageIndex * pageSize
    this.props.setPageIndex(pageIndex)
    this.setState(() => ({
      data: data.slice(beginIndex, beginIndex + pageSize),
      pageIndex,
    }))
  }

  nextPage() {
    const { pageIndex, pages } = this.state
    const currentPage = pageIndex + 1
    if (currentPage < pages) this.goToPage(currentPage + 1)
  }

  previousPage() {
    const { pageIndex } = this.state
    const currentPage = pageIndex + 1
    if (currentPage > 1) this.goToPage(currentPage - 1)
  }

  firstPage() {
    const { pageIndex } = this.state
    const currentPage = pageIndex + 1
    if (currentPage > 1) this.goToPage(1)
  }

  lastPage() {
    const { pageIndex, pages } = this.state
    const currentPage = pageIndex + 1
    if (currentPage < pages) this.goToPage(this.state.pages)
  }

  render() {
    const { data, pages, pageIndex } = this.state
    const { renderItem } = this.props
    return (
      <div>
        {data.map(item => {
          return renderItem(item)
        })}
        <Paginator
          pages={pages}
          currentPage={pageIndex + 1}
          onPageClick={this.goToPage}
          nextPage={this.nextPage}
          lastPage={this.lastPage}
          firstPage={this.firstPage}
          previousPage={this.previousPage}
        />
      </div>
    )
  }
}

Paging.propTypes = {
  data: PropTypes.array,
  pageSize: PropTypes.number,
  pageIndex: PropTypes.number,
  renderItem: PropTypes.func,
}

Paging.defaultProps = {
  data: [],
  pageSize: 10,
  renderItem: () => {},
  setPageIndex: () => {},
}

const mapStateToProps = ({ paging }) => {
  return { pageIndex: paging.pageIndex }
}

const mapDispatchToProps = dispatch => {
  return {
    setPageIndex: idx => {
      dispatch(setPageIndex(idx))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Paging)
