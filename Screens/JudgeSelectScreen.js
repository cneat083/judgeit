import React from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';

import {
  Container,
  Button,
  Header,
  Text,
  Content,
  H2,
  Icon,
  Left,
  Separator
} from 'native-base';

import styles from './JudgeSelectScreenStyles';
import * as actions from '../Actions';
import JudgeSelectCard from '../Components/JudgeSelectCard';

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
              <Icon style={styles.backButton} name="arrow-back" />
            </Button>
          </Left>
        </Header>
        <Content style={styles.content}>
          <H2 style={styles.selectJudgeText}>Select Judge</H2>
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
          <Separator style={styles.seperator} bordered>
            <Text style={styles.seperatorText}>OR</Text>
          </Separator>
          <Button
            style={styles.nextButton}
            block
            iconRight
            onPress={() => navigate('ConfirmScreen')}
          >
            <Text> Best Available Judge </Text>
            <Icon name="ios-person-add-outline" />
          </Button>
        </Content>
      </Container>
    );
  }
}

function mapStateToProps({ renderJudgeSelect }) {
  return { data: renderJudgeSelect.judgeSelectData };
}

export default connect(mapStateToProps, actions)(JudgeSelectScreen);
