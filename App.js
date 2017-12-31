import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import store from './Store';


import AuthScreen from './Screens/AuthScreen.js';
import WelcomeScreen from './Screens/WelcomeScreen.js';
import UserFeedScreen from './Screens/UserFeedScreen.js';
import UploadVideoScreen from './Screens/UploadVideoScreen.js';
import JudgeSelectScreen from './Screens/JudgeSelectScreen.js';
import ConfirmScreen from './Screens/ConfirmScreen.js';





export default class App extends React.Component {
  render() {

    const MainNavigator = TabNavigator({
      Welcome: {screen: WelcomeScreen},
      Auth: {screen: AuthScreen},
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

    });
    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider >
    );
  }
}
