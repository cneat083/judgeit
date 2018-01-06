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

const styles = {
  content: {
    backgroundColor: 'white'
  },
  header: {
    backgroundColor: '#5c6bc0'
  },
  headerText: {
    color: 'white',
    fontWeight: 'bold'
  },
  uploadButton: {
    marginTop: 60,
    alignSelf: 'center'
  },
  uploadIcon: {
    fontSize: 100,
    color: '#ef5350'
  },
  iconText: {
    marginTop: 30,
    alignSelf: 'center'
  },
  nextButton: {
    width: '75%',
    marginTop: 60,
    alignSelf: 'center',
    backgroundColor: '#ef5350'
  },
  textInput: {
    textAlign: 'center'
  },
  textInputItemName: {
    marginTop: 40,
    alignSelf: 'center',
    minWidth: 300,
    width: '70%',
    borderBottomWidth: 2
  },
  textInputItemSmall: {
    marginTop: 20,
    alignSelf: 'center',
    width: 100,
    borderBottomWidth: 2
  },
  inputLabel: {
    alignSelf: 'center'
  }
};
class UploadVideoScreen extends Component {
  static navigationOptions = {
    title: 'Upload Video',
    header: null,
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-videocam-outline" style={{ color: tintColor }} />
    )
  };

  componentDidMount() {
    console.log('UploadVideoScreen');
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Header style={styles.header} />
        <Content style={styles.content}>
          <Button
            onPress={() => console.log('Added Video')}
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
        </Content>
      </Container>
    );
  }
}

export default UploadVideoScreen;
