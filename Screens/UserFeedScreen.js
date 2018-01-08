import React from 'react';
import { Image, AsyncStorage } from 'react-native';
import { Video } from 'expo';
import {
  Container,
  Button,
  Body,
  Header,
  Text,
  Content,
  H3,
  Icon,
  Card,
  CardItem,
  Thumbnail,
  Left,
  List,
  ListItem,
  Right
} from 'native-base';

import * as firebase from 'firebase';

import data from '../TestData/UserFeedScreenData';
import styles from './UserFeedScreenStyles';
import UserFeedCard from '../Components/UserFeedCard';

class UserFeedScreen extends React.Component {
  static navigationOptions = {
    header: null,
    title: 'Home',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-home-outline" style={{ color: tintColor }} />
    )
  };

  state = {
    loadStart: true,
    data: data
  };
  storeHighScore = (userId, score) => {
    userId = firebase.auth().currentUser.uid;
    console.log(userId + score);
    if (userId !== 'No user') {
      firebase
        .database()
        .ref('users/' + userId)
        .set({
          highscore: score
        });
    }
  };
  signUserOut = () => {
    firebase
      .auth()
      .signOut()
      .then(
        () => {
          console.log('Signed Out');
        },
        () => {
          console.error('Sign Out Error', error);
        }
      );
    AsyncStorage.removeItem('fb_token');
    const { navigate } = this.props.navigation;
    // Sign-out successful.
    navigate('Welcome');
    console.log('Signed Out User');
  };
  onLoadStart = () => {
    console.log('ON LOAD START');
  };

  onLoad = status => {
    console.log(`ON LOAD : ${JSON.stringify(status)}`);
    this.setState({ loadStart: false });
  };

  onError = error => {
    console.log(`ON ERROR : ${error}`);
  };

  renderList = item => {
    return (
      <UserFeedCard
        onLoadStart={this.onLoadStart}
        athleteThumbnailSource={item.athleteThumbnailSource}
        athleteName={item.athleteName}
        athleteEvent={item.athleteEvent}
        athleteLevel={item.athleteLevel}
        eventScore={item.eventScore}
        videoSrc={item.videoSrc}
      />
    );
  };

  render() {
    const userId = 'No user';

    return (
      <Container>
        <Header style={styles.header} />
        <Content style={styles.content}>
          <List dataArray={this.state.data} renderRow={this.renderList} />

          <Button block style={styles.button} onPress={this.signUserOut}>
            <Text style={styles.buttonText}> Sign Out </Text>
          </Button>
          <Button
            block
            style={styles.button}
            onPress={() => this.storeHighScore(userId, 55)}
          >
            <Text style={styles.buttonText}> Send Data to Firebase </Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default UserFeedScreen;
