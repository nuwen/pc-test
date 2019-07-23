import React from 'react'

const AccountDetails = ({selected: {id, name}}) => {

  return(
    <div>
      <h2>Id: {id} - {name}</h2>
    </div>
  )
}
export default AccountDetails