import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getNewsDetail } from 'actions/news'
import Post from 'components/Post'

class PostList extends React.Component {
  constructor(props) {
    super(props)
  }

  onClickHandler() {
    this.props.getNewsDetail()
  }

  render() {
    const { data } = this.props
    return (
      <div>
        {data.map(item => {
          return <Post onClickHandler={this.onClickHandler} key={item.id} title={item.title} />
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
    getNewsDetail: () => {
      return dispatch(getNewsDetail)
    },
  }
}

export default connect(null, mapDispatchToProps)(PostList)
