# react-native-demo-project
This example app demonstrates how cross-platform natigation may be implemented in react native. It implements cross platform tabbed navigation using [react-native-navigation](https://github.com/wix/react-native-navigation). The app contains two tabs:

1. An informational tab
2. A table that displays trending gifs fron [Giphy](https://giphy.com/)

All of the navigation code is shared. The `index.ios.js` and `index.android.js` files both look like this:

```javascript
import { setupApplication } from './screens/main';
setupApplication();
```

`setupApplication` sets up simple tab navigation via:

```javascript
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
```

# Develoment Setup Instructions
### Step 1. Install the react native development dependencies

These can be found [here](https://facebook.github.io/react-native/docs/getting-started.html). Select `Building Projects with Native Code`.

<img width="500" src="https://user-images.githubusercontent.com/4796480/28501683-f43f0254-6fae-11e7-92f8-066c7ad27de9.png" />

### Step 2. Clone the repository
`git clone git@github.com:mattnedrich/react-native-demo-project.git`

### Step 3. Install dependencies
Run `npm install`

### Step 4. Obtain a Giphy API key
This app requires an API key to make the request to Giphy for trending gifs. You can obtain an API key by signing up on their site and creating an app [here](https://developers.giphy.com/dashboard/?create=true). 

Once you have an API key, create a file in the project root called `.env` and paste your API key there like

```
GIPHY_API_KEY=putyourkeyhere
```
# Running The App
Assuming you have all of the development dependencies installed, you can run the app using the following:

### For iOS
Run `react-native run-ios` in the project root. It will perform some compilation and then launch the app in the iOS simulator.

### For Android
Open Android Studio, launch the AVD Manager, and start an virtual device. The, run `react-native run-android`.
