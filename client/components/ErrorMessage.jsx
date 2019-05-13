import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class ErrorMessage extends PureComponent {
  render() {
    return (
      <div className="error">
        <h2 style={{ textAlign: 'center' }}>Oops! 🤔</h2>
        <p>{this.props.message || 'Something went wrong...'}</p>
      </div>
    )
  }
}

export default ErrorMessage

ErrorMessage.propTypes = {
  message: PropTypes.string
}
