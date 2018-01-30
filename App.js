import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, AppRegistry } from 'react-native';
import {StackNavigator} from 'react-navigation';
import Dashboard from './screens/LandingScreen.js';
import DashboardVisual from './screens/Dashboard.js';
import TestScreen from './screens/TestScreen.js';
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
  // DashboardVisual: { screen: DashboardVisual},
  // Dashboard: { screen: Dashboard},
  // TestScreen: { screen: TestScreen}, 
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

AppRegistry.registerComponent('MyApp', () => MyApp);