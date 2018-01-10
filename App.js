import React from 'react';
import { Font } from 'expo';
import * as firebase from 'firebase';

import { Provider } from 'react-redux';
import store from './Store';

import MainNavigator from './Navigation/MainNavigator';

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
    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}

export default App;
