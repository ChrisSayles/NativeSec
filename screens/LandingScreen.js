import React, { Component } from 'react';
import {
	View,
	StyleSheet,
} from 'react-native';
import { Text, Container } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";

import DashboardContent from '../components/dashboardContent.js';
import ImageDisplay from '../components/imageComponent.js';
import data from '../components/customData.json';

class Dashboard extends Component{
	render(){
		return (
		<View style={styles.container}>
          
          <DashboardContent navigation={this.props.navigation}/>
          <ImageDisplay />
      
		</View>
			)
		}
	};
const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: 'white',
    height: 100
  },
});
export default Dashboard;

