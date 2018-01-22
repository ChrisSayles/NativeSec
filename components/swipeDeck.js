import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';
import LocalImage from './LocalImage';
const cards = [
  {
    text: 'Dashboard',
    name: 'Dashboard',
    image: {uri: 'https://www.oracle.com/us/assets/cw20v1-dashboard-summary-3497340.jpg'},
    imageicon: {uri: 'http://moziru.com/images/profile-clipart-generic-user-11.png'},
  },
  {
    text: 'User Score',
    name: 'User Score',
    image: {uri: 'https://cloud.oracle.com/opc/paas/images/Oracle-CASB-3.png'},
    imageicon: {uri: 'http://moziru.com/images/profile-clipart-generic-user-11.png'},
  },
  {
    text: 'Risk Events',
    name: 'Risk Events',
    image: {uri: 'https://cloud.oracle.com/opc/paas/images/Oracle-CASB-1.png'},
    imageicon: {uri: 'http://moziru.com/images/profile-clipart-generic-user-11.png'},
  },
];
export default class Swiping extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <View>
          <DeckSwiper
            dataSource={cards}
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                    <Thumbnail source={item.imageicon} />
                    <Body>
                      <Text>{item.text}</Text>
                      
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <LocalImage style={{ height: 400, flex: 1 }} source={item.image} originalWidth={570}
                            originalHeight={425}/>
                </CardItem>
                <CardItem>
                  
                  <Text></Text>
                </CardItem>
              </Card>
            }
          />
        </View>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: 400,
      height: 800,
      marginTop: -100,
      marginBottom: 60,
      backgroundColor: '#000000',
    },
})

;