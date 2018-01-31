import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Button
} from 'react-native';
import DashboardVisualComponent from '../components/dashboardVisual.js'

class DashboardVisual extends Component{
	render(){
		return (
		<View >
          
         <DashboardVisualComponent />

      
		</View>
			)
		}
	};

export default DashboardVisual;
