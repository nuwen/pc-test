
import React from 'react'

function Select ({options, automcomplete, handleSelect}) {

    return(
      <select 
      onChange={handleSelect}
      onBlur={handleSelect} 
      size={automcomplete ? options.length : 1}>
        <option></option>
        {options.map((option)=>{
          return <option data-id={option.id} key={option.id}>{option.name}</option>
        })}
      </select>
    )
}


export default Select