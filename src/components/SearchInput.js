import React, {useState} from 'react';

function SearchInput({searchQuery, selected, resetSelect}) {
  let [input, setInput] = useState("")
  let prevSelect = ""

  
  if(selected.name !== prevSelect && selected.name.length && (selected.name !== input)) {
    setInput(selected.name)
    prevSelect = selected.name
  }

  function handleChange(e){
    e.preventDefault();
    resetSelect();
    let value = e.target.value
    setInput(value)
    searchQuery(value)
  }
  // TODO: update text field to display selection
  
 
    return(
      <input onChange={handleChange} type="text" placeholder="Search..." value={input}/>
    )
  
}

export default SearchInput