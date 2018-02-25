import React from 'react'
import PropTypes from 'prop-types'
import { Image } from 'components'

import './PostDetail.scss'

const PostDetail = props => {
  const { snippet, pub_date, source, multimedia } = props
  return (
    <div className="post-detail">
      <h2>{snippet}</h2>
      <p>{source}</p>
      <i>{pub_date}</i>
      {multimedia && <Image path={multimedia.url} />}
    </div>
  )
}

PostDetail.propTypes = {
  snippet: PropTypes.string,
  multimedia: PropTypes.object,
  pub_date: PropTypes.string,
  source: PropTypes.string,
}

PostDetail.defaultProps = {
  multimedia: [],
}

export default PostDetail
