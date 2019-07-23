import React from 'react';
import './App.css';
import SearchInput from './components/SearchInput';
import Select from './components/Select';

const options = [{id:1,name:"Carolann McTrustey"},{id:2,name:"Thorvald Vergine"},{id:3,name:"Pietra Schulze"},{id:4,name:"Cooper Liccardi"},{id:5,name:"Town Teager"},{id:6,name:"Claire Edlington"},{id:7,name:"Della Frankton"},{id:8,name:"Kleon Manuello"},{id:9,name:"Rees Newall"},{id:10,name:"Shem Daingerfield"},{id:11,name:"Fritz Pierri"},{id:12,name:"Mildrid Firks"},{id:13,name:"Jilly Heimann"},{id:14,name:"Estelle Bathowe"},{id:15,name:"Tabbatha Rosel"},{id:16,name:"Vick Inderwick"},{id:17,name:"Hugibert Lassey"},{id:18,name:"Katharina Bachshell"},{id:19,name:"Calla Fant"},{id:20,name:"Joleen Riddich"}]


function searchQuery(query) {
  let results = []
  results = options.filter(option => 
    option.name.toLowerCase().includes(query.toLowerCase())
    )
  return results
}


function App() {
  return (
    <div className="App">
      <SearchInput searchQuery={searchQuery}/>
      <Select options={options}/>
    </div>
  );
}

export default App;
