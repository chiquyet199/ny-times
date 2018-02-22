import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { getPosts } from 'actions/posts'
import Post from 'components/Post'
import Modal from 'components/Modal'
import PostDetail from 'components/PostDetail'

class PostList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isVisible: false,
    }
  }

  componentDidMount() {
    this.props.getPosts()
  }

  onPostItemClickHandler = () => {
    this.setState({ isVisible: true })
  }

  render() {
    const { data } = this.props
    const { isVisible } = this.state
    return (
      <div>
        <Modal isVisible={isVisible}>
          <PostDetail {...data[0]} />
        </Modal>
        <div>
          {data.map(item => {
            return <Post clickHandler={this.onPostItemClickHandler} key={item._id} {...item} />
          })}
        </div>
      </div>
    )
  }
}

PostList.propTypes = {
  data: PropTypes.array,
  getPosts: PropTypes.func,
}

const mapDispatchToProps = dispatch => {
  return {
    getPosts: () => dispatch(getPosts()),
  }
}

export default connect(null, mapDispatchToProps)(PostList)
