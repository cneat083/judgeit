import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'native-base';

export default class JudgeSelectScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text> JudgeSelectScreen </Text>
        <Button onPress={() => navigate('ConfirmScreen')}>
          <Text> Confirm Screen </Text>
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
