import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import store from 'configs/store'

import './styles.scss'

class Modal extends React.Component {
  constructor(props) {
    super(props)
    const { isVisible } = this.props
    this.state = {
      isVisible,
    }
  }

  componentDidMount() {
    this.modalTarget = document.createElement('div')
    this.modalTarget.className = 'modal'
    if (this.state.isVisible) {
      document.body.appendChild(this.modalTarget)
      this._render()
    }
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.isVisible) {
      document.body.appendChild(this.modalTarget)
      this._render()
    }
  }

  componentWillUnmount() {
    this._destroy()
  }

  _destroy = () => {
    ReactDOM.unmountComponentAtNode(this.modalTarget)
    document.body.removeChild(this.modalTarget)
    this.props.onAfterClosed()
  }

  _render = () => {
    ReactDOM.render(
      <Provider store={store}>
        <div className="modal__overlay">
          <button onClick={this._destroy}>Close</button>
          <div>{this.props.children}</div>
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
  isVisible: PropTypes.bool,
  data: PropTypes.array,
  onAfterClosed: PropTypes.func,
}

Modal.defaultProps = {
  isVisible: false,
  data: [],
  onAfterClosed: () => {},
}

export default Modal
