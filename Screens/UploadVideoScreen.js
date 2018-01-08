import React, { Component } from 'react';
import {
  Container,
  Button,
  Header,
  Text,
  Content,
  Icon,
  Item,
  Input,
  Label
} from 'native-base';
import { ImagePicker, Video } from 'expo';
import * as firebase from 'firebase';

import styles from './UploadVideoScreenStyles';

class UploadVideoScreen extends Component {
  static navigationOptions = {
    title: 'Upload Video',
    header: null,
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-videocam-outline" style={{ color: tintColor }} />
    )
  };

  state = {
    uri: '',
    uri2: ''
  };

  componentDidMount() {
    console.log('UploadVideoScreen');
  }

  pickVideo = async () => {
    console.log('picking video');
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: 'Videos',
      allowEditing: true
    });

    this.setState({ uri: result.uri });
    console.log(result.uri);
  };

  uploadVideo = async uri => {
    console.log(uri);
    const apiUrl =
      'https://us-central1-judgeit-64269.cloudfunctions.net/api/picture';

    const name = `movie.mov`;
    const body = new FormData();
    body.append('movie', {
      uri: uri,
      name,
      type: 'video/mov'
    });
    const res = await fetch(apiUrl, {
      method: 'POST',
      body,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data'
      }
    });
    console.log(
      'logging result ' + res.status + ' ' + res.headers + ' ' + res.statusText
    );
    const storage = await firebase.storage();
    const pathReference = await storage.ref('/movie.mov').getDownloadURL();
    this.setState({ uri2: pathReference });
    console.log('report ' + pathReference);
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Header style={styles.header} />
        <Content style={styles.content}>
          <Button
            onPress={this.pickVideo}
            style={styles.uploadButton}
            transparent
          >
            <Icon style={styles.uploadIcon} name="ios-add-circle-outline" />
          </Button>
          <Item style={styles.textInputItemName}>
            <Input
              style={styles.textInput}
              autoCapitalize="words"
              placeholder="Athlete Name"
            />
          </Item>
          <Item floatingLabel style={styles.textInputItemSmall}>
            <Label style={styles.inputLabel}>Level</Label>
            <Input style={styles.textInput} keyboardType="numeric" />
          </Item>
          <Item floatingLabel style={styles.textInputItemSmall}>
            <Label style={styles.inputLabel}>Start Value</Label>
            <Input style={styles.textInput} keyboardType="numeric" />
          </Item>
          <Button
            style={styles.nextButton}
            block
            iconRight
            onPress={() => navigate('JudgeSelectScreen')}
          >
            <Text> Select Judges </Text>
            <Icon name="ios-arrow-forward-outline" />
          </Button>
          <Video
            source={{ uri: this.state.uri2 }}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="cover"
            useNativeControls
            style={{ width: null, height: 300, flex: 1 }}
          />
        </Content>
      </Container>
    );
  }
}

export default UploadVideoScreen;
