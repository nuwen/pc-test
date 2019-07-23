import React from 'react';



class SearchInput extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      value: ""
    }

    this.handleChange = this.handleChange.bind(this)
  }


  handleChange=(e)=>{
    e.preventDefault();
    let value = e.target.value
    this.setState({value})
    this.props.searchQuery(value)
  }
 

  render() {
    return(
      <input onChange={this.handleChange} type="text" placeholder="Search..." value={this.state.value}/>
    )
  }
}

export default SearchInput