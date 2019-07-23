import React from 'react';
import './App.css';
import SearchInput from './components/SearchInput';
import Select from './components/Select';



class App extends React.Component {
  
  constructor(props){
    super(props)

    this.state = {
      accounts: [{id:1,name:"Carolann McTrustey"},{id:2,name:"Thorvald Vergine"},{id:3,name:"Pietra Schulze"},{id:4,name:"Cooper Liccardi"},{id:5,name:"Town Teager"},{id:6,name:"Claire Edlington"},{id:7,name:"Della Frankton"},{id:8,name:"Kleon Manuello"},{id:9,name:"Rees Newall"},{id:10,name:"Shem Daingerfield"},{id:11,name:"Fritz Pierri"},{id:12,name:"Mildrid Firks"},{id:13,name:"Jilly Heimann"},{id:14,name:"Estelle Bathowe"},{id:15,name:"Tabbatha Rosel"},{id:16,name:"Vick Inderwick"},{id:17,name:"Hugibert Lassey"},{id:18,name:"Katharina Bachshell"},{id:19,name:"Calla Fant"},{id:20,name:"Joleen Riddich"}],
      results: [],
      selected: null
    }

    this.searchQuery = this.searchQuery.bind(this)
  }

  isvalidQuery = (query) => query.match(/^[ \t\r\n]*$/) ? false : query.trim();
  
  searchQuery(query) {
    console.log(query);
    let results = []
    let validQuery = "";
    if(this.isvalidQuery(query) && this.isvalidQuery(query).length){
      validQuery = this.isvalidQuery(query);
      
      results = this.state.accounts
        .filter(option => 
            option.name.toLowerCase().includes(validQuery.toLowerCase())
        )
      if (results.length) {
        this.setState({
          results
        })
      } 
    } else {
      this.setState({
        results: []
      })
    }
  }

  render()
  {
    return (
      <div className="App">
        <SearchInput searchQuery={this.searchQuery}/>
        <Select 
        options={
          this.state.results.length 
          ? 
            this.state.results 
          : 
            this.state.accounts
        }
        autocomplete={this.state.results.length ? true : false}
        />
      </div>
    );

  }
}

export default App;
