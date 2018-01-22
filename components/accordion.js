import React, { Component } from 'react';
import { ListView, StyleSheet } from 'react-native';
import { Container, Header, Content, Button, Icon, List, ListItem, Text } from 'native-base';
const datas = [
  'High Risk',
  'Medium Risk',
  'Low Risk'
];
export default class SwipeableList extends Component {
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
  render() {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    return (
      <Container style={styles.container}>
        <Header style={styles.swipeHeader} >
          <Text>Instance Type</Text>
        </Header>
        <Content>
          <List
            dataSource={this.ds.cloneWithRows(this.state.listViewData)}
            renderRow={data =>
              <ListItem>
                <Text> {data} </Text>
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
      backgroundColor: '#000000',
    },
  swipeHeader: {
    flex: 1,
    backgroundColor: '#f80000',
    height: 400,
    marginTop: -100,
}
})

;