import {updateUserLift,fetchLifts} from '../api/lifts'

Date.prototype.yyyymmdd = function() {
  var mm = this.getMonth() + 1; // getMonth() is zero-based
  var dd = this.getDate();

  return [this.getFullYear(),
          (mm>9 ? '' : '0') + mm,
          (dd>9 ? '' : '0') + dd
         ].join('');
};

let dateID = new Date()
dateID = dateID.yyyymmdd()


const ADDED_LIFT = "ADDED_LIFT"
const CHANGE_DISPLAYED_DATE = "CHANGE_DISPLAYED_DATE"


function addedLift(lifts){
  return {
    type: ADDED_LIFT,
    lifts
  }
}

export function changeDisplayedDate(newDate){
  return {
    type: CHANGE_DISPLAYED_DATE,
    newDate
  }
}

export function addLift(userID,liftName,liftObject){
  return function(dispatch,getState){

    let lifts = getState().Lifts.names

    if(lifts == null){
      lifts = {
        [liftName] : {
          [dateID] : liftObject
        }
      }
    }else{
      lifts[liftName] = {
          ...lifts[liftName],
          [dateID]: liftObject
        }
    }


    return updateUserLift(userID,lifts)
    .then( () =>  dispatch( addedLift(lifts) ) )

  }
}

export function getLifts(userID){
  return function(dispatch,getState){
    fetchLifts(userID)
      .then((lifts) =>{
        if(lifts!=null) dispatch( addedLift(lifts) )
      })
  }
}


const initialState = {
  names : {},
  displayedDate : dateID,
}

export default function Lifts (state = initialState, action){

  switch( action.type){
    case ADDED_LIFT:
      return{
        ...state,
        names: action.lifts
      }

    case CHANGE_DISPLAYED_DATE:
      return{
        ...state,
        displayedDate: action.newDate
      }

    default:
     return state
  }

}
