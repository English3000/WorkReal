import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Text,TextInput } from 'react-native';
// import SearchMapContainer from './searchMapContainer';
// import SearchBar from 'react-native-material-design-searchbar';


export default class NavBar extends Component {
  render(){
    return(
      <View style={styles.view}>
        <TextInput
        placeholder='Search by roles, reals, location... '
        style={styles.navInputs}
        underlineColorAndroid={'transparent'}
         />

       </View>

    );
  }




}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    // backgroundColor: 'yellow',
    alignItems: 'center',
    // justifyContent: 'center',
    flexDirection: 'row'
  },

  map: {
    flex: 1,
    width: '100%',
    height: '100%'

  },

  navInputs: {
    padding: 10,
    fontSize: 15,
    width: '75%',
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 5,
    color: 'white',
    marginTop: 10
  }

})
