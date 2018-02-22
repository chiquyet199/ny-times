import React from 'react'
import PropTypes from 'prop-types'

import Modal from 'components/Modal'
import PostDetail from 'components/PostDetail'
import './styles.scss'

const Post = props => {
  const { snippet, clickHandler } = props
  return (
    <div className="post__item" onClick={clickHandler}>
      <h1>{snippet}</h1>
      {/* <Modal isVisible={false}>
        <PostDetail {...props} />
      </Modal> */}
    </div>
  )
}

Post.propTypes = {
  clickHandler: PropTypes.func,
  snippet: PropTypes.string,
  multimedia: PropTypes.array,
  pub_date: PropTypes.string,
  source: PropTypes.string,
}

export default Post
