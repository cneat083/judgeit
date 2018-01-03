import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'native-base';

class UploadVideoScreen extends Component {
  static navigationOptions = {
    title: 'Upload Video',
    header: null
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text> UploadVideoScreen</Text>
        <Button onPress={() => navigate('JudgeSelectScreen')}>
          <Text> Judge Select Screen </Text>
        </Button>
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
