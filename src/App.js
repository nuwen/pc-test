import React from 'react';
import SearchInput from './components/SearchInput';
import Select from './components/Select';
import AccountDetails from './components/AccountDetails';
import SearchBlock from './components/SearchBlock';
import "./App.css"
import {fetchUserAccounts} from './js/api'
import RecentlyViewed from './components/RecentlyViewed';


class App extends React.Component {
  
  constructor(props){
    super(props)

    this.state = {
      accounts: [],
      results: [],
      selected: {id: null,name: ""}
    }

    this.searchQuery = this.searchQuery.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
    this.resetSelect = this.resetSelect.bind(this)
  }

  async componentDidMount(){
    if(!this.state.accounts.length){
      let accounts = await fetchUserAccounts()
      this.setState({accounts})
    }
  }

  isvalidQuery = (query) => query.match(/^[ \t\r\n]*$/) ? false : query.trim();
  
  searchQuery(query) {
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

  resetSelect(){
    this.setState({
      selected: {id: null,name: ""}
    })
  }
  render()
  {
    let {results, accounts,selected} = this.state
    return (
      <div className="App">
        <SearchBlock>

        <SearchInput 
          selected={selected} 
          searchQuery={this.searchQuery}
          resetSelect={this.resetSelect}
        />
        <Select 
          accountSelected={selected.name.length ? true : false}
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
        </SearchBlock>
        <RecentlyViewed />
        {
          selected.name
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
