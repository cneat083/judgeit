import React from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';

import {
  Container,
  Button,
  Header,
  Text,
  Content,
  H1,
  Icon,
  Left,
  Separator,
  Body,
  Title,
  Right
} from 'native-base';

import styles from './JudgeSelectScreenStyles';
import * as actions from '../Actions';
import JudgeSelectCard from '../Components/JudgeSelectCard';

class JudgeSelectScreen extends React.Component {
  static navigationOptions = {
    title: 'Select Judge',
    header: null,
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-videocam-outline" style={{ color: tintColor }} />
    )
  };
  state = {
    checkBoxSelected: false
  };
  componentDidMount() {
    this.props.renderJudgeSelect();
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

  renderItem = ({ item }) => {
    return (
      <JudgeSelectCard
        key={item.key}
        judgeThumbnail={item.judgeThumbnail}
        judgeName={item.judgeName}
        judgeLocation={item.judgeLocation}
        judgeLevelString={item.judgeLevelString}
        judgeEventsScored={item.judgeEventsScored}
      />
    );
  };

  render() {
    const { navigate, goBack } = this.props.navigation;

    return (
      <Container>
        <Header style={styles.header}>
          <Left>
            <Button transparent onPress={() => goBack()}>
              <Icon name="arrow-back" style={styles.backButton} />
            </Button>
          </Left>
          <Body>
            <Title style={styles.title}>Select Judge</Title>
          </Body>
          <Right />
        </Header>
        <Content style={styles.content}>
          <FlatList
            data={this.props.data}
            extraData={this.state}
            renderItem={this.renderItem}
            horizontal
            initialNumToRender={5}
            style={{
              marginTop: 20
            }}
          />

          <H1 style={styles.seperatorText}>or</H1>

          <Button
            style={styles.nextButton}
            block
            iconRight
            onPress={() => navigate('ConfirmScreen')}
          >
            <Text> Find Best Available </Text>
            <Icon name="ios-person-add-outline" />
          </Button>

          <Text note style={styles.buttonNote}>
            {' '}
            Have us find the best available Judge
          </Text>
          <Text style={styles.buttonNote} note>
            {' '}
            all our Judges are certified via the USGA
          </Text>
        </Content>
      </Container>
    );
  }
}

function mapStateToProps({ renderJudgeSelect }) {
  return { data: renderJudgeSelect.judgeSelectData };
}

export default connect(mapStateToProps, actions)(JudgeSelectScreen);
