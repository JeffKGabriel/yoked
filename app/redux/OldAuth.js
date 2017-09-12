const LOGOUT = "LOGOUT"

export function logoutAuth(){
  return{
    type: LOGOUT,
  }
}

const initialAuthState = { isLoggedIn: false }

export default function OldAuth(state = initialAuthState, action) {
  switch (action.type) {
    case 'Login':
      return { ...state, isLoggedIn: true }
    case 'Logout':
      return { ...state, isLoggedIn: false }
    default:
      return state;
  }
}
