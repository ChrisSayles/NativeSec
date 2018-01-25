import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Icon, Right, Button } from 'native-base';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import {StackNavigator} from 'react-navigation';
import data from './customData.json';



export default class CardList extends Component {
   constructor(props) {
    super(props);
    this.navigate = this.props.navigation.navigate;  
  }
  

  render() {  

    let instances = [];


    data.riskevents.map(riskevent => {
      if(!instances.includes(riskevent.appinstance)){
        instances.push(riskevent.appinstance);
      }
    });

    

    const renderCards = (results) => results.map(result => (
      <Card >
        <CardItem button onPress={() => this.navigate('RiskScreen', {selectedInstance: result})}>
            <Icon active name="ios-warning" />
                  <Button 
                  style={styles.backgroundColor}
                  >
              <Text style={styles.text}>{result}</Text>
          </Button>
                <Right>
                  <Icon name="arrow-forward" />
               </Right>
         </CardItem>      
        </Card>
    ));

    return (
      <Container style={styles.container}>
        <Header>
          <Text>Select an Instance</Text>
        </Header>
        <Content>
          {renderCards(instances)}
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: 400,
      height: 800,
      marginTop: -300,
      marginBottom: 60,
      backgroundColor: '#000000',
    },
    text: {
      backgroundColor: 'white',
      color: 'black'
    },
    backgroundColor: {
      backgroundColor: 'white'
    }
})

;