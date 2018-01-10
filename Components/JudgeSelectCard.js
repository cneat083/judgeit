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
        <CardItem>
          <Thumbnail
            source={{
              uri: this.props.judgeThumbnail
            }}
          />
        </CardItem>
        <CardItem>
          <Text>{this.props.judgeName}</Text>
        </CardItem>
        <CardItem>
          <Text note>{this.props.judgeLocation}</Text>
        </CardItem>
        <CardItem>
          <Text note>{this.props.judgeLevelString}</Text>
        </CardItem>
        <CardItem>
          <Text note>{this.props.judgeEventsScored}</Text>
        </CardItem>
        <CardItem>
          <Button block iconRight onPress={() => navigate('ConfirmScreen')}>
            <Text> Select </Text>
            <Icon name="ios-person-add-outline" />
          </Button>
        </CardItem>
      </Card>
    );
  }
}

export default JudgeSelectCard;
