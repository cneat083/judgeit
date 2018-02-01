import React from 'react';
import { Video } from 'expo';
import {
  Body,
  H3,
  Card,
  Text,
  CardItem,
  Thumbnail,
  Left,
  Right,
  Button,
  Icon
} from 'native-base';

import styles from '../Screens/UserFeedScreenStyles';

export default class UserFeedCard extends React.Component {
  render() {
    return (
      <Card style={styles.card}>
        <CardItem>
          <Left>
            <Thumbnail
              source={{
                uri: this.props.athleteThumbnailSource
              }}
            />
            <Body>
              <Text>{this.props.athleteName}</Text>
              <Text note>{this.props.athleteEvent}</Text>
              <Text note>{this.props.athleteLevel}</Text>
            </Body>
          </Left>
          <Right>
            <Button transparent textStyle={{ color: '#87838B' }}>
              <Icon name="speedometer" style={{ fontSize: 32 }} />
              <H3 style={{ marginLeft: 8, color: '#87838B' }}>
                {this.props.eventScore}
              </H3>
            </Button>
          </Right>
        </CardItem>
        <CardItem cardBody />
      </Card>
    );
  }
}
