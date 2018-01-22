import React, { Component } from "react";
import { Platform, StyleSheet } from "react-native";
import { Container, Header, Title, Content, Button, Icon, Text, Right, Body, Left, Picker, Form, Item as FormItem } from "native-base";
const Item = Picker.Item;

export default class PickCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected2: undefined
    };
  }
  onValueChange2(value: string) {
    this.setState({
      selected2: value
    });
  }
  render() {
    return (
      <Container style={styles.container}>
        <Header style={styles.categoryStyle}>
        <Content>
          <Form style={styles.alignText}>
            <Picker
              mode="dropdown"
              placeholderTextColor = "red"
              placeholder="Click a Risk Type"
              selectedValue={this.state.selected2}
              onValueChange={this.onValueChange2.bind(this)}
            >
              <Item label="User" value="key0" />
              <Item label="Suspicious Activity" value="key1" />
              <Item label="Low Level Risks" value="key2" />
              <Item label="Medium Level Risks" value="key3" />
              <Item label="High Level Risks" value="key4" />
            </Picker>
          </Form>
        </Content>
        </Header>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: 400,
      backgroundColor: '#000000',
      marginTop: 10,
      marginBottom: 20,
      height:20
    },
  categoryStyle: {
    backgroundColor: '#dee0e0',
    alignItems: 'center'
  },
  alignText: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
}
})
;