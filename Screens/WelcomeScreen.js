import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import * as firebase from 'firebase';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

class WelcomeScreen extends Component {
  storeHighScore(userId, score) {
    let user = userId;
    console.log(userId + score);
    user = firebase.auth().currentUser.uid;
    if (user) {
      console.log(user + score);
    }
    if (user !== 'No user' || user !== null) {
      firebase
        .database()
        .ref('users/' + user)
        .set({
          highscore: score
        });
    }
  }

  signUserOut() {
    firebase
      .auth()
      .signOut()
      .then(function processSuccess() {
        // Sign-out successful.
        this.console.log('Signed Out User');
      })
      .catch(function processError(error) {
        // An error happened.
        this.console.log('Houston we have a problem');
      });
  }

  render() {
    const { navigate } = this.props.navigation;
    const userId = 'No user';
    return (
      <View style={styles.container}>
        <Text> Welcome Screen 2</Text>
        <Button
          backgroundColor="#000000"
          style={{ width: '75%', margin: 10 }}
          title="Move Forward"
          onPress={() => navigate('AuthScreen')}
        />
        <Button
          backgroundColor="#000000"
          style={{ width: '90%', margin: 10 }}
          title="Send Data to Firebase"
          onPress={() => this.storeHighScore(userId, 55)}
        />
        <Button
          backgroundColor="#000000"
          style={{ width: '90%', margin: 10 }}
          title="Sign Out"
          onPress={() => this.signUserOut()}
        />
      </View>
    );
  }
}

export default WelcomeScreen;
