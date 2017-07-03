import React, { Component } from 'react'
import { Dropdown, Button } from 'semantic-ui-react'

export default class SearchBar extends Component {
  constructor(props){
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.filteredUsers = this.filteredUsers.bind(this)
    this.usersOptions = this.usersOptions.bind(this)
  }

  handleChange(event, data){
    this.props.selectUser(data.value)
  }

  filteredUsers(){
    let users
    if (this.props.searchFilter === "friends"){
      users = this.props.currentUser.friends
    } else {
      users = this.props.users
    }
    return users
  }

  usersOptions(users){
    return users.map(user => {
      return { text: user.username, key: user.id, value: user }
    })
  }

  render() {
  let users = this.filteredUsers()
  let options = this.usersOptions(users)
    return (
    <div>
      <Button.Group>
        <Button name={'my room'} color={'green'} onClick={() => this.props.selectUser(this.props.currentUser)}>My Room</Button>
        <Button name={'friends'} color={'olive'} onClick={this.props.toggleFilter}>My Friends</Button>
        <Button name={'all'} color={'olive'} onClick={this.props.toggleFilter}>All Users</Button>
      </Button.Group>
      <Dropdown name='searchBar' placeholder='Search for Users' fluid search selection options={options} onChange={this.handleChange}/>
    </div>
    )
  }
}
