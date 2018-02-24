import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss'

const Post = props => {
  const { _id, snippet, clickHandler } = props
  return (
    <div
      className="post-item"
      onClick={() => {
        clickHandler(_id)
      }}
    >
      <h1>{snippet}</h1>
    </div>
  )
}

Post.propTypes = {
  clickHandler: PropTypes.func,
  snippet: PropTypes.string,
}

Post.defaultProps = {
  clickHandler: () => {},
}

export default Post
