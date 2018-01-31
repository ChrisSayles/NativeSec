import React, { Component } from 'react';
import {
 View,
 StyleSheet,
 Image,
 Button,
 TouchableHighlight
} from 'react-native';
import { Text, Container, Header } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";






class DashboardContent extends Component{
 
 
 render(){
   return (
   <Container style={styles.container}>
     <Grid>
   <Col>
       <Row style={styles.box1}>
         

           <Image style={styles.dashboardImg}
           source={require('../assets/dashboard.png')}
           />
         <Button onPress={() =>
           this.props.navigation.navigate('TestScreen')}
           
           title="Dashboard" />

       </Row>
       <Row style={styles.box2}>
       
           <Image style={styles.dashboardImg}
           source={require('../assets/greycloud.png')}
           />
         <Button style={styles.hyperlink} onPress={() =>

           this.props.navigation.navigate('HomeScreen')}
           title="Applications" />
       </Row>
   </Col>
   <Col>
       <Row style={styles.box3}>
       
         <Image style={styles.dashboardImg}
           source={require('../assets/riskevents.png')}
           />
           <Button onPress={() =>
           this.props.navigation.navigate('RiskScreen', {selectedInstance: 'all'})}
           title="Risk Events" />
       </Row>
       <Row style={styles.box4}>
           <Image style={styles.dashboardImg}
           source={require('../assets/folder.png')}
           />
           <Button onPress={() =>
           this.props.navigation.navigate('RiskScreen', {selectedInstance: 'all'})}
           title="Other" />
       </Row>
   </Col>
</Grid>
   </Container>
     )
   }
 };

const styles = StyleSheet.create({
   box1: {
     backgroundColor: '#dee0e0',
     width: 200,
     justifyContent: 'center',
   alignItems: 'center',
   borderWidth: 3,
   borderColor: 'grey',
   borderBottomWidth:1,
   borderLeftWidth:0,
   borderTopWidth:0,
   flexDirection: 'column'
   },
   box2: {
     backgroundColor: '#dee0e0',
     width: 200,
     justifyContent: 'center',
   alignItems: 'center',
   borderWidth: 3,
   borderColor: 'grey',
   borderLeftWidth:0,
    borderBottomWidth:0,
    flexDirection: 'column'
   },
   box3: {
     backgroundColor: '#dee0e0',
     width: 200,
     justifyContent: 'center',
   alignItems: 'center',
   borderWidth: 3,
   borderColor: 'grey',
   borderBottomWidth:1,
   borderTopWidth:0,
   flexDirection: 'column'
   },
   box4: {
     backgroundColor: '#dee0e0',
     width: 200,
     justifyContent: 'center',
   alignItems: 'center',
   borderWidth: 3,
   borderColor: 'grey',
   borderBottomWidth:0,
   flexDirection: 'column'
   },
   dashboardImg: {
     height: 100,
     width: 100,
   },
 container: {
   flex: 0,
   width: 370,
   height: 500
},
 header: {
   backgroundColor: '#000040',
   marginBottom: 20,
   width: 390,
   height:63,
   justifyContent: 'center',
       alignItems: 'center',
   marginTop: -35
},
 headerText: {
   color: 'white',
   fontSize: 20,
   fontWeight: 'bold',
   justifyContent: 'center',
   alignItems: 'center',
},paragraph: {
   textAlign: 'center',
   fontWeight: 'bold'
 },
 hyperlink: {
   textAlign: 'center',
   fontWeight: 'bold',
   color: 'red',
   fontWeight: 'bold'
 }
})

;

export default DashboardContent;