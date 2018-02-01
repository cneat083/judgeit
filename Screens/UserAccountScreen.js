import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Icon, Container } from 'native-base';

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
      <Container>
        <Text> UserAccount Screen </Text>
      </Container>
    );
  }
}
