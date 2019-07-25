import React, {useState} from 'react'
import { deleteUserAccount } from '../js/api'
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

function DeleteButton({id, deleteUserClient, resetSelect}) {

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
    resetSelect()
    setBtnCount(0)
    setBtnText('Delete')
    deleteUserAccount(id)
    deleteUserClient(id)
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