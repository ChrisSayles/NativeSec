import React, { Component } from 'react';
import { StyleSheet } from "react-native";
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Badge } from 'native-base';

export default class FooterComponent extends Component {
  render() {
    return (
      <Container style={componentStyle.container}>
        <Footer style={footerStyle.footer}>
          <FooterTab>
            <Button badge vertical>
              <Badge><Text>2</Text></Badge>
              <Icon name="ios-apps" />
              <Text>Apps</Text>
            </Button>
            <Button vertical>
              <Icon name="ios-alert" />
              <Text>Risks</Text>
            </Button>

            <Button badge vertical>
              <Badge ><Text>51</Text></Badge>
              <Text>Users</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
const componentStyle = StyleSheet.create({
  container: {
    flex: 1,
    width: 400,
  marginTop: 201,
  },
})
const footerStyle = StyleSheet.create({
  footer: {
  backgroundColor: '#dee0e0'
  },
})