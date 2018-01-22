import React, { Component } from 'react';
import { AppRegistry, View, Image, StyleSheet } from 'react-native';
import LocalImage from './LocalImage';

export default class ImageDisplay extends Component {
  render() {
    return (
      <View style={componentStyle.container}>
        <LocalImage
        source={require('../assets/oraclelogo.png')}
        originalWidth={555}
        originalHeight={250}
        />
      </View>
    );
  }
}

const componentStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    // marginBottom: -300

  },
})

const imageStyle = StyleSheet.create({
  image: {
    flex: 2,
    resizeMode: "cover",

  },
})
;

// skip this line if using Create React Native App
AppRegistry.registerComponent('DisplayAnImage', () => DisplayAnImage);
