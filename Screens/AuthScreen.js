import React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'native-base';
import * as actions from '../Actions';

class AuthScreen extends React.Component {
  componentWillMount() {
    console.log('logging in to facebook -- auth screen rendering');
    this.props.facebookLogin();
    this.onAuthComplete(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.onAuthComplete(nextProps);
  }

  onAuthComplete(props) {
    if (props.token) {
      this.props.navigation.navigate('UserHome');
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Auth Screen 2</Text>
        <Button onPress={() => navigate('Main')}>
          <Text> Navigate to Main </Text>
        </Button>
        <Button onPress={() => AsyncStorage.removeItem('fb_token')} />
      </View>
    );
  }
}

function mapStateToProps({ auth }) {
  return { token: auth.token };
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default connect(mapStateToProps, actions)(AuthScreen);
