const CHANGE_NETWORK_STATUS= "CHANGE_NETWORK_STATUS"

export function changeNetworkStatus(status){
  let statusLowercase = status.toLowerCase()
  return{
    type: CHANGE_NETWORK_STATUS,
    statusLowercase
  }
}


const initialState = {
  checkedNetwork : false,
  connected : false,
}

export default function Network (state = initialState, action){

  switch( action.type){
    case CHANGE_NETWORK_STATUS:
      return{
        ...state,
        checkedNetwork : true,
        connected : action.status != "none" ? true : false,
      }
    default:
     return state
  }

}
