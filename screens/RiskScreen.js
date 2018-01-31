import React, { Component } from 'react';
import {
	View,
	StyleSheet
} from 'react-native';
import { Text } from 'native-base';
import data from '../components/customData.json';



import ImageDisplay from '../components/imageComponent.js';
import ListSeperator from '../components/listSeperator.js';
import ImageDisplayLogo from '../components/imageComponentLogo.js';

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
         
          <ImageDisplayLogo />
          <ListSeperator clickedInstance = {params.selectedInstance} />
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