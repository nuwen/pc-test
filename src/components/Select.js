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
    let {options, automcomplete} = this.props;
    return(
      <select size={automcomplete ? options.length : 1}>
        {options.map((option)=>{
          return <option key={option.id}>{option.name}</option>
        })}
      </select>
    )
  }
}

export default Select