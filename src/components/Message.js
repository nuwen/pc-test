import React from 'react'

function Message({message: {type, message}}){


  return(
    <div className="message">
      <header className={"message__header accountDetails__header " + type}>
        <h2>{type}</h2>
      </header>
      <p>
        {message}
      </p>
    </div>
  )
}

export default Message;