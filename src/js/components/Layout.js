import React from "react";
import { connect } from 'react-redux'

import { fetchUser } from '../actions/userAction'

import UserList from './userList'

// @connect((store) => {
//   return {
//     user: store.user
//   }
// })

export default class Layout extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchUser())
  }


  render() {
    let listUser = null
    const { user } = this.props

    if(user.length){
      listUser = user.map((val, i) => {
        return <UserList author={val.author} {...val}/>;
      });
    }


    return (
        <div>
          <ul>
            {listUser}
          </ul>
        </div>
      )
  }
}