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

    let tempObj = {};
    let instances = [];


    data.riskevents.map(riskevent => {
      if(!tempObj.hasOwnProperty(riskevent.appinstance)){
        tempObj[riskevent.appinstance] = 1;
      }
      else{
        tempObj[riskevent.appinstance] += 1;
      }
    });

    for (keys in tempObj){
      console.log(keys);
      console.log(tempObj[keys]);
      instances.push({name: keys, errorCount: tempObj[keys]}); 
    }

    
    console.log(tempObj);

    const renderCards = (results) => results.map(result => {

      let errorCount = 0;

        return (
        <Card style={styles.backgroundColor}>
          <CardItem 
          style={styles.backgroundColor}
          button onPress={() => this.navigate('RiskScreen', {selectedInstance: result.name})}>
              <Icon active name="ios-warning" /> 
                <Button 
                style={styles.backgroundColor}
                >
                  <Text style={styles.text}>{result.errorCount}</Text>
                  <Text style={styles.text}>{result.name}</Text>
                </Button>
                  <Right>
                    <Icon name="arrow-forward" />
                 </Right>
           </CardItem>      
          </Card>
         );

    });



    return (
      <Container style={styles.container}>
        
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
      backgroundColor: '#809ab0',
    },
    text: {
      backgroundColor: '#687785',
      color: 'white'
    },
    backgroundColor: {
      backgroundColor: '#687785',
      
    }
})

;