import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  Container,
  Button,
  Text,
  Content,
  H1,
  Icon,
  Tab,
  Tabs,
  TabHeading
} from 'native-base';
import * as actions from '../Actions';

import styles from './WelcomeScreenStyles';

class WelcomeScreen extends Component {
  static navigationOptions = {
    header: null
  };
  componentDidMount() {
    console.log('Welcome Screen Rendered');
  }

  placeHolder() {
    console.log('testing');
  }

  onAuthComplete(props) {
    if (props.token !== 'canceled' && props.token) {
      console.log('navigating from welcome');
      this.props.navigation.navigate('Main');
    }
  }

  async authWithFacebook() {
    await this.props.facebookLogin();
    this.onAuthComplete(this.props);
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container style={styles.container}>
        <Content>
          <H1 style={styles.h1}> Welcome to JudgeIt</H1>
          <Text note style={styles.taglineText}>
            {' '}
            Upload a Video. Get a Score{' '}
          </Text>
          <Button
            info
            block
            iconLeft
            style={styles.facebookButton}
            onPress={() => this.authWithFacebook()}
          >
            <Icon style={styles.facebookIcon} name="logo-facebook" />
            <Text style={styles.facebookButtonText}>
              {' '}
              Sign In with Facebook{' '}
            </Text>
          </Button>
          <Text style={styles.H3}> Dont have Facebook? Use Email</Text>
          <Tabs
            style={styles.tabs}
            tabBarUnderlineStyle={{ backgroundColor: '#ef5350' }}
          >
            <Tab
              heading={
                <TabHeading>
                  <Icon name="md-mail" style={styles.iconStyle} />
                  <Text style={styles.tabText}>Sign In</Text>
                </TabHeading>
              }
            />
            <Tab
              heading={
                <TabHeading>
                  <Icon name="md-person-add" style={styles.iconStyle} />
                  <Text style={styles.tabText}>Sign Up</Text>
                </TabHeading>
              }
            />
          </Tabs>
        </Content>
      </Container>
    );
  }
}
function mapStateToProps({ auth }) {
  return { token: auth.token };
}

export default connect(mapStateToProps, actions)(WelcomeScreen);
