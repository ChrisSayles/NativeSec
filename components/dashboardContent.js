import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Button,

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
          <Button onPress={() =>
            this.props.navigation.navigate('TestScreen')}
            title="go to the Dashboard" />

            <Image style={styles.dashboardImg}
            source={require('../assets/dashboard.png')}
            />
          <Text style={styles.paragraph}> Dashboard </Text>

        </Row>
        <Row style={styles.box2}>
        <Button onPress={() =>
            this.props.navigation.navigate('HomeScreen')}
            title="Go to Homescreen" />
            <Image style={styles.dashboardImg}
            source={require('../assets/cloud.png')}
            />
          <Text style={styles.paragraph}> Applications </Text>
        </Row>
    </Col>
    <Col>
        <Row style={styles.box3}>
        <Button onPress={() =>
            this.props.navigation.navigate('RiskScreen', {selectedInstance: 'all'})}
            title="go to the RiskScreen" />
          <Image style={styles.dashboardImg}
            source={require('../assets/riskevents.png')}
            />
            <Text style={styles.paragraph}> Risk Events </Text>
        </Row>
        <Row style={styles.box4}>
            <Image style={styles.dashboardImg}
            source={require('../assets/folder.png')}
            />
            <Text style={styles.paragraph}> Other </Text>
        </Row>
    </Col>
</Grid>
    </Container>
      )
    }
  };

const styles = StyleSheet.create({
    box1: {
      backgroundColor: 'white',
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
      backgroundColor: 'white',
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
      backgroundColor: 'white',
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
      backgroundColor: 'white',
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
  }
})

;

export default DashboardContent;