import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import store from 'configs/store'

import './Modal.scss'

class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.open = this.open.bind(this)
    this.close = this.close.bind(this)
    this.listenKeyboard = this.listenKeyboard.bind(this)
  }

  componentDidMount() {
    this.modalTarget = document.createElement('div')
    this.modalTarget.className = 'modal'
    document.body.appendChild(this.modalTarget)
    window.addEventListener('keydown', this.listenKeyboard, true)
    this.open()
  }

  listenKeyboard(event) {
    if (event.key === 'Escape' || event.keyCode === 27) {
      this.close()
    }
  }

  close() {
    window.removeEventListener('keydown', this.listenKeyboard, true)
    if (this.modalTarget) ReactDOM.unmountComponentAtNode(this.modalTarget)
    if (document.body.contains(this.modalTarget)) document.body.removeChild(this.modalTarget)
    this.props.onAfterClosed()
  }

  open() {
    ReactDOM.render(
      <Provider store={store}>
        <div>
          <div className="modal-overlay" onClick={this.close} />
          <div className="modal-content">
            <div>{this.props.children}</div>
          </div>
        </div>
      </Provider>,
      this.modalTarget,
    )
  }

  render() {
    return <noscript />
  }
}

Modal.propTypes = {
  onAfterClosed: PropTypes.func,
}

Modal.defaultProps = {
  onAfterClosed: () => {},
}

export default Modal
