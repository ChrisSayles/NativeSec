import React, { Component } from 'react';
import { ListView, StyleSheet } from 'react-native';
import { Container, Header, Content, List, ListItem, Text, Separator } from 'native-base';
export default class ListSeparator extends Component {


  constructor(props) {
    super(props);
    this.selectedInstance = this.props.clickedInstance; 
  }

  render() {
    //console.log("List seperator: " + this.props.clickedInstance);
    console.log("List seperator: " + this.selectedInstance);

    return (
      <Container style={styles.container}>
        <Content>
          <Separator bordered style={styles.swipeHeader}>
            <Text style={styles.swipeHeaderText}>HIGH</Text>
          </Separator>
          <ListItem >
            <Text >DDOS</Text>
          </ListItem>
          <ListItem>
            <Text>Admin Changes</Text>
          </ListItem>
          <ListItem last>
            <Text>Multiple IP's</Text>
          </ListItem>
          <Separator bordered style={styles.swipeHeader}>
            <Text style={styles.swipeHeaderText}>MEDIUM</Text>
          </Separator>
          <ListItem>
            <Text>Copied Folder</Text>
          </ListItem>
          <Separator bordered style={styles.swipeHeader}>
            <Text style={styles.swipeHeaderText}>LOW</Text>
          </Separator>
          <ListItem last>
            <Text>Invalid Password</Text>
          </ListItem>
          <ListItem last>
            <Text>Changed Password</Text>
          </ListItem>

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
      marginTop: -340,
      backgroundColor: '#809ab0',
    },
  swipeHeader: {

    backgroundColor: '#687785',
    color: 'white',
    fontWeight: 'bold'

},
  swipeHeaderText: {
    backgroundColor: '#687785',
    color: 'white',
    fontWeight: 'bold'
}
})

;