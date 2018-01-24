import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Button
} from 'react-native';
import ImageDisplay from '../components/imageComponent.js';
import CardList from '../components/cardList.js';

class HomeScreen extends Component{
	render(){
		return (
			<View style={styles.container}>
				<ImageDisplay />
				<CardList navigation={this.props.navigation}/>

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

export default HomeScreen;