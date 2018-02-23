import React from 'react'
import PropTypes from 'prop-types'
import Image from 'components/Image'

import './styles.scss'

const PostDetail = props => {
  const { snippet, pub_date, source, multimedia } = props
  return (
    <div className="post-detail">
      <h2>{snippet}</h2>
      <p>{source}</p>
      <i>{pub_date}</i>
      {multimedia[2] && multimedia[2].legacy && <Image path={multimedia[2].legacy.thumbnail} />}
    </div>
  )
}

PostDetail.propTypes = {
  snippet: PropTypes.string,
  multimedia: PropTypes.array,
  pub_date: PropTypes.string,
  source: PropTypes.string,
}

PostDetail.defaultProps = {
  multimedia: [],
}

export default PostDetail
