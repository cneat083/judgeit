import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



export default class UploadVideoScreen extends React.Component {

  static navigationOptions = {
    title: 'Upload Routine',
    headerRight: <Text> Go Right </Text>
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
