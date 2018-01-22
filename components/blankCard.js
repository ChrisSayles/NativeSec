import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';
import LocalImage from './LocalImage';
import data from './customData.json';

const cards = [
  {
    text: 'Blank Card 1',
    name: '',
    // image: {uri: ''},
    // imageicon: {uri: ''},
  }
];
export default class BlankCard extends Component {
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
                      <Text>{data[0].gender + "\n" + data[0].first_name}</Text>
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
      backgroundColor: '#324b5c',
    },
})

;