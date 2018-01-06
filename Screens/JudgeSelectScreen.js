import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Container,
  Button,
  Header,
  Text,
  Content,
  H2,
  Icon,
  SearchBar,
  Item,
  Input,
  Label,
  CheckBox,
  List,
  ListItem,
  Left,
  Right,
  Separator,
  Body,
  Thumbnail
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
    marginTop: 80,
    alignSelf: 'center',
    backgroundColor: '#ef5350'
  },

  selectJudgeText: {
    marginTop: 45,
    alignSelf: 'center'
  },
  checkBox: {
    marginRight: 20,
    marginTop: 5
  },
  seperator: {
    marginTop: 80
  },
  seperatorText: {
    alignSelf: 'center',
    fontWeight: 'bold'
  },
  backButton: {
    color: 'white'
  },
  list: {
    marginTop: 20
  }
};

class JudgeSelectScreen extends React.Component {
  static navigationOptions = {
    title: 'Select Judges',
    header: null,
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-videocam-outline" style={{ color: tintColor }} />
    )
  };
  state = {
    checkBoxSelected: false
  };
  componentDidMount() {
    console.log('JudgeSelectScreen');
  }
  onCheckBoxPress() {
    if (this.state.checkBoxSelected === false) {
      this.setState({
        checkBoxSelected: true
      });
    } else {
      this.setState({
        checkBoxSelected: false
      });
    }
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
          <Button
            style={styles.nextButton}
            block
            iconRight
            onPress={() => navigate('ConfirmScreen')}
          >
            <Text> Best Available Judge </Text>
            <Icon name="ios-person-add-outline" />
          </Button>
          <Separator style={styles.seperator} bordered>
            <Text style={styles.seperatorText}>OR</Text>
          </Separator>
          <H2 style={styles.selectJudgeText}>Select Judge</H2>
          <List style={styles.list}>
            <ListItem avatar onPress={() => this.onCheckBoxPress()}>
              <Left>
                <Thumbnail
                  source={{
                    uri:
                      'https://scontent.ford1-1.fna.fbcdn.net/v/t31.0-8/1064949_10151754977863274_1642448265_o.jpg?oh=306f5534a7791946818cfc47848aa11a&oe=5AFF333B'
                  }}
                />
              </Left>
              <Body>
                <Text>Bobby Neat</Text>
                <Text note>Indianapolis, Indiana</Text>
                <Text note>Level 1 to Elite</Text>
              </Body>
              <Right>
                <Text note>1421 Scores</Text>
                <CheckBox
                  style={styles.checkBox}
                  color="#ef5350"
                  checked={this.state.checkBoxSelected}
                  onPress={() => this.onCheckBoxPress()}
                />
              </Right>
            </ListItem>
            <ListItem avatar onPress={() => this.onCheckBoxPress()}>
              <Left>
                <Thumbnail
                  source={{
                    uri:
                      'https://scontent.ford1-1.fna.fbcdn.net/v/t1.0-9/12961711_10208117790615637_2432756506559772570_n.jpg?oh=6cb0b136ddb54ca71df74b46d1d702ff&oe=5AF0646B'
                  }}
                />
              </Left>
              <Body>
                <Text>Linda Barclay</Text>
                <Text note>Indianapolis, Indiana</Text>
                <Text note>Level 1 to 8</Text>
              </Body>
              <Right>
                <Text note>24353 Scores</Text>
                <CheckBox
                  style={styles.checkBox}
                  color="#ef5350"
                  checked={this.state.checkBoxSelected}
                  onPress={() => this.onCheckBoxPress()}
                />
              </Right>
            </ListItem>
          </List>
          <Button
            style={styles.nextButton}
            block
            iconRight
            onPress={() => navigate('ConfirmScreen')}
          >
            <Text> Review Selections </Text>
            <Icon name="ios-arrow-forward-outline" />
          </Button>
        </Content>
      </Container>
    );
  }
}

export default JudgeSelectScreen;
