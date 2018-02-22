import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss'

const Post = props => {
  const { _id, snippet, clickHandler } = props
  return (
    <div
      className="post__item"
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
  multimedia: PropTypes.array,
  pub_date: PropTypes.string,
  source: PropTypes.string,
}

export default Post
