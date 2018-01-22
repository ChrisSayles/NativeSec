import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';



export default class Cards extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Card style={styles.container}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://www.adidas-group.com/media/filer_public_thumbnails/filer_public/46/66/4666054b-940f-44c6-927c-645a4c05b710/kasper_rorsted_adidas_group_01.jpg__640x0_q85_crop-smart_subject_location-2019%2C571.jpg'}} />
                <Body>
                  <Text>DASHBOARD</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'https://www.oracle.com/us/assets/cw20v1-dashboard-summary-3497340.jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
          <Card style={styles.container}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://blog.vsoftconsulting.com/hs-fs/hubfs/AdobeStock_93714874.jpeg?t=1511170306132&width=1024&name=AdobeStock_93714874.jpeg'}} />
                <Body>
                  <Text>USERS</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'https://cloud.oracle.com/opc/paas/images/Oracle-CASB-3.png'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>20 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>7 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  };
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'green',
      width: 380
    },
})
;