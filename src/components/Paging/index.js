import React from 'react'
import PropTypes from 'prop-types'

import Paginator from './Paginator'

class Paging extends React.Component {
  constructor(props) {
    super(props)
    const { data, pageSize, pageIndex } = this.props
    this.state = {
      data: data.slice(pageIndex, pageSize),
      pages: Math.ceil(data.length / pageSize),
      pageSize,
      pageIndex,
    }
  }

  componentWillReceiveProps(props) {
    const { data, pageSize, pageIndex } = props

    this.setState({
      data: data.slice(pageIndex, pageSize),
      pages: Math.ceil(data.length / pageSize),
      pageSize,
      pageIndex,
    })
  }

  goToPage = page => {
    const { data, pageSize } = this.props
    const pageIndex = page - 1
    const beginIndex = pageIndex * pageSize
    this.setState(prevState => ({
      data: data.slice(beginIndex, beginIndex + pageSize),
      pageIndex,
    }))
  }

  nextPage = () => {
    const { pageIndex, pages } = this.state
    const currentPage = pageIndex + 1
    if (currentPage < pages) this.goToPage(currentPage + 1)
  }

  previousPage = () => {
    const { pageIndex } = this.state
    const currentPage = pageIndex + 1
    if (currentPage > 1) this.goToPage(currentPage - 1)
  }

  firstPage = () => {
    this.goToPage(1)
  }

  lastPage = () => {
    this.goToPage(this.state.pages)
  }

  render() {
    console.log('render')
    const { data, pages, pageSize, pageIndex } = this.state
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
  pageIndex: 0,
  renderItem: () => {},
}

export default Paging
