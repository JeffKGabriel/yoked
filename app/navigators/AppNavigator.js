import React from 'react'
import { connect } from 'react-redux'
import { addNavigationHelpers, StackNavigator } from 'react-navigation'

import LoginScreen from '../components/LoginScreen'
import MainScreen from '../components/MainScreen'
import ProfileScreen from '../components/ProfileScreen';
import Breezy from '../components/Breezy'
import Splash from '../components/Splash'


let MyTransition = (index, position) => {
    const inputRange = [index - 1, index, index + 1];
    const opacity = position.interpolate({
        inputRange,
        outputRange: [.8, 1, 1],
    });

    const scaleY = position.interpolate({
        inputRange,
        outputRange: ([1, 1, 1]),
    });

    return {
        opacity,
        transform: [
            {scaleY}
        ]
    };
};

let TransitionConfiguration = () => {
    return {
        // Define scene interpolation, eq. custom transition
        screenInterpolator: (sceneProps) => {

            const {position, scene} = sceneProps;
            const {index} = scene;

            return MyTransition(index, position);
        }
    }
};



export const AppNavigator = StackNavigator(
  {
  Login: { screen: LoginScreen },
  Main: { screen: MainScreen },
  //  Profile: { screen: ProfileScreen },
  Breezy: { screen: Breezy },
  Splash: {screen:Splash},
  },
  {
    transitionConfig: TransitionConfiguration
  }
)

const AppWithNavigationState = ({ dispatch, Nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: Nav })} />
)


const mapStateToProps = state => ({
  Nav: state.Nav,
})

export default connect(mapStateToProps)(AppWithNavigationState);
