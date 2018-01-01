import React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import { Button } from 'react-native-elements';
import * as firebase from 'firebase';

export default class UserFeedScreen extends React.Component {
  storeHighScore = (userId, score) => {
    console.log(userId + score);
    userId = firebase.auth().currentUser.uid;
    console.log(userId + score);
    if (userId !== 'No user') {
      firebase
        .database()
        .ref('users/' + userId)
        .set({
          highscore: score
        });
    }
  };

  render() {
    const userId = 'No user';

    return (
      <View style={styles.container}>
        <Text> Feed Screen </Text>
        <Button
          title="RemoveToken"
          onPress={() => AsyncStorage.removeItem('fb_token')}
        />
        <Button
          title="Send Data to Firebase"
          onPress={() => this.storeHighScore(userId, 55)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
