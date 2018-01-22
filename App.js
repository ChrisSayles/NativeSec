import React, {Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import MobileHeader from './components/mobileHeader.js';
import MobileBody from './components/mobileBody';
import ImageDisplay from './components/imageComponent.js';
import ImageBodyComponent from './components/imageBodyComponent.js';
import TouchComponent from './components/touchComponent.js';
import SwipeComponent from './components/swipeComponent.js';
import Cards from './components/cardcomponent.js';
import Swiping from './components/swipeDeck.js';
import PickCategory from './components/pickerComponent.js';
import FooterComponent from './components/footerComponent.js';
import BlankCard from './components/blankCard.js';
import SwipeableList from './components/accordion.js';








export default class App extends React.Component {
  render() {
    return (

      <View style={styles.container}>
        <Text>Project:CASB Mobile Application</Text>
        <ImageDisplay />
        <SwipeableList />

      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});