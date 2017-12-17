import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import SearchMapContainer from './searchMapContainer';


// import SearchBar from 'react-native-material-design-searchbar';


export default class NavBar extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = ({
  //     query: ''
  //   });
  //
  // }
  //
  // handlePress(e,query){
  //     e.preventDefault();
  //     this.setState({query: e.target.value });
  //
  // }



  render(){
    const { navigate } = this.props.navigation;
  if (this.props.navigation) {
    return(
      <View style={styles.view}>
        <View>
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => navigate('realsIndex')}>
              <Text style={{fontSize: 20, color: 'white'}}>Home</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => navigate('searchMap')}>
              <Text style={{fontSize: 20, color: 'white'}}>Map</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => navigate('home')}>
              <Text style={{fontSize: 20, color: 'white'}}>Sign Out</Text>
          </TouchableOpacity>
        </View>
       </View>

    );
  } else{
    return null;
  }

  }




}

// onChangeText={(text) => this.setState({ query: text })}
const styles = StyleSheet.create({
  view: {
    // flex: 1,
    // backgroundColor: 'yellow',
    alignItems: 'center',
    // justifyContent: 'center',
    flexDirection: 'row',
    // backgroundColor: 'transparent',
    backgroundColor: 'black',
    justifyContent: 'space-between',
    height: '10%',
    marginTop: 10,
    padding: 20
  },

  navInputs: {
    padding: 10,
    fontSize: 15,
    width: '75%',
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 5,
    color: 'white',
    marginTop: 5,
    height: 10


  },
  buttons:{
    backgroundColor: 'black',
    color: 'white',
    borderWidth: 1,
    borderColor: 'white',
    padding: 5,
    borderRadius: 5
  }
});



// <TextInput
// placeholder='Search by roles, reals, location... '
// style={styles.navInputs}
// underlineColorAndroid={'transparent'}
// onChangeText={(text) => this.setState({ query: text })}
//  />
