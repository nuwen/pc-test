import React, {useState} from 'react'


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
  }
  

  return(
    <div>
      <h2>Id: {id} - {name}</h2>
      <p>{btnCount}</p>
      <button onClick={incrementCount}>{btnText}</button>
    </div>
  )
}
export default AccountDetails