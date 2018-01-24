import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';


import ImageDisplay from '../components/imageComponent.js';
import ListSeperator from '../components/listSeperator.js';

class RiskScreen extends Component{
	render(){
		return (
			<View style={styles.container}>
				<ImageDisplay /> 
				<ListSeperator />
			</View>

			);
	}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



export default RiskScreen;