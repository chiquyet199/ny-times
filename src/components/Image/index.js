import React from 'react'
import PropTypes from 'prop-types'
import { IMG_BASE_URL } from 'configs/common'

import './styles.scss'

const Image = props => {
  const { path } = props
  return <img src={`${IMG_BASE_URL}${path}`} />
}

Image.propTypes = {
  path: PropTypes.string,
}

export default Image
