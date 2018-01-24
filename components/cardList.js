import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Icon, Right, Button } from 'native-base';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import {StackNavigator} from 'react-navigation';
import data from './customData.json';

var escapeJSON = function(str) {
    return str.replace(/\\/g,'\\');
};


export default class CardList extends Component {
   constructor(props) {
    super(props);
    this.navigate = this.props.navigation.navigate;  
  }
  

  render() {   
    return (
      <Container style={styles.container}>
        <Header>
          <Text>Select an Instance</Text>
        </Header>
        <Content>
          <Card>
            <CardItem>
                <Icon active name="ios-warning" />
                      <Button 
                      style={styles.backgroundColor}
                      onPress={() =>
                this.navigate('RiskScreen')}>
                  <Text style={styles.text}>{JSON.stringify(data.riskevent.appname).slice(1,-1)}</Text>
              </Button>
                    <Right>
                      <Icon name="arrow-forward" />
                   </Right>
             </CardItem>
             
             <CardItem>
                <Icon active name="ios-warning" />
                      <Button 
                      style={styles.backgroundColor}
                      onPress={() =>
                this.navigate('RiskScreen')}>
                  <Text style={styles.text}>Box</Text>
              </Button>
                    <Right>
                      <Icon name="arrow-forward" />
                   </Right>
             </CardItem>


             <CardItem>
                <Icon active name="ios-warning" />
                      <Button 
                      style={styles.backgroundColor}
                      onPress={() =>
                this.navigate('RiskScreen')}>
                  <Text style={styles.text}>GitHub</Text>
              </Button>
                    <Right>
                      <Icon name="arrow-forward" />
                   </Right>
             </CardItem>

             
             <CardItem>
                <Icon active name="ios-warning" />
                      <Button 
                      style={styles.backgroundColor}
                      onPress={() =>
                this.navigate('RiskScreen')}>
                  <Text style={styles.text}>SalesForce</Text>
              </Button>
                    <Right>
                      <Icon name="arrow-forward" />
                   </Right>
             </CardItem>

             <CardItem>
                <Icon active name="ios-warning" />
                      <Button 
                      style={styles.backgroundColor}
                      onPress={() =>
                this.navigate('RiskScreen')}>
                  <Text style={styles.text}>Office 365</Text>
              </Button>
                    <Right>
                      <Icon name="arrow-forward" />
                   </Right>
             </CardItem>


              <CardItem>
                <Icon active name="ios-warning" />
                      <Button 
                      style={styles.backgroundColor}
                      onPress={() =>
                this.navigate('RiskScreen')}>
                  <Text style={styles.text}>OracleHCM</Text>
              </Button>
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