import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import store from 'configs/store'

import './styles.scss'

class Modal extends React.Component {
  componentDidMount() {
    this.modalTarget = document.createElement('div')
    this.modalTarget.className = 'modal'
    document.body.appendChild(this.modalTarget)
    window.addEventListener('keydown', this.listenKeyboard, true)
    this._render()
  }

  listenKeyboard = event => {
    if (event.key === 'Escape' || event.keyCode === 27) {
      this._destroy()
    }
  }

  _destroy = () => {
    window.removeEventListener('keydown', this.listenKeyboard, true)
    if (this.modalTarget) ReactDOM.unmountComponentAtNode(this.modalTarget)
    if (document.body.contains(this.modalTarget)) document.body.removeChild(this.modalTarget)
    this.props.onAfterClosed()
  }

  _render = () => {
    ReactDOM.render(
      <Provider store={store}>
        <div>
          <div className="modal-overlay" onClick={this._destroy} />
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
