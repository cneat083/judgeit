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
  Right
} from 'native-base';

import * as firebase from 'firebase';

import styles from './UserFeedScreenStyles';

export default class UserFeedScreen extends React.Component {
  static navigationOptions = {
    header: null,
    title: 'Home',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-home-outline" style={{ color: tintColor }} />
    )
  };

  state = {
    loadStart: true
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

  render() {
    const userId = 'No user';

    return (
      <Container>
        <Header style={styles.header} />
        <Content style={styles.content}>
          <Card style={styles.card}>
            <CardItem>
              <Left>
                <Thumbnail
                  source={{
                    uri:
                      'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAfzAAAAJGFhNTYyNThiLTQ4OWUtNGQ2Mi1hZTVhLWVjYzEzYmRiYTM3OA.jpg'
                  }}
                />
                <Body>
                  <Text>Kelli Corbin</Text>
                  <Text note>Floor</Text>
                  <Text note>Level 10</Text>
                </Body>
              </Left>
              <Right>
                <H3 style={styles.h3}>9.8</H3>
              </Right>
            </CardItem>
            <CardItem cardBody>
              <Video
                source={{
                  uri:
                    'https://firebasestorage.googleapis.com/v0/b/judgeit-64269.appspot.com/o/videoplayback.mp4?alt=media&token=79620c11-4df2-4064-8676-af837174cddf'
                }}
                posterSource={{
                  uri:
                    'https://firebasestorage.googleapis.com/v0/b/judgeit-64269.appspot.com/o/videoplayback.mp4?alt=media&token=79620c11-4df2-4064-8676-af837174cddf'
                }}
                rate={1.0}
                volume={1.0}
                isMuted={false}
                onLoadStart={this.onLoadStart}
                onLoad={this.onLoad}
                onError={this.onError}
                usePoster={this.state.loadStart}
                resizeMode="cover"
                useNativeControls
                style={{ width: null, height: 300, flex: 1 }}
              />
            </CardItem>
          </Card>
          <Card style={styles.card}>
            <CardItem>
              <Left>
                <Thumbnail
                  source={{
                    uri:
                      'https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/2/005/00c/0b9/0142b85.jpg'
                  }}
                />
                <Body>
                  <Text>Jasmine Slivka</Text>
                  <Text note>Beam</Text>
                  <Text note>Level 7</Text>
                </Body>
              </Left>
              <Right>
                <H3 style={styles.h3}>8.2</H3>
              </Right>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={{
                  uri:
                    'https://hips.hearstapps.com/cos.h-cdn.co/assets/16/22/1464712000-gettyimages-520381702.jpg'
                }}
                style={{ height: 200, width: null, flex: 1 }}
              />
            </CardItem>
          </Card>
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
