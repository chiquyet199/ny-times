import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { setActivePost, clearActivePost } from 'actions/active-post'
import Post from 'components/Post'
import Modal from 'components/Modal'
import Paging from 'components/Paging'
import PostDetail from 'components/PostDetail'

class PostList extends React.Component {
  constructor(props) {
    super(props)
    const { activePost } = this.props
    this.state = {
      isVisible: !!activePost,
      activePost,
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ activePost: nextProps.activePost }, () => {
      if (!!nextProps.activePost) {
        this.showPostDetailModal()
      }
    })
  }

  showPostDetailModal = () => {
    this.setState({ isVisible: true })
  }

  renderItem = item => {
    return <Post clickHandler={this.props.setActivePost} key={item._id} {...item} />
  }

  render() {
    const { isVisible, activePost } = this.state
    const { posts, clearActivePost } = this.props
    return (
      <div>
        <Modal isVisible={isVisible} onAfterClosed={clearActivePost}>
          <PostDetail {...activePost} />
        </Modal>
        <Paging data={posts} renderItem={this.renderItem} />
      </div>
    )
  }
}

PostList.propTypes = {
  posts: PropTypes.array,
  setActivePost: PropTypes.func,
}

const mapStateToProps = ({ activePost }) => {
  return { activePost }
}

const mapDispatchToProps = dispatch => {
  return {
    setActivePost: id => {
      dispatch(setActivePost(id))
    },
    clearActivePost: () => {
      dispatch(clearActivePost)
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
