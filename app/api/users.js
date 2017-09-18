import { ref } from '../config/constants'

export function updateUser(user){
  return ref.child(`users/${user.uid}`).update(user)
}

export function fetchUser (uid) {
  return ref.child(`users/${uid}`)
    .once('value')
    .then((snapshot) => snapshot.val())
}
