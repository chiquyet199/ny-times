import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { setActivePost, clearActivePost } from 'actions/posts'
import Post from 'components/Post'
import Modal from 'components/Modal'
import Paging from 'components/Paging'
import PostDetail from 'components/PostDetail'

export class PostList extends React.Component {
  constructor(props) {
    super(props)
    this.renderItem = this.renderItem.bind(this)
  }

  renderItem(item) {
    return <Post clickHandler={this.props.setActivePost} key={item._id} {...item} />
  }

  render() {
    const { posts, activePost, clearActivePost } = this.props
    return (
      <div>
        {!!activePost && (
          <Modal onAfterClosed={clearActivePost}>
            <PostDetail {...activePost} />
          </Modal>
        )}
        <Paging data={posts} renderItem={this.renderItem} />
      </div>
    )
  }
}

PostList.propTypes = {
  activePost: PropTypes.any,
  posts: PropTypes.array,
  setActivePost: PropTypes.func,
}

PostList.defaultProps = {
  activePost: null,
  posts: [],
  setActivePost: () => {},
}

const mapStateToProps = ({ posts }) => {
  return { activePost: posts.activePost }
}

const mapDispatchToProps = dispatch => {
  return {
    setActivePost: id => {
      dispatch(setActivePost(id))
    },
    clearActivePost: () => {
      dispatch(clearActivePost())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
