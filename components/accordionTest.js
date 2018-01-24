import React, { Component } from 'react';
import { ListView, StyleSheet } from 'react-native';
import FontAwesome from 'react-fontawesome';
import { Container, Header, Content, Button, Icon, List, ListItem, Text, Alert, AppRegistry, Platform, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'native-base';
const datas = [
  'High Risk',
  'Medium Risk',
  'Low Risk',
];

const test = 
{"Threats": "",  
 "High": 
    {
      "lastname": "Doe",
      "firstname": "Jane"
    },
"Medium": 
    {
      "lastname": "Smith",
      "firstname": "Jane"
    },
"Low": 
    {
      "lastname": "Kennedy",
      "firstname": "Karen"
    }
 }




export default class SwipeTouch extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      basic: true,
      listViewData: datas,
    };
  }
  deleteRow(secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].props.closeRow();
    const newData = [...this.state.listViewData];
    newData.splice(rowId, 1);
    this.setState({ listViewData: newData });
  }

    _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  _onLongPressButton() {
    Alert.alert('You long-pressed the button!')
  }

  
  render() {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    return (
      <Container style={styles.container}>
        <Header style={styles.swipeHeader} >
          <Text style={styles.swipeHeaderText}>AWS RISK</Text>
        </Header>
        <Content>
          <List
            dataSource={this.ds.cloneWithRows(this.state.listViewData)}
            renderRow={data =>
              <ListItem>
              <Button style={styles.buttonBackground} full onPress={() => alert (test.High.firstname)}>
                <Text style={styles.textColor}> {data} </Text>
              </Button>
              </ListItem>}


              renderLeftHiddenRow={data =>
              <Button full onPress={() => alert(data)}>
                <Icon active name="information-circle" />
              </Button>}
            renderRightHiddenRow={(data, secId, rowId, rowMap) =>
              <Button full danger onPress={_ => this.deleteRow(secId, rowId, rowMap)}>
                <Icon active name="trash" />
              </Button>}
            leftOpenValue={75}
            rightOpenValue={-75}
          />
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: 375,
      height: 800,
      marginTop: -200,
      backgroundColor: '#324b5c',
    },
  swipeHeader: {
    flex: 1,
    backgroundColor: '#f80000',
    marginTop: -100,
},
  swipeHeaderText: {
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    height: 40,

},
  buttonBackground: {
    backgroundColor: 'white',

  },
  textColor: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    width: 375,
    textAlign: 'center',
  }
})

;