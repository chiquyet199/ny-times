import React from 'react'
import './styles.scss'

const Loading = props => {
  return (
    <div className="loading-container">
      <div className="loading" />
      <div id="loading-text">loading</div>
    </div>
  )
}

export default Loading
