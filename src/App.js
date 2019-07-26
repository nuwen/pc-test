import React from 'react';
import { connect } from "react-redux"
import Container from '@material-ui/core/Container';
import SearchInput from './components/SearchInput';
import Select from './components/Select';
import AccountDetails from './components/AccountDetails';
import SearchBlock from './components/SearchBlock';
import RecentlyViewed from './components/RecentlyViewed';
import Message from './components/Message'
import { ADD_VIEWED_ACCOUNT } from './redux/constants/action-types'
import { REMOVE_DELETED_ACCOUNT } from './redux/constants/action-types'
import {fetchUserAccounts} from './js/api'
import pattern from './images/pattern.png'


class App extends React.Component {
  
  constructor(props){
    super(props)

    this.state = {
      accounts: [],
      results: [],
      selected: {id: null,name: ""},
      dropdownToggled: false,
      message: {
        type: "welcome",
        message: "Welcome to Danton Nguyen's Presscentric Test Project"
      }
    }

    this.searchQuery = this.searchQuery.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
    this.resetSelect = this.resetSelect.bind(this)
    this.toggleDropdown = this.toggleDropdown.bind(this)
    this.deleteUserClient = this.deleteUserClient.bind(this)
    this.toggleMessage = this.toggleMessage.bind(this)
  }

  async componentDidMount(){
    if(!this.state.accounts.length){
      let accounts = await fetchUserAccounts()
      this.setState({accounts})
    }

    let searchInput = document.getElementById('searchInput')
    searchInput.focus()
  }

  deleteUserClient(id){
    function isTargetId(user){
      return user.id === id * 1;
    }

    let accounts = this.state.accounts
    let deletedAccountIndex = accounts.findIndex(isTargetId)
    accounts.splice(deletedAccountIndex,1)
    this.props.dispatch({ type: REMOVE_DELETED_ACCOUNT, payload: {id} })
    
    this.setState({
      accounts
    })
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

  toggleDropdown(e){
    let elClass = e.target.className
    if(elClass === "searchInput__button"){
      let dropdownToggled = !this.state.dropdownToggled
      this.setState({
        dropdownToggled
      })
    } else if(elClass === "searchInput") {
      this.setState({
        dropdownToggled: true
      })
    } else {
      this.setState({
        dropdownToggled: false
      })
    }
  }

  toggleMessage(type, message){
    this.setState({
      message: {type,message}
    })
  }

  handleSelect(e) {
    e.preventDefault();
    let id = e.target.getAttribute('data-id')
    let name = e.target.getAttribute('data-name')
    
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
    let {results, accounts,selected, dropdownToggled} = this.state
    return (
      <div className="App" onClick={this.toggleDropdown} style={{backgroundImage: "url(" + pattern + ")", backgroundRepeat: "repeat" }}>
    <Container maxWidth="md">

        <div className="appContainer">
          <div className="left-column">

          <SearchBlock>

          <SearchInput 
            selected={selected} 
            searchQuery={this.searchQuery}
            resetSelect={this.resetSelect}
            toggleDropdown={this.toggleDropdown}
          />
          <Select 
            accountSelected={selected.name.length ? true : false}
            dropdownToggled={dropdownToggled}
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
          <RecentlyViewed 
            users={this.props.recentUsers} 
            handleSelect={this.handleSelect}
          />
          </div>

          
          <div className="right-column">
            {
              selected.name
                ?
              
              <AccountDetails 
                selected={selected} 
                deleteUserClient={this.deleteUserClient}
                resetSelect={this.resetSelect}
                toggleMessage={this.toggleMessage}
              />
                : 
              <Message message={this.state.message}/>
            }
          </div>
        </div>
        </Container>
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
