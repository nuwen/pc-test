import React, {useState} from 'react';

function SearchInput({searchQuery}) {
  
  function handleChange(e){
    e.preventDefault();
    let value = e.target.value
    setInput(value)
    searchQuery(value)
  }
    
  let [input, setInput] = useState("")
 
    return(
      <input onChange={handleChange} type="text" placeholder="Search..." value={input}/>
    )
  
}

export default SearchInput