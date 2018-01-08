import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Font, expo } from 'expo';
import * as firebase from 'firebase';

import { Provider } from 'react-redux';
import store from './Store';

import AuthScreen from './Screens/AuthScreen';
import WelcomeScreen from './Screens/WelcomeScreen';
import UserFeedScreen from './Screens/UserFeedScreen';
import UploadVideoScreen from './Screens/UploadVideoScreen';
import JudgeSelectScreen from './Screens/JudgeSelectScreen';
import ConfirmScreen from './Screens/ConfirmScreen';
import UserAccount from './Screens/UserAccountScreen';

class App extends React.Component {
  // Initialize Firebase
  async componentWillMount() {
    const firebaseConfig = {
      apiKey: 'AIzaSyDhNPiHHCCDVYBPjZjVkjjm4dUnCNGccvs',
      authDomain: 'judgeit-64269.firebaseapp.com',
      databaseURL: 'https://judgeit-64269.firebaseio.com',
      projectId: 'judgeit-64269',
      storageBucket: 'judgeit-64269.appspot.com',
      messagingSenderId: '461492351715'
    };
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf')
    });

    firebase.initializeApp(firebaseConfig);
    // Listen for authentication state to change.
    firebase.auth().onAuthStateChanged(user => {
      console.log(user);
      if (user != null) {
        console.log('We are authenticated now!');
      } else {
        console.log('No Auth');
      }
      // Do other things
    });
  }
  render() {
    const MainNavigator = StackNavigator(
      {
        Welcome: { screen: WelcomeScreen },
        AuthScreen: { screen: AuthScreen },
        Main: {
          screen: TabNavigator(
            {
              UserFeedScreen: { screen: UserFeedScreen },
              UploadVideo: {
                screen: StackNavigator({
                  UploadVideoScreen: { screen: UploadVideoScreen },
                  JudgeSelectScreen: { screen: JudgeSelectScreen },
                  ConfirmScreen: { screen: ConfirmScreen }
                })
              },
              UserAccount: { screen: UserAccount }
            },
            {
              tabBarPosition: 'bottom',
              swipeEnabled: true,
              animationEnabled: true,
              tabBarOptions: {
                activeTintColor: '#ef5350',
                labelStyle: {
                  marginBottom: 3
                },
                style: {
                  backgroundColor: '#f5f5f6'
                }
              }
            }
          )
        }
      },
      {
        lazy: true,
        navigationOptions: {
          tabBarVisible: false,
          tabBarOnPress: console.log('tabBarPressed')
        }
      }
    );
    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}

export default App;
