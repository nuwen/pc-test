
import React from 'react'

function Select ({options, autocomplete, handleSelect, accountSelected, dropdownToggled}) {

  return(
    <ul 
    className={"selectInputList " + (dropdownToggled ? "selectInputList--toggled" : "")}>
      <li></li>
      {options.map((option)=>{
        return <li className="selectInputListItem"onClick={handleSelect} data-id={option.id} data-name={option.name} key={option.id}>{option.name}</li>
      })}
    </ul>
  )
}


export default Select