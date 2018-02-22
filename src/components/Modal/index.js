import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from 'configs/store'

import './styles.scss'

class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isVisible: false,
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
    ReactDOM.unmountComponentAtNode(this.modalTarget)
    document.body.removeChild(this.modalTarget)
  }

  _render = () => {
    ReactDOM.render(
      <Provider store={store}>
        <div className="modal__overlay">
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

export default Modal
