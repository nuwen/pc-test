
import React from 'react'

function Select ({options, autocomplete, handleSelect, accountSelected}) {

  function resizeSelect() {

    if(accountSelected) {
      return 1
    }

    if(autocomplete && !accountSelected) {
      return options.length + 1
    }

  }
    return(
      <select 
      onChange={handleSelect}
      onBlur={handleSelect} 
      size={resizeSelect()}>
        <option></option>
        {options.map((option)=>{
          return <option data-id={option.id} key={option.id}>{option.name}</option>
        })}
      </select>
    )
}


export default Select