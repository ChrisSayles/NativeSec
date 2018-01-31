import React, { Component } from 'react';
import { AppRegistry, View, Image, StyleSheet } from 'react-native';
import LocalImage from './LocalImage';

export default class ImageDisplayLogo extends Component {
  render() {
    return (
      <View style={componentStyle.container}>
        <LocalImage
        source={require('../assets/oraclelogo.png')}
        originalWidth={597}
        originalHeight={84}
        />
      </View>
    );
  }
}

const componentStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // marginTop: -20
    marginBottom: -10
  },
})

const imageStyle = StyleSheet.create({
  image: {
    flex: 0,
    resizeMode: "cover",

  },
})
;

// skip this line if using Create React Native App
AppRegistry.registerComponent('DisplayAnImage', () => DisplayAnImage);
