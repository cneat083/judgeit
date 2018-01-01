import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import * as firebase from 'firebase';



class WelcomeScreen extends Component {

  storeHighScore(userId,score) {
    console.log(userId + score);
    userId = firebase.auth().currentUser.uid;
    if(userId) {
    console.log(userId + score);
  }
    if (userId != 'No user' || userId != NULL) {
      firebase.database().ref('users/' + userId).set({
        highscore: score
      });
    }
  }

  signUserOut(){
    firebase.auth().signOut().then(function() {
  // Sign-out successful.
    console.log('Signed Out User')
    }).catch(function(error) {
  // An error happened.
    console.log('Houston we have a problem')
    });
  }
  render() {
    const { navigate } = this.props.navigation;
    const userId = 'No user'
    return (
      <View style={styles.container}>
        <Text> Welcome Screen 2</Text>
        <Button title="Work" onPress={() => navigate('AuthScreen')} />
        <Button title="Send Data to Firebase" onPress={() => this.storeHighScore(userId,55)} />
        <Button title="Sign Out" onPress={() => this.signUserOut()} />

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

export default WelcomeScreen
