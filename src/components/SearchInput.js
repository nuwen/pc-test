import React, {useState} from 'react';

function SearchInput({searchQuery, selected, resetSelect, toggleDropdown}) {
  let [input, setInput] = useState("")
  let prevSelect = ""
  
  if(selected.name !== prevSelect && selected.name.length && (selected.name !== input)) {
    setInput(selected.name)
    prevSelect = selected.name
  }

  function handleChange(e){
    toggleDropdown(e)
    e.preventDefault();
    resetSelect();
    let value = e.target.value
    setInput(value)
    searchQuery(value)
  }
  // TODO: update text field to display selection
  function handleIconClick(){
    document.getElementById('searchInput').focus();
  }
 
    return(
      <div>
        <div className="searchInput__wrapper">
        <i 
          onClick={handleIconClick}
          className="fas fa-search searchIcon" 
          ></i>

        <input 
          id="searchInput" 
          className="searchInput" 
          onChange={handleChange} 
          type="text" 
          placeholder="Search..." 
          value={input}
          />
        <button className="searchInput__button" onClick={toggleDropdown}>
        v
        </button>
        </div>

        
      </div>
    
      )
  
}

export default SearchInput