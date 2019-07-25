import React, {useState, useEffect } from 'react'

import DeleteButton from './DeleteButton'

function AccountDetails({selected: {id, name}, deleteUserClient, resetSelect}) {

  let [userDetails, setUserDetails] = useState({})
  
  async function fetchUserDetails(id){
    let url = "https://dev.presscentric.com/test/accounts/" + id
    let response = await fetch(url,{
      mode: 'cors'
    })
  
    let data = await response.json();
    setUserDetails(data);
  }

  useEffect(() => {
    fetchUserDetails(id);
  },[id])
    

  return(
    <div className="accountDetails">
      <header className="accountDetails__header">
        <h2>User Details</h2>
        <img className="accountDetails__avatar" src={`https://api.adorable.io/avatars/285/${name.replace(/\s+/g, '')}.png`} alt={`${name}'s Avatar`}/>
      </header>

      <ul className="accountDetails__list">
        <li>First Name: {userDetails.nameFirst}</li>
        <li>Last Name: {userDetails.nameLast}</li>
        <li>Gender: {userDetails.gender}</li>
        <li>ID: {id}</li>
        <li>E-Mail: {userDetails.email}</li>
      </ul>

      
      <DeleteButton id={id} deleteUserClient={deleteUserClient} resetSelect={resetSelect}/>
    </div>
  )
}
export default AccountDetails