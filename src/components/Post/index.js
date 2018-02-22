import React from 'react'
import PropTypes from 'prop-types'

const Post = props => {
  const { title, clickHandler } = props
  return (
    <div onClick={clickHandler}>
      <h3>{title}</h3>
    </div>
  )
}

Post.propTypes = {
  title: PropTypes.string,
  clickHandler: PropTypes.func,
  snippet: PropTypes.string,
  multimedia: PropTypes.array,
  pub_date: PropTypes.string,
  source: PropTypes.string,
}

export default Post
