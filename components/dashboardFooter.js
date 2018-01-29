import React, { Component } from 'react';
import { AppRegistry, View, Image, StyleSheet } from 'react-native';
import LocalImage from './LocalImage';

export default class CloudLock extends Component {
  render() {
    return (
      <View style={componentStyle.container}>
        <Image style={imageStyle.image}
            source={require('../assets/CloudLock.png')}
            />
      </View>
    );
  }
}

const componentStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#809ab0',
    // marginTop: -20

  },
})

const imageStyle = StyleSheet.create({
  image: {
    height: 150,
      width: 375,
      backgroundColor: 'white',
    resizeMode: 'contain'

  },
})
;

// skip this line if using Create React Native App
AppRegistry.registerComponent('DisplayAnImage', () => DisplayAnImage);
