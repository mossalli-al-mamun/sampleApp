import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Profile from '../screens/Profile';

// const loginStack = createStackNavigator({
//   Login: Login
// });

// // HomeStack.navigationOptions = {

// // };

// const signupStack = createStackNavigator({
//   Signup: Signup
// });

const profileStack = createStackNavigator({
  Profile: Profile
});

const totalStack = createStackNavigator({
  // Login,
  // Signup,
  Profile
});

export default totalStack;
