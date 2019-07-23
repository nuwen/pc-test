import React from 'react';
import './App.css';
import SearchInput from './components/SearchInput';
import Select from './components/Select';
import AccountDetails from './components/AccountDetails';



class App extends React.Component {
  
  constructor(props){
    super(props)

    this.state = {
      accounts: [{id:1,name:"Carolann McTrustey"},{id:2,name:"Thorvald Vergine"},{id:3,name:"Pietra Schulze"},{id:4,name:"Cooper Liccardi"},{id:5,name:"Town Teager"},{id:6,name:"Claire Edlington"},{id:7,name:"Della Frankton"},{id:8,name:"Kleon Manuello"},{id:9,name:"Rees Newall"},{id:10,name:"Shem Daingerfield"},{id:11,name:"Fritz Pierri"},{id:12,name:"Mildrid Firks"},{id:13,name:"Jilly Heimann"},{id:14,name:"Estelle Bathowe"},{id:15,name:"Tabbatha Rosel"},{id:16,name:"Vick Inderwick"},{id:17,name:"Hugibert Lassey"},{id:18,name:"Katharina Bachshell"},{id:19,name:"Calla Fant"},{id:20,name:"Joleen Riddich"}],
      results: [],
      selected: null
    }

    this.searchQuery = this.searchQuery.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
  }

  isvalidQuery = (query) => query.match(/^[ \t\r\n]*$/) ? false : query.trim();
  
  searchQuery(query) {
    console.log(query);
    let results = []
    let validQuery = "";

    if ( this.isvalidQuery(query) && this.isvalidQuery(query).length ){
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

  handleSelect(e) {
    e.preventDefault();
    let index = e.target.options.selectedIndex;
    let id = e.target.options[index].getAttribute('data-id');
    let name = e.target.options[index].value;

    if ( id && name) {
      this.setState({
        selected: {id, name}
      })
    }

  }
  render()
  {
    let {results, accounts,selected} = this.state
    return (
      <div className="App">
        <SearchInput searchQuery={this.searchQuery}/>
        <Select 
        handleSelect={this.handleSelect}
        options={
          results.length 
          ? 
            results 
          : 
            accounts
        }
        autocomplete={results.length ? true : false}
        />
        {
          selected
        ?
          <AccountDetails selected={selected} />
        : 
          ""
        }
      </div>
    );

  }
}

export default App;
