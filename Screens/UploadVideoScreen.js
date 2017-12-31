import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';



export default class UploadVideoScreen extends React.Component {

  static navigationOptions = {
    title: 'Upload Routine',
    headerRight: <Button title= 'Pick Judges' ></Button>
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> UploadVideoScreen</Text>
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
