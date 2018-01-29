import React, {Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {StackNavigator} from 'react-navigation';
import HomeScreen from './screens/HomeScreen.js';
import RiskScreen from './screens/RiskScreen.js';
import CardList from './components/cardList.js';
import BlankCard from './components/blankCard.js';
import Dynamic from './components/dynamic.js';


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
  LandingScreen: { screen: LandingScreen}

})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#809ab0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});