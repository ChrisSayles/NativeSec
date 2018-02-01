import React, { Component } from 'react';
import { ListView, StyleSheet, View } from 'react-native';
import { Container, Header, Content, List, ListItem, Text, Separator, SwipeRow, Button, Icon } from 'native-base';
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

// SWIPE CODE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// <View>
//           <Content scrollEnabled={false}>
//           <SwipeRow
//             leftOpenValue={75}
//             rightOpenValue={-75}
//             left={
//               <Button success onPress={() => alert('Add')}>
//                 <Icon active name="add" />
//               </Button>
//             }
//             body={
//               <View>      
//                 <Separator bordered style={styles.swipeHeader}>
//                   <Text style={styles.swipeHeaderText}>"HIGH"</Text>
//                </Separator>
//               <ListItem >
//                 <Text >{riskevent.title}</Text>
//               </ListItem>

//             </View>
//             }
//             right={
//               <Button danger onPress={() => alert('Trash')}>
//                 <Icon active name="trash" />
//               </Button>
//             }
//           />
//         </Content>
//             </View>
// SWIPE CODE END!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

 
    


    const renderErrors = () => data.riskevents.map(riskevent => {
      if(riskevent.appinstance === this.selectedInstance && 
         riskevent.priority === "High" && highCount < 1){
          //highErrors.push(riskevent);  
          highCount++;
          return (
            <View>
            <Separator bordered style={styles.swipeHeader}>
                  <Text style={styles.swipeHeaderText}>"HIGH"</Text>
               </Separator>
          
              <Content scrollEnabled={false}>
          <SwipeRow 
            leftOpenValue={75}
            rightOpenValue={-75}
            left={
              <Button success 
              style={styles.swipeComponentIcon}
              onPress={() => alert('Add')}>
                <Icon style={styles.swipeComponentIcon} active name="add" />
              </Button>
            }
            body={
              <View>      
                
              <ListItem >
                <Text >{riskevent.title}</Text>
              </ListItem>

            </View>
            }
            right={
              <Button danger 
              style={styles.swipeComponentRed}
              onPress={() => alert('Trash')}>
                <Icon style={styles.swipeComponentIcon} active name="trash" />
              </Button>
            }
          />
        </Content>
            </View>
          );
      }
      else if(riskevent.appinstance === this.selectedInstance && 
              riskevent.priority === "Medium" && highCount > 0){
          //mediumErrors.push(riskevent);
        mediumCount++;
          return (
            <View>
            <Separator bordered style={styles.swipeHeader}>
                  <Text style={styles.swipeHeaderText}>"MEDIUM"</Text>
               </Separator>
          
              <Content scrollEnabled={false}>
          <SwipeRow 
            leftOpenValue={75}
            rightOpenValue={-75}
            left={
              <Button success 
              style={styles.swipeComponentIcon}
              onPress={() => alert('Add')}>
                <Icon style={styles.swipeComponentIcon} active name="add" />
              </Button>
            }
            body={
              <View>      
                
              <ListItem >
                <Text >{riskevent.title}</Text>
              </ListItem>

            </View>
            }
            right={
              <Button danger 
              style={styles.swipeComponentRed}
              onPress={() => alert('Trash')}>
                <Icon style={styles.swipeComponentIcon} active name="trash" />
              </Button>
            }
          />
        </Content>
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
                  <Text style={styles.swipeHeaderText}>"LOW"</Text>
               </Separator>
          
              <Content scrollEnabled={false}>
          <SwipeRow 
            leftOpenValue={75}
            rightOpenValue={-75}
            left={
              <Button success 
              style={styles.swipeComponentIcon}
              onPress={() => alert('Add')}>
                <Icon style={styles.swipeComponentIcon} active name="add" />
              </Button>
            }
            body={
              <View>      
                
              <ListItem >
                <Text >{riskevent.title}</Text>
              </ListItem>

            </View>
            }
            right={
              <Button danger 
              style={styles.swipeComponentRed}
              onPress={() => alert('Trash')}>
                <Icon style={styles.swipeComponentIcon} active name="trash" />
              </Button>
            }
          />
        </Content>
            </View>
          );
      }
      else if(riskevent.appinstance === this.selectedInstance && 
              riskevent.priority === "Low" && highCount > 0){
          //mediumErrors.push(riskevent);
        lowCount++;
          return (
            <View>
               <Content scrollEnabled={false}>
          <SwipeRow
            leftOpenValue={75}
            rightOpenValue={-75}
            left={
              <Button success onPress={() => alert('Add')}>
                <Icon active name="add" />
              </Button>
            }
            body={
              <View>      
                <Separator bordered style={styles.swipeHeader}>
                  <Text style={styles.swipeHeaderText}>"LOW"</Text>
               </Separator>
              <ListItem >
                <Text >{riskevent.title}</Text>
              </ListItem>

            </View>
            }
            right={
              <Button danger onPress={() => alert('Trash')}>
                <Icon active name="trash" />
              </Button>
            }
          />
        </Content>
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
      marginTop: -475,
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
    fontWeight: 'bold',
    height: 40
},
  swipeComponentRed: {
    backgroundColor: '#b20000',
    color: 'red',
    fontWeight: 'bold',
    height: 60
},
  swipeComponentIcon: {
    height: 70
},
  swipeComponentHeader: {
    height: 80
},
  swipeComponentIconMedium: {
    height: 170
}
})

;