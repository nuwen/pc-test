import React from 'react';



class Select extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      selected: {
        id: null,
        name: ""
      }
    }
  }


  handleChange=()=>{

  }
 

  render() {
    return(
      <select>
        {this.props.options.map((option)=>{
          return <option>{option.name}</option>
        })}
      </select>
    )
  }
}

export default Select