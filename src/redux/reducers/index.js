import { ADD_VIEWED_ACCOUNT } from '../constants/action-types'
import { REMOVE_VIEWED_ACCOUNT } from '../constants/action-types'
import { REMOVE_DELETED_ACCOUNT } from '../constants/action-types'

const initialState = {
  recentUsers: []
}


function reducer(state = initialState, action) {
  if (action.type === ADD_VIEWED_ACCOUNT) {

    let newState = state
    let duplicateIndex = newState.recentUsers.findIndex(data=>data.id === action.payload.id)
    if(duplicateIndex > -1){
      newState.recentUsers.splice(duplicateIndex,1)
    }
    newState.recentUsers.push(action.payload)

    return newState
  }

  if(action.type === REMOVE_VIEWED_ACCOUNT){
    let newState = state
    newState.recentUsers.shift()
    return newState
  }

  if(action.type === REMOVE_DELETED_ACCOUNT){
    let newState = state
    let matchingUser = newState.recentUsers.findIndex( data =>  data.id === action.payload.id)
    if(matchingUser > -1){
      newState.recentUsers.splice(matchingUser,1)
    }

    return newState
  }

  return state;
}

export default reducer;