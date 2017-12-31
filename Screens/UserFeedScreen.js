import React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import { Button } from 'react-native-elements';



export default class UserFeedScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Feed Screen </Text>
        <Button title="RemoveToken" onPress={() => AsyncStorage.removeItem('fb_token')} />
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
