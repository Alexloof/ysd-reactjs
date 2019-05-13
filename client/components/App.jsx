import React, { PureComponent } from 'react'
import UsersList from './UsersList.jsx'
import ErrorMessage from './ErrorMessage.jsx'
import Loading from './Loading.jsx'
import UserDetailed from './UserDetailed.jsx'
import Modal from './Modal.jsx'

const API_URL = 'http://localhost:3000/api/users'

class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      loading: false,
      errorMsg: '',
      activeUser: null
    }
    this.onUserClick = this.onUserClick.bind(this)
  }

  componentDidMount() {
    this.fetchUsers()
  }

  fetchUsers() {
    this.setState({ loading: true })
    fetch(API_URL)
      .then(res => res.json())
      .then(data => this.setState({ users: data }))
      .catch(error => {
        console.log(error)
        this.setState({
          errorMsg: 'Something happend loading users, try again later!'
        })
      })
      .finally(() => {
        this.setState({ loading: false })
      })
  }

  onUserClick(userId) {
    const activeUser = this.state.users.find(user => user.id === userId)
    this.setState({ activeUser })
  }

  renderContent() {
    const { users, loading, errorMsg } = this.state

    if (errorMsg) {
      return <ErrorMessage message={errorMsg} />
    } else if (loading) {
      return <Loading />
    } else {
      return <UsersList users={users} onUserClick={this.onUserClick} />
    }
  }

  render() {
    const { activeUser } = this.state

    return (
      <main className="app">
        <h1 className="app__title">Users</h1>
        <section className="app__body">{this.renderContent()}</section>
        <Modal
          isOpen={!!activeUser}
          onClose={() => this.setState({ activeUser: null })}
        >
          {activeUser && <UserDetailed user={activeUser} />}
        </Modal>
      </main>
    )
  }
}

export default App
