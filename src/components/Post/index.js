import React from 'react'
import PropTypes from 'prop-types'

const Post = props => {
  const { snippet, clickHandler } = props
  return (
    <div onClick={clickHandler}>
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
