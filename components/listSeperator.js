import React, { Component } from 'react';
import { ListView, StyleSheet, View } from 'react-native';
import { Container, Header, Content, List, ListItem, Text, Separator } from 'native-base';
import data from './customData.json';



export default class ListSeparator extends Component {


  constructor(props) {
    super(props);
    this.selectedInstance = this.props.clickedInstance; 
  }

  render() {

    let highCount = 0;
    let mediumCount = 0;
    let lowCount = 0;




    


    const renderErrors = () => data.riskevents.map(riskevent => {
      if(riskevent.appinstance === this.selectedInstance && 
         riskevent.priority === "High" && highCount < 1){
          //highErrors.push(riskevent);  
          highCount++;
          return (
            <View>
              <Separator bordered style={styles.swipeHeader}>
                <Text style={styles.swipeHeaderText}>HIGH</Text>
              </Separator>
              <ListItem >
                <Text >{riskevent.title}</Text>
              </ListItem>
            </View>
          );
      }
      else if(riskevent.appinstance === this.selectedInstance && 
              riskevent.priority === "High" && highCount > 0){
          //mediumErrors.push(riskevent);
        highCount++;
          return (
            <View>
              <ListItem >
                <Text >{riskevent.title}</Text>
              </ListItem>
            </View>
          );
      }
      else if(riskevent.appinstance === this.selectedInstance && 
         riskevent.priority === "Medium" && highCount < 1){
          //highErrors.push(riskevent);  
          mediumCount++;
          return (
            <View>
              <Separator bordered style={styles.swipeHeader}>
                <Text style={styles.swipeHeaderText}>MEDIUM</Text>
              </Separator>
              <ListItem >
                <Text >{riskevent.title}</Text>
              </ListItem>
            </View>
          );
      }
      else if(riskevent.appinstance === this.selectedInstance && 
              riskevent.priority === "Medium" && highCount > 0){
          //mediumErrors.push(riskevent);
        mediumCount++;
          return (
            <View>
              <ListItem >
                <Text >{riskevent.title}</Text>
              </ListItem>
            </View>
          );
      }
      else if(riskevent.appinstance === this.selectedInstance && 
         riskevent.priority === "Low" && highCount < 1){
          //highErrors.push(riskevent);  
          lowCount++;
          return (
            <View>
              <Separator bordered style={styles.swipeHeader}>
                <Text style={styles.swipeHeaderText}>LOW</Text>
              </Separator>
              <ListItem >
                <Text >{riskevent.title}</Text>
              </ListItem>
            </View>
          );
      }
      else if(riskevent.appinstance === this.selectedInstance && 
              riskevent.priority === "Low" && highCount > 0){
          //mediumErrors.push(riskevent);
        lowCount++;
          return (
            <View>
              <ListItem >
                <Text >{riskevent.title}</Text>
              </ListItem>
            </View>
          );
      }
      
    });



    //console.log("List seperator: " + this.props.clickedInstance);
    console.log("List seperator: " + this.selectedInstance);

    return (
      <Container style={styles.container}>
        <Content>
          {renderErrors()}
        </Content>
      </Container>
    );


    // return (
    //   <Container style={styles.container}>
    //     <Content>
    //       <Separator bordered style={styles.swipeHeader}>
    //         <Text style={styles.swipeHeaderText}>HIGH</Text>
    //       </Separator>
    //       <ListItem >
    //         <Text >DDOS</Text>
    //       </ListItem>
    //       <ListItem>
    //         <Text>Admin Changes</Text>
    //       </ListItem>
    //       <ListItem last>
    //         <Text>Multiple IP's</Text>
    //       </ListItem>
    //       <Separator bordered style={styles.swipeHeader}>
    //         <Text style={styles.swipeHeaderText}>MEDIUM</Text>
    //       </Separator>
    //       <ListItem>
    //         <Text>Copied Folder</Text>
    //       </ListItem>
    //       <Separator bordered style={styles.swipeHeader}>
    //         <Text style={styles.swipeHeaderText}>LOW</Text>
    //       </Separator>
    //       <ListItem last>
    //         <Text>Invalid Password</Text>
    //       </ListItem>
    //       <ListItem last>
    //         <Text>Changed Password</Text>
    //       </ListItem>

    //     </Content>
    //   </Container>
    // );
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