const UPDATE_MY_INFO = "UPDATE_MY_INFO"

export function updateMyInfo(user){
  console.log("in UserRedux",user);
  return{
    type: UPDATE_MY_INFO,
    user
  }
}

const initialState = {
  name : '',
  photoURL : '',
  uid : '',
}

export default function User (state = initialState, action){

  switch( action.type){
    case UPDATE_MY_INFO:
      return{
        name: action.user.displayName,
        photoURL: action.user.photoURL,
        uid: action.user.uid
      }
    default:
     return state
  }

}
