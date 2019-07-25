import React, {useState, useEffect } from 'react'
import DeleteButton from './DeleteButton'

function AccountDetails({selected: {id, name}}) {

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
    <div>
      <h2>Id: {id} - {name}</h2>
      <img src={`https://api.adorable.io/avatars/285/${name.replace(/\s+/g, '')}.png`} alt={`${name}'s Avatar`}/>

      <ul>
        <li>First Name: {userDetails.nameFirst}</li>
        <li>Last Name: {userDetails.nameLast}</li>
        <li>Gender: {userDetails.gender}</li>
        <li>ID: {id}</li>
        <li>E-Mail: {userDetails.email}</li>
      </ul>
      <DeleteButton id={id}/>
    </div>
  )
}
export default AccountDetails