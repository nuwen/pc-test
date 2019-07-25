import React, {useState} from 'react'
import { deleteUserAccount } from '../js/api'

function DeleteButton({id}) {

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
    <button onClick={incrementCount}>{btnText}</button>
  )
}

export default DeleteButton