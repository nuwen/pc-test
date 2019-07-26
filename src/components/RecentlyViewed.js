import React from 'react'

const RecentlyViewed = ({users, handleSelect}) => {
  
  let userList
  let renderNum = -3
  if(users && users.length){
    userList = users.slice(renderNum)
      .map(user => 
        <li 
          className="recentlyViewed__list-item" 
          key={user.id} 
          data-el="list" 
          data-id={user.id} 
          data-name={user.name} 
          onClick={handleSelect}
        >
          <span 
            className="recentlyViewed__list-item-name"
            data-id={user.id} 
            data-name={user.name}
            onClick={handleSelect}
          >
            {user.name}
          </span>
        </li>
      )
  }
  return(
    <div className="recentlyViewed">
      <h3>Recently Viewed</h3>
      
      <ul className="recentlyViewed__list">
        {userList}
      </ul>
    </div>
  )
}



export default RecentlyViewed;
