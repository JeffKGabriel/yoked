import { firebaseAuth, facebookProvider, ref } from '../config/constants'
import { AccessToken, LoginManager } from 'react-native-fbsdk'

export function getAccessToken(){
  return AccessToken.getCurrentAccessToken()
}

export function authWithToken(token){
  return firebaseAuth.signInWithCredential(facebookProvider.credential(token))
}

export function logout() {
  LoginManager.logOut()
  firebaseAuth.signOut()
  ref.off()
}
