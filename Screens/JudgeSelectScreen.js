import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Icon } from 'native-base';

export default class JudgeSelectScreen extends React.Component {
  static navigationOptions = {
    title: 'Select Judges',
    header: null,
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-videocam-outline" style={{ color: tintColor }} />
    )
  };
  componentDidMount() {
    console.log('JudgeSelectScreen');
  }
  render() {
    const { navigate, goBack } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text> JudgeSelectScreen </Text>
        <Button onPress={() => navigate('ConfirmScreen')}>
          <Text> Confirm Screen </Text>
        </Button>
        <Button onPress={() => goBack()}>
          <Text> Go Back </Text>
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
