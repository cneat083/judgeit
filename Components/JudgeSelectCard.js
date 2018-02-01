import React from 'react';

import {
  Text,
  CheckBox,
  ListItem,
  Card,
  Icon,
  CardItem,
  Left,
  Right,
  Body,
  Thumbnail,
  Button
} from 'native-base';

import styles from '../Screens/JudgeSelectScreenStyles';

class JudgeSelectCard extends React.Component {
  render() {
    return (
      <Card>
        <CardItem style={{ alignSelf: 'center' }}>
          <Thumbnail
            source={{
              uri: this.props.judgeThumbnail
            }}
          />
        </CardItem>
        <CardItem style={{ alignSelf: 'center' }}>
          <Text>{this.props.judgeName}</Text>
        </CardItem>
        <CardItem style={{ alignSelf: 'center' }}>
          <Text note>{this.props.judgeLocation}</Text>
        </CardItem>
        <CardItem style={{ alignSelf: 'center' }}>
          <Text note>{this.props.judgeLevelString}</Text>
        </CardItem>
        <CardItem style={{ alignSelf: 'center' }}>
          <Text note>{this.props.judgeEventsScored}</Text>
        </CardItem>
        <CardItem style={{ alignSelf: 'center' }}>
          <Button block iconRight onPress={() => navigate('ConfirmScreen')}>
            <Text> Select </Text>
          </Button>
        </CardItem>
      </Card>
    );
  }
}

export default JudgeSelectCard;
