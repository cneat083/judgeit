import React from 'react';
import { Image, AsyncStorage, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { MapView } from 'expo';

import {
  Container,
  Button,
  Header,
  Text,
  Content,
  Icon,
  Title,
  Body,
  Item,
  Label,
  Input
} from 'native-base';

import * as firebase from 'firebase';
import * as actions from '../Actions';

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

  componentDidMount() {
    this.props.renderHomeScreen();
  }

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

  keyExtractor = (item, index) => item.id;

  renderItem = ({ item }) => {
    return (
      <UserFeedCard
        key={item.key}
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
      <Container style={styles.content}>
        <Header style={styles.header}>
          <Body>
            <Title style={styles.headerText}>Welcome to Trucky</Title>
            <Text note style={styles.taglineText}>
              {' '}
              Drop more loads :){' '}
            </Text>
          </Body>
        </Header>
        <Item>
          <Input placeholder="Search for Locations" />
        </Item>
        <Content style={styles.content}>
          <MapView
            style={{
              height: 200,
              width: '100%'
            }}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }}
          />

          <FlatList
            removeClippedSubviews={false}
            data={this.props.data}
            extraData={this.state}
            renderItem={this.renderItem}
          />

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

function mapStateToProps({ renderHomeScreen }) {
  return { data: renderHomeScreen.homeScreenData };
}

export default connect(mapStateToProps, actions)(UserFeedScreen);
