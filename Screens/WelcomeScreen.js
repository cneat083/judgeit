import React, { Component } from 'react';
import {
  Container,
  Button,
  Body,
  Header,
  Text,
  Content,
  H1,
  Icon,
  Tab,
  Tabs,
  TabHeading
} from 'native-base';
import * as firebase from 'firebase';

const styles = {
  container: {
    backgroundColor: '#5c6bc0'
  },
  h1: {
    color: '#ffffff',
    marginTop: '30%',
    alignSelf: 'center',
    fontWeight: 'bold'
  },
  H3: {
    color: '#ffffff',
    marginTop: '40%',
    alignSelf: 'center',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  content: {
    justifyContent: 'center'
  },
  button: {
    backgroundColor: '#ffffff',
    marginTop: 40,
    width: '75%',
    alignSelf: 'center'
  },
  facebookButton: {
    backgroundColor: '#ffffff',
    marginTop: '40%',
    width: '75%',
    alignSelf: 'center'
  },
  buttonText: {
    color: '#e57373'
  },
  facebookButtonText: {
    color: '#3B5998'
  },
  facebookIcon: {
    color: '#3B5998'
  },
  tabs: {
    marginTop: 20
  },
  iconStyle: {
    color: '#ef5350'
  },
  tabText: {
    color: '#ef5350'
  },
  taglineText: {
    color: '#ffffff',
    alignSelf: 'center',
    marginTop: 5
  }
};

class WelcomeScreen extends Component {
  placeHolder() {
    console.log('testing');
  }

  render() {
    const { navigate } = this.props.navigation;
    const userId = 'No user';
    return (
      <Container style={styles.container}>
        <Content>
          <H1 style={styles.h1}> Welcome to Judge It</H1>
          <Text note style={styles.taglineText}>
            {' '}
            Upload Your Routine. Get a Score.
          </Text>
          <Button
            info
            block
            iconLeft
            style={styles.facebookButton}
            onPress={() => navigate('AuthScreen')}
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

export default WelcomeScreen;
