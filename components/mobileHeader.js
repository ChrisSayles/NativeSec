import React, {Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class MobileHeader extends Component {
  render() {
    return (
     <View style={componentStyle.container}>
        <Text> Header Component</Text>
      </View>
    );
  }
}

const componentStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f80000',
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
})
;