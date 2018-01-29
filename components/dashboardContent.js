import React, { Component } from 'react';
import {
	View,
	StyleSheet,
  Image
} from 'react-native';
import { Text, Container, Header } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";




class DashboardContent extends Component{
	render(){
		return (
		<Container style={styles.container}>
      <Header style={styles.header}>
        <Text style={styles.headerText}>HOME</Text>
      </Header>
			<Grid>
    <Col>
        <Row style={styles.box1}>
            <Image style={styles.dashboardImg}
            source={require('../assets/dashboard.png')}
            />
        </Row>
        <Row style={styles.box2}>
            <Image style={styles.dashboardImg}
            source={require('../assets/cloud.png')}
            />
        </Row>
    </Col>
    <Col>
        <Row style={styles.box3}>
          <Image style={styles.dashboardImg}
            source={require('../assets/riskevents.png')}
            />
        </Row>
        <Row style={styles.box4}>
            <Image style={styles.dashboardImg}
            source={require('../assets/folder.png')}
            />
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
    },
    box2: {
      backgroundColor: 'white',
      width: 200,
      justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'grey',
    borderLeftWidth:0
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
    },
    box4: {
      backgroundColor: 'white',
      width: 200,
      justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'grey'
    },
    dashboardImg: {
      height: 150,
      width: 155,
    },
  container: {
  	flex: 0,
    width: 370,
    height: 560
},
  header: {
    backgroundColor: '#000040',
    width: 390,
},
  headerText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold'

}
})

;

export default DashboardContent;