import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'native-base';

class UploadVideoScreen extends Component {
  static navigationOptions = props => {
    const { navigate } = props.navigation;
    return {
      title: 'Upload Video'
    };
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text> UploadVideoScreen</Text>
        <Button title="Work" onPress={() => navigate('UploadVideoScreen')} />
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

export default UploadVideoScreen;
