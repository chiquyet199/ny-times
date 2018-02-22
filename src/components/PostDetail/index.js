import React from 'react'
import PropTypes from 'prop-types'

const PostDetail = props => {
  const { snippet, pub_date, source } = props
  return (
    <div>
      <h2>{snippet}</h2>
      <p>{source}</p>
      <i>{pub_date}</i>
    </div>
  )
}

PostDetail.propTypes = {
  snippet: PropTypes.string,
  multimedia: PropTypes.array,
  pub_date: PropTypes.string,
  source: PropTypes.string,
}

export default PostDetail
