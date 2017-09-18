import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../navigators/AppNavigator';


// Start with two routes: The Main screen, with the Login screen on top.
const firstAction = AppNavigator.router.getActionForPathAndParams('Main');
const tempNavState = AppNavigator.router.getStateForAction(firstAction);
const secondAction = AppNavigator.router.getActionForPathAndParams('Login');

const splash = AppNavigator.router.getActionForPathAndParams('Splash');
const splashState = AppNavigator.router.getStateForAction(splash);

const initialNavState = AppNavigator.router.getStateForAction(
  splash//firstAction,//secondAction,
  //splashState//tempNavState
);


export default function Nav(state = initialNavState, action) {

  let nextState;

  switch (action.type) {
    case 'Login':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.back(),
        state
      )
      break;
    case 'Back':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.back(),
        state
      )
      break;
    case 'Logout':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Login' }),
        state
      )
      break;

    case 'Breezy':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Breezy' }),
        state
      )
      break;

    case 'AddLift':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'AddLift' }),
        state
      )
      break;

    case 'Splash':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Splash' }),
        state
      )
      break;

    case 'Main':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Main' }),
        state
      )
      break;


    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}
