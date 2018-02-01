import React, { Component } from 'react';
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

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container style={styles.container}>
        <Content>
          <H1 style={styles.h1}> Welcome to Trucky</H1>
          <Text note style={styles.taglineText}>
            {' '}
            Drop more loads :){' '}
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
