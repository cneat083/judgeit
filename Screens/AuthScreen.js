import React from 'react';
import { AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import {
  Button,
  Container,
  Content,
  Header,
  Body,
  Title,
  Text,
  Spinner
} from 'native-base';
import * as actions from '../Actions';
import styles from './AuthScreenStyles';

class AuthScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }

  componentWillMount() {
    this.props.facebookLogin();
    this.onAuthComplete(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.onAuthComplete(nextProps);
  }

  onAuthComplete(props) {
    if (props.token) {
      this.props.navigation.navigate('Main');
      this.setState({ loading: false });
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    if (this.state.loading) {
      return <Spinner />;
    }
    return (
      <Container style={styles.container}>
        <Header style={styles.header}>
          <Body>
            <Title style={styles.title}> Login </Title>
          </Body>
        </Header>
        <Content>
          <Text>Auth Screen 2</Text>
          <Button onPress={() => navigate('Main')}>
            <Text> Navigate to Main </Text>
          </Button>
          <Button onPress={() => AsyncStorage.removeItem('fb_token')} />
        </Content>
      </Container>
    );
  }
}

function mapStateToProps({ auth }) {
  return { token: auth.token };
}

export default connect(mapStateToProps, actions)(AuthScreen);
