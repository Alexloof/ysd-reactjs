import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import '../styles/userslist.scss'

class UsersList extends PureComponent {
  render() {
    const { users, onUserClick } = this.props

    return (
      <div className="userslist">
        <div className="userslist__header underline">
          <p className="userslist__header__item">Name</p>
          <p className="userslist__header__item">Username</p>
          <p className="userslist__header__item">Email</p>
          <p className="userslist__header__item">Phone</p>
          <p className="userslist__header__item">Company</p>
        </div>
        <ul className="userslist__list">
          {users.map(user => (
            <li
              className="userslist__list__item"
              key={user.id}
              onClick={() => onUserClick(user.id)}
            >
              <div>{user.name}</div>
              <div>{user.username}</div>
              <div>{user.email}</div>
              <div>{user.phone}</div>
              <div>{user.company.name}</div>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default UsersList

export const userProps = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  company: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired,
  address: PropTypes.shape({
    street: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired
  }).isRequired
}).isRequired

UsersList.propTypes = {
  users: PropTypes.arrayOf(userProps)
}
