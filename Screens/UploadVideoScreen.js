import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Icon } from 'native-base';

class UploadVideoScreen extends Component {
  static navigationOptions = {
    title: 'Upload Video',
    header: null,
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-videocam-outline" style={{ color: tintColor }} />
    )
  };

  componentDidMount() {
    console.log('UploadVideoScreen');
  }

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
