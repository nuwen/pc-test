
import React from 'react'

function Select ({options, autocomplete, handleSelect}) {

    return(
      <select 
      onChange={handleSelect}
      onBlur={handleSelect} 
      size={autocomplete ? options.length + 1 : 1}>
        <option></option>
        {options.map((option)=>{
          return <option data-id={option.id} key={option.id}>{option.name}</option>
        })}
      </select>
    )
}


export default Select