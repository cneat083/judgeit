import React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../Actions'
import { Button } from 'react-native-elements';



class AuthScreen extends React.Component {
  componentDidMount() {

    this.props.facebookLogin();
    this.onAuthComplete(this.props);
    console.log(this.props)
  }

  componentWillReceiveProps(nextProps) {
    this.onAuthComplete(nextProps);
    console.log(nextProps);
  }

  onAuthComplete(props) {
    if (props.token) {
      this.props.navigation.navigate('UserHome')
    }
  }
  render() {
    const {navigate} = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text>Auth Screen 2</Text>
        <Button title="Work" onPress={() => navigate('Main')} />
        <Button title="RemoveToken" onPress={() => AsyncStorage.removeItem('fb_token')} />

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
    justifyContent: 'center',
  },
});

export default connect(mapStateToProps, actions)(AuthScreen);
