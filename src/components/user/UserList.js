import React from 'react'
import UserListData from '../../mocks/data'
import UserItem from './UserItem'

const UserList = () => {
  return (
    <>
    {UserListData.map((user) => 
        <UserItem
          key={user.id}
          id={user.id}
          avatar={user.avatar}
          name={`${user.first_name} ${user.last_name}`}
          email={user.email}
        />
    )}  
    </>  
  )
}

export default UserList