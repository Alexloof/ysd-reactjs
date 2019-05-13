import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import '../styles/modal.scss'

class Modal extends PureComponent {
  render() {
    const { isOpen, onClose } = this.props

    return (
      <div className="modal">
        {isOpen && <div className={`modal__body`}>{this.props.children}</div>}
        {isOpen && <div className="modal__black-layer" onClick={onClose} />}
      </div>
    )
  }
}

export default Modal

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
}
