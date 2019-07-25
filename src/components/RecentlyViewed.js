import React from 'react'
const RecentlyViewed = ({users, handleSelect}) => {
  
  let userList
  let renderNum = -3
  if(users && users.length){
    userList = users.slice(renderNum).map(user => <li data-el="list" data-id={user.id} data-name={user.name} onClick={handleSelect}>{user.name}</li>)
  }
  return(
    <div>
      <h2>RecentlyViewed</h2>
      
      <ul>
        {userList}
      </ul>
    </div>
  )
}



export default RecentlyViewed;
