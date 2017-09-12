import {getAccessToken, authWithToken, logout} from '../api/auth'
import {updateUser} from '../api/users'
import {updateMyInfo} from './User'

const AUTHENTICATING = "AUTHENTICATING"
const NOT_AUTHED = "NOT_AUTHED"
const IS_AUTHED = "IS_AUTHED"
const LOGGING_OUT = "LOGGING_OUT"

function authenticating(){
  return{
    type: AUTHENTICATING,
  }
}

function notAuthed(){
  return{
    type: NOT_AUTHED
  }
}

function isAuthed(uid){
  return{
    type: IS_AUTHED,
    uid,
  }
}

function loggingOut(){
  return {
    type: LOGGING_OUT
  }
}


export function handleAuthWithFirebase(){
  return function(dispatch,getState){
    dispatch(authenticating())
      return getAccessToken()
        .then((token)=>{
          authWithToken(token)
        })
        .catch((err)=>console.warn('error in handleAuthWithFirebase: ', err))
  }
}

export function onAuthChange(user){
  return function(dispatch,getState){
    if (!user){
      dispatch(notAuthed())
    } else {
      const { displayName, photoURL, uid } = user
      //console.log("photoURL",photoURL)
      //send displayName, photoURL & uid to firebase
      updateUser({
        uid,
        displayName,
        photoURL,
      })
      .then( () => dispatch(updateMyInfo(user)))
      .then( () => dispatch(isAuthed(uid)) )
    }
  }
}

export function handleUnAuth() {
  return function (dispatch) {
    logout()
    dispatch(loggingOut())
  }
}


const initialState = {
  isAuthed : false,
  isAuthenticating : true,
  authedId : '',
}

export default function MyAuth (state = initialState, action){

  switch( action.type){
    case IS_AUTHED:
      return{
        isAuthenticating: false,
        isAuthed: true,
        authedId: action.uid
      }
    case NOT_AUTHED:
      return{
        isAuthenticating: false,
        isAuthed: false,
        authedId: '',
      }
    case AUTHENTICATING:
      return{
        ...state,
        isAuthenticating : true,
      }
    default:
     return state
  }

}
