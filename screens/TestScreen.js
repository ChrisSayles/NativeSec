import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Button
} from 'react-native';

class TestScreen extends Component{
	render(){
		return (
		<View >
          
         <Text> This is the Test Page </Text>
         <Button onPress={() =>
            this.props.navigation.navigate('Dashboard')}
            title="go to the dashboard" />

      
		</View>
			)
		}
	};

export default TestScreen;
