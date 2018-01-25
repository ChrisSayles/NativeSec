import React, { Component } from 'react';
import {
	View,
	StyleSheet
} from 'react-native';
import { Text } from 'native-base';
import data from '../components/customData.json';



import ImageDisplay from '../components/imageComponent.js';
import ListSeperator from '../components/listSeperator.js';

class RiskScreen extends Component{


  constructor(props) {
    super(props);
    this.selectedInstance = this.props.selectedInstance; 

  }


	render(){
    const { params } = this.props.navigation.state;
    console.log(params.selectedInstance);


		return (
			<View style={styles.container}>
          <Text >  { params.selectedInstance }  </Text>
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