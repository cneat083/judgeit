import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Icon } from 'native-base';

export default class ConfirmScreen extends React.Component {
  static navigationOptions = {
    title: 'Confirm',
    header: null,
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-videocam-outline" style={{ color: tintColor }} />
    )
  };
  componentDidMount() {
    console.log('ConfirmScreen Loaded');
  }
  render() {
    const { navigate, goBack } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text> ConfirmScreen </Text>
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
