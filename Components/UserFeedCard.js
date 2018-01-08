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
  Right
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
              <Text note>{'Level ' + this.props.athleteLevel}</Text>
            </Body>
          </Left>
          <Right>
            <H3 style={styles.h3}>{this.props.eventScore}</H3>
          </Right>
        </CardItem>
        <CardItem cardBody>
          <Video
            source={{
              uri: this.props.videoSrc
            }}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            onLoadStart={this.props.onLoadStart}
            resizeMode="cover"
            useNativeControls
            style={{ width: null, height: 300, flex: 1 }}
          />
        </CardItem>
      </Card>
    );
  }
}
