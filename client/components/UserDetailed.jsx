import React, { Component } from 'react'
import '../styles/userdetailed.scss'
import { userProps } from './UsersList.jsx'

// Im not using the second API call because I already got all the information i need

class UserDetailed extends Component {
  render() {
    const { user } = this.props

    return (
      <div className="user-detailed">
        <h2 className="user-detailed__title">{user.name}</h2>
        <div className="user-detailed__row">
          <span>Username</span>
          <p>{user.username}</p>
        </div>
        <div className="user-detailed__row">
          <span>Email</span>
          <p>{user.email}</p>
        </div>
        <div className="user-detailed__row">
          <span>Username</span>
          <p>{user.website}</p>
        </div>
        <div className="user-detailed__row">
          <span>Phone</span>
          <p>{user.phone}</p>
        </div>
        <div className="user-detailed__row">
          <span>Company</span>
          <p>{user.company.name}</p>
        </div>
        <div className="user-detailed__row">
          <span>Address</span>
          <p>
            {user.address.street}, {user.address.suite}, {user.address.city}
          </p>
        </div>
      </div>
    )
  }
}

export default UserDetailed

UserDetailed.propTypes = {
  user: userProps
}
