import React, {Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {StackNavigator} from 'react-navigation';
import HomeScreen from './screens/HomeScreen.js';
import RiskScreen from './screens/RiskScreen.js';
import CardList from './components/cardList.js';
import BlankCard from './components/blankCard.js';


export default class App extends React.Component {
  render() {
    return (
        <AppNavigator />
    );
  }
}

const AppNavigator = StackNavigator({
  HomeScreen: { screen: HomeScreen},
  RiskScreen: { screen: RiskScreen},

})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});