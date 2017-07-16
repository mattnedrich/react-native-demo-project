import { Navigation } from 'react-native-navigation';

import FirstTabScreen from './info-screen';
import SecondTabScreen from './data-screen';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('InfoScreen', () => FirstTabScreen);
  Navigation.registerComponent('DataScreen', () => SecondTabScreen);
}
