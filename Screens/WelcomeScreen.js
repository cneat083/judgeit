import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import * as firebase from 'firebase';



export default class WelcomeScreen extends React.Component {


  storeHighScore(userId, score) => {
  if (user != null) {
    firebase.database().ref('users/' + userId).set({
      highscore: score
    });
  }
 }
  render() {
    const { navigate } = this.props.navigation;
    var userId = firebase.auth().currentUser.uid;

    return (
      <View style={styles.container}>
        <Text> Welcome Screen 2</Text>
        <Button title="Work" onPress={() => navigate('AuthScreen')} />
        <Button title="Send Data to Firebase" onPress={() => storeHighScore(userId, 99)} />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
