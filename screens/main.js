import { Navigation } from 'react-native-navigation';
import { registerScreens } from './index';
registerScreens();

export function setupApplication() {
  return Navigation.startTabBasedApp({
    tabs: [
      {
        label: 'Info',
        icon: require("../img/star.png"),
        screen: 'InfoScreen',
        title: 'Info'
      },
      {
        label: 'Trending Gifs',
        icon: require("../img/star.png"),
        screen: 'DataScreen',
        title: 'Trending on Giphy'
      }
    ]
  });

}
