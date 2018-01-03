import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Icon } from 'native-base';

export default class UserAccount extends React.Component {
  static navigationOptions = {
    header: null,
    title: 'User Account',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-settings-outline" style={{ color: tintColor }} />
    )
  };
  render() {
    return (
      <View style={styles.container}>
        <Text> UserAccount Screen </Text>
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
