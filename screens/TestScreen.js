

import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Badge, View} from 'native-base';

export default class DashboardVisualComponent extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Content >
          <Card style={styles.margins}>
            <CardItem header style={styles.cardHeader}>
              <Text>Users with the most failed logins:</Text>
            </CardItem>
            <CardItem style={styles.cardStyle}>
              <Body>
              <View style={styles.row}>
                <Text>
                  Mary.Baker@Oracle.com
                </Text>
                <Badge style={styles.buttonSize}>
                <Text style={{ color: 'white', marginLeft: 25 }}>43</Text>
                </Badge>
              </View>
              <View style={styles.row}>
                <Text>
                  Jane.Smith@Oracle.com
                </Text>
                <Badge style={styles.buttonSizeYellow}>
                <Text style={{ color: 'white', marginLeft: 25 }}>38</Text>
                </Badge>
              </View>
              <View style={styles.row}>
                <Text>
                  Willy.Prince@Oracle.com
                </Text>
                <Badge style={styles.buttonSizeGreen}>
                <Text style={{ color: 'white', marginLeft: 25 }}>17</Text>
                </Badge>
              </View>
              </Body>
            </CardItem>
         </Card>
         <Card style={styles.margins}>
            <CardItem header style={styles.cardHeader}>
              <Text>Suspicious and normal IP addresses:</Text>
            </CardItem>
            <CardItem style={styles.cardStyle}>
              <Body>
              <View style={styles.row}>
                <Image source={{uri: 'https://www.oracle.com/us/assets/cw20v1-snapshot-4-3497453.jpg'}} style={{height: 250, width: 330, flex: 0}}/>
              </View>
              </Body>
            </CardItem>
         </Card>
         <Card style={styles.margins}>
            <CardItem header style={styles.cardHeader}>
              <Text>Map View:</Text>
            </CardItem>
            <CardItem style={styles.cardStyle}>
              <Body>
              <View style={styles.row}>
                <Image source={{uri: 'https://www.oracle.com/us/assets/cw20v1-investigate-3-3497451.jpg'}} style={{height: 250, width: 330, flex: 0}}/>
              </View>
              </Body>
            </CardItem>
         </Card>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 0,
      width: 380,
      height: 800,
      marginBottom: 60,
      backgroundColor: '#dee0e0',
  }, 
  margins: {
    marginTop: 10
  },
  cardHeader: {
    flex:1,
    backgroundColor: '#687785',
    textAlign: 'center',
    justifyContent: 'center',
  },
  cardStyle: {
    flex: 1,
    backgroundColor: '#687785',
    backgroundColor: '#687785',
    flexDirection: "row"
  },
  row: {
    flex:1,
    backgroundColor: '#687785',
    flexDirection: "row",
    paddingBottom: 10
  },
  dashboardFooter: {
    flex:0,
    backgroundColor: '#687785',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dashboardFooterText: {
    flex:1,
    backgroundColor: '#ea272f',
    textAlign: 'center',
    justifyContent: 'center',
    height: 70,
  },
  dashboardFooterTextSize: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  buttonSize: {
    height: 22,
    flexDirection: 'row',
    width: 100,
    marginLeft: 10,
  },
  buttonSizeYellow: {
    height: 22,
    flexDirection: 'row',
    width: 100,
    marginLeft: 10,
    backgroundColor: 'orange'
  },
  buttonSizeGreen: {
    height: 22,
    flexDirection: 'row',
    width: 100,
    marginLeft: 10,
    backgroundColor: 'green'
  }
});