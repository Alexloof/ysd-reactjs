import React, { PureComponent } from 'react'
import '../styles/loading.scss'

class Loading extends PureComponent {
  render() {
    return (
      <div className="loading">
        <div className="loading__body">
          <div className="loading__body__item first" />
          <div className="loading__body__item second" />
          <div className="loading__body__item third" />
          <div className="loading__body__item forth" />
        </div>
      </div>
    )
  }
}

export default Loading
