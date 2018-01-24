import React, { Component } from 'react';
import { ListView, StyleSheet } from 'react-native';
import { Container, Header, Content, List, ListItem, Text, Separator } from 'native-base';
export default class ListSeparator extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <Separator bordered>
            <Text>HIGH</Text>
          </Separator>
          <ListItem >
            <Text>DDOS</Text>
          </ListItem>
          <ListItem>
            <Text>Admin Changes</Text>
          </ListItem>
          <ListItem last>
            <Text>Multiple IP's</Text>
          </ListItem>
          <Separator bordered>
            <Text>MEDIUM</Text>
          </Separator>
          <ListItem>
            <Text>Copied Folder</Text>
          </ListItem>
          <Separator bordered>
            <Text>Low</Text>
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
      backgroundColor: 'white',
    },
  swipeHeader: {
    flex: 1,
    backgroundColor: 'red',
    marginTop: -100,
    fontSize: 30
},
  swipeHeaderText: {
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: 30
}
})

;