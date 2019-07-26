import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

function DeleteButton({id, deleteUserClient, resetSelect, toggleMessage}) {

  let [btnCount, setBtnCount] = useState(0)
  let [btnText, setBtnText] = useState('Delete')
  const classes = useStyles();

  function incrementCount(){
    setBtnCount(btnCount => ++btnCount)
  }


  if(btnCount === 1 && btnText !== 'Confirm Delete'){
    setBtnText('Confirm Delete')
  }

  if(btnCount === 2){
    let response;
    setBtnCount(0)
    setBtnText('Delete')
    
    async function deleteUserAccount(id){
      let url = "https://dev.presscentric.com/test/accounts/" + id
      let res = await fetch(url, {
        method: "DELETE"
      })
      
      response = await res;
      if(response.status === 204){
        deleteUserClient(id)
        toggleMessage("success", "Successfully Deleted User ID: " + id);
      } else {
        toggleMessage("error", "There was an issue performing that action.");
      }
      resetSelect()
    }

    deleteUserAccount(id)
    
  }
  

  return(
    <Fab color="primary" variant="extended" aria-label="delete" className={classes.fab} onClick={incrementCount}>
      <DeleteIcon className={classes.extendedIcon} />
      {btnText}
    </Fab>
    // <button >{btnText}</button>
  )
}

export default DeleteButton