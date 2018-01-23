import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Icon, Right } from 'native-base';
import FontAwesome, { Icons } from 'react-native-fontawesome';


export default class CardList extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Text>Instance</Text>
        </Header>
        <Content>
          <Card>
            <CardItem>
              <Icon active name="logo-back" />
              <Text>AWS</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>
             <CardItem>
              <Icon active name="logo-googleplus" />
              <Text>Box</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>
             <CardItem>
              <Icon active name="logo-googleplus" />
              <Text>GitHub</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>
             <CardItem>
              <Icon active name="logo-googleplus" />
              <Text>Office 365</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>
             <CardItem>
              <Icon active name="logo-googleplus" />
              <Text>SalesForce</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>
             <CardItem>
              <Icon active name="logo-googleplus" />
              <Text>OracleHCM</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>
           </Card>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 0,
      width: 400,
      height: 800,
      marginTop: -100,
      marginBottom: 60,
      backgroundColor: '#000000',
    },
})

;