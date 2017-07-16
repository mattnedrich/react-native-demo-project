import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Navigation } from 'react-native-navigation';
import { registerScreens } from './index';
registerScreens();

export function setupApplication() {
  // start the app
  return Navigation.startTabBasedApp({
    tabs: [
      {
        label: 'One',
        /* icon: require('../img/one.png'),*/
        icon: require("../img/star.png"),
        screen: 'InfoScreen', // this is a registered name for a screen
        title: 'Screen One'
      },
      {
        label: 'Two',
        /* icon: require('../img/one.png'),*/
        icon: require("../img/star.png"),
        screen: 'DataScreen',
        title: 'Screen Two'
      }
    ]
  });

}
