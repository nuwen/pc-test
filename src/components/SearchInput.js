import React, {useState} from 'react';

function SearchInput({searchQuery, selected}) {
  
  function handleChange(e){
    e.preventDefault();
    let value = e.target.value
    setInput(value)
    searchQuery(value)
  }
  // TODO: update text field to display selection
    
  let [input, setInput] = useState("")
    return(
      <input onChange={handleChange} type="text" placeholder="Search..." value={input}/>
    )
  
}

export default SearchInput