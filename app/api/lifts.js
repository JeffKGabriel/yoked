import { ref } from '../config/constants'

/*
export function updateUser(user){
  return ref.child(`users/${user.uid}`).set(user)
}

export function fetchUser (uid) {
  return ref.child(`users/${uid}`)
    .once('value')
    .then((snapshot) => snapshot.val())
}
*/


export function updateUserLift(userID,lifts){
  return ref.child(`users/${userID}/lifts/`).set(lifts)
}



export function fetchLifts(uid) {
  return ref.child(`users/${uid}/lifts`)
    .once('value')
    .then((snapshot) => {
      return snapshot.val()
    })
}
