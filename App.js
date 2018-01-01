import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import * as firebase from 'firebase';

import { Provider } from 'react-redux';
import store from './Store';


import AuthScreen from './Screens/AuthScreen.js';
import WelcomeScreen from './Screens/WelcomeScreen.js';
import UserFeedScreen from './Screens/UserFeedScreen.js';
import UploadVideoScreen from './Screens/UploadVideoScreen.js';
import JudgeSelectScreen from './Screens/JudgeSelectScreen.js';
import ConfirmScreen from './Screens/ConfirmScreen.js';





export default class App extends React.Component {

  // Initialize Firebase
  componentWillMount() {
    const firebaseConfig = {
        apiKey: "AIzaSyDhNPiHHCCDVYBPjZjVkjjm4dUnCNGccvs",
        authDomain: "judgeit-64269.firebaseapp.com",
        databaseURL: "https://judgeit-64269.firebaseio.com",
        projectId: "judgeit-64269",
        storageBucket: "judgeit-64269.appspot.com",
        messagingSenderId: "461492351715"
      };

    firebase.initializeApp(firebaseConfig);
  // Listen for authentication state to change.
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user)
      if (user != null) {
        console.log("We are authenticated now!");
      }
      else {
        console.log('No Auth')

      }
        // Do other things
    });
  }

  render() {

    const MainNavigator = TabNavigator({
      Welcome: {screen: WelcomeScreen},
      AuthScreen: {screen: AuthScreen},
      Main: {
        screen: TabNavigator({
          UserHome: { screen: UserFeedScreen },
          UploadVideo: {
            screen: StackNavigator({
              UploadVideoScreen: {screen: UploadVideoScreen},
              JudgeSelectScreen: {screen: JudgeSelectScreen},
              ConfirmScreen: {screen: ConfirmScreen}
          })
        }
        })
      }

    }, {
      lazy: true,
      navigationOptions: {
          tabBarVisible: false,
        }
    });
    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider >
    );
  }
}
