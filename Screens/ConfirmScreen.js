import React from 'react';
import { Image } from 'react-native';
import {
  Container,
  Button,
  Body,
  Header,
  Text,
  Content,
  H3,
  Icon,
  List,
  Card,
  CardItem,
  Thumbnail,
  Left,
  ListItem,
  Right
} from 'native-base';
import { Video } from 'expo';
import * as firebase from 'firebase';

import styles from './ConfirmScreenStyles';

export default class ConfirmScreen extends React.Component {
  static navigationOptions = {
    title: 'Confirm',
    header: null,
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-videocam-outline" style={{ color: tintColor }} />
    )
  };

  state = {
    uri: ''
  };

  async componentDidMount() {
    console.log('ConfirmScreen Loaded');
    const storage = await firebase.storage();
    const pathReference = await storage.ref('/movie.mov').getDownloadURL();
    this.setState({ uri: pathReference });
  }
  render() {
    const { navigate, goBack } = this.props.navigation;

    return (
      <Container>
        <Header style={styles.header}>
          <Left>
            <Button transparent onPress={() => goBack()}>
              <Icon style={styles.backButton} name="arrow-back" />
            </Button>
          </Left>
        </Header>
        <Content style={styles.content}>
          <Card style={styles.card}>
            <CardItem cardBody>
              <Video
                source={{ uri: this.state.uri }}
                rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode="cover"
                useNativeControls
                style={{ width: null, height: 300, flex: 1 }}
              />
            </CardItem>
          </Card>
          <Card style={styles.card}>
            <CardItem header>
              <H3 style={styles.h3}>Athlete</H3>
            </CardItem>
            <CardItem cardBody>
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
            </CardItem>
          </Card>
          <Card style={styles.card}>
            <CardItem header>
              <H3 style={styles.h3}>Judge</H3>
            </CardItem>
            <CardItem cardBody>
              <Left>
                <Thumbnail
                  source={{
                    uri:
                      'https://scontent.ford1-1.fna.fbcdn.net/v/t31.0-8/1064949_10151754977863274_1642448265_o.jpg?oh=306f5534a7791946818cfc47848aa11a&oe=5AFF333B'
                  }}
                />
                <Body>
                  <Text>Bobby Neat</Text>
                  <Text note>Indianapolis, Indiana</Text>
                  <Text note>Level 1 to Elite</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
          <List style={styles.list}>
            <ListItem>
              <Body>
                <Text>Payment Amount</Text>
              </Body>
              <Right>
                <Text>6.99</Text>
              </Right>
            </ListItem>
            <ListItem>
              <Body>
                <Text>Payment Method</Text>
              </Body>
              <Right style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Text style={{ marginRight: 10 }}>Apple Pay</Text>
                <Icon name="ios-arrow-forward-outline" />
              </Right>
            </ListItem>
          </List>
          <Button
            style={styles.checkoutButton}
            block
            iconRight
            onPress={() => navigate('UploadVideoScreen')}
          >
            <Text> Get a Score </Text>
            <Icon name="ios-checkmark-circle-outline" />
          </Button>
        </Content>
      </Container>
    );
  }
}
