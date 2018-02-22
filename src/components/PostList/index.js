import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getNewsDetail } from 'actions/news'
import Post from 'components/Post'

class PostList extends React.Component {
  constructor(props) {
    super(props)
    this.onClickHandler = this.onClickHandler.bind(this)
  }

  onClickHandler() {
    this.props.getNewsDetail()
  }

  render() {
    console.log(1)
    const { data } = this.props
    return (
      <div>
        <button onClick={this.xxx}>123</button>
        {data.map(item => {
          return <Post clickHandler={this.onClickHandler} key={item.id} {...item} />
        })}
      </div>
    )
  }
}

PostList.propTypes = {
  data: PropTypes.array,
  getNewsDetail: PropTypes.func,
}

const mapDispatchToProps = dispatch => {
  return {
    getNewsDetail: () => dispatch(getNewsDetail()),
  }
}

export default connect(null, mapDispatchToProps)(PostList)
