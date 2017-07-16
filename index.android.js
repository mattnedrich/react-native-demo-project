/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { GIPHY_API_KEY } from 'react-native-dotenv';
import { Navigation } from 'react-native-navigation';

import { registerScreens } from './screens';
registerScreens();

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

// start the app
Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'One',
      /* icon: require('../img/one.png'),*/
      icon: require("./img/star.png"),
      screen: 'InfoScreen', // this is a registered name for a screen
      title: 'Screen One'
    },
    {
      label: 'Two',
      /* icon: require('../img/one.png'),*/
      icon: require("./img/star.png"),
      screen: 'DataScreen',
      title: 'Screen Two'
    }
  ]
});
