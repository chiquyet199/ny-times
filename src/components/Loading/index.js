import React from 'react'
import './styles.scss'

const Loading = props => {
  return (
    <div class="loading-container">
      <div class="loading" />
      <div id="loading-text">loading</div>
    </div>
  )
}

export default Loading
