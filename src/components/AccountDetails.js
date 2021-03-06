import React, {useState, useEffect } from 'react'

import DeleteButton from './DeleteButton'

function AccountDetails({selected: {id, name}, deleteUserClient, resetSelect, toggleMessage}) {

  let [userDetails, setUserDetails] = useState({})
  
  async function fetchUserDetails(id){
    let url = "https://dev.presscentric.com/test/accounts/" + id
    let response = await fetch(url,{
      mode: 'cors'
    })
    

    if (response.status === 404){
      resetSelect()
      toggleMessage('error', "Account with specified id is not found.")
    } else if(response.status !== 200) {
      resetSelect()
      toggleMessage('error', "An error has occured.")
    } else {
      let data = await response.json();
      setUserDetails(data);
    }
  }

  useEffect(() => {
    if(id * 1 !== userDetails.id * 1){
      fetchUserDetails(id);
    }
    })

    

  return(
    <div className="accountDetails">
      <header className="accountDetails__header">
        <h2>User Details</h2>
      </header>
      <div className="accountDetails__avatar">
        <img  src={`https://api.adorable.io/avatars/285/${name.replace(/\s+/g, '')}.png`} alt={`${name}'s Avatar`}/>

      </div>
      

      <ul className="accountDetails__list">
        <li>First Name: {userDetails.nameFirst}</li>
        <li>Last Name: {userDetails.nameLast}</li>
        <li>Gender: {userDetails.gender}</li>
        <li>ID: {id}</li>
        <li>E-Mail: {userDetails.email}</li>
      </ul>

      
      <DeleteButton id={id} deleteUserClient={deleteUserClient} resetSelect={resetSelect} toggleMessage={toggleMessage}/>
    </div>
  )
}
export default AccountDetails