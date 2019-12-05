import React from 'react';
import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator
} from 'react-navigation';
import MainTabNavigator from './MainTabNavigator';
import Login from '../screens/Login';
import Signup from '../screens/Signup';

export default createAppContainer(
  createSwitchNavigator({
    Login: Login,
    Signup: Signup,
    Main: MainTabNavigator
  })
);
