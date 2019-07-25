import React, {useState} from 'react'
import { deleteUserAccount } from '../js/api'

function AccountDetails({selected: {id, name}}) {

  let [btnCount, setBtnCount] = useState(0)
  let [btnText, setBtnText] = useState('Delete')

  function incrementCount(){
    setBtnCount(btnCount => ++btnCount)
  }

  
  
  if(btnCount === 1 && btnText !== 'Confirm Delete'){
    setBtnText('Confirm Delete')
  }

  if(btnCount === 2){
    setBtnCount(0)
    setBtnText('Delete')
    deleteUserAccount(id)
  }
  

  return(
    <div>
      <h2>Id: {id} - {name}</h2>
      <img src={`https://api.adorable.io/avatars/285/${name.replace(/\s+/g, '')}.png`} alt={`${name}'s Avatar`}/>
      <button onClick={incrementCount}>{btnText}</button>
    </div>
  )
}
export default AccountDetails