import React from 'react';
import { connect } from "react-redux"
import SearchInput from './components/SearchInput';
import Select from './components/Select';
import AccountDetails from './components/AccountDetails';
import SearchBlock from './components/SearchBlock';
import "./App.css"
import {fetchUserAccounts} from './js/api'
import RecentlyViewed from './components/RecentlyViewed';
import { ADD_VIEWED_ACCOUNT } from './redux/constants/action-types'


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
    let index  
    let id 
    let name
    
    if(e.target.getAttribute('data-el') === 'list'){
      id = e.target.getAttribute('data-id')
      name = e.target.getAttribute('data-name')
    } else {
      index = e.target.options.selectedIndex;
      id = e.target.options[index].getAttribute('data-id');
      name = e.target.options[index].value;
    }
    
    if ( id && name) {
      this.props.dispatch({ type: ADD_VIEWED_ACCOUNT, payload: {id, name} })
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
        <RecentlyViewed users={this.props.recentUsers} handleSelect={this.handleSelect}/>
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

const mapStateToProps = state => {
  return {    
    recentUsers: state.recentUsers
  }
}


export default connect(mapStateToProps)(App);
