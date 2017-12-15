import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Text,TextInput } from 'react-native';
// import SearchMapContainer from './searchMapContainer';
// import SearchBar from 'react-native-material-design-searchbar';


export default class NavBar extends Component {
  constructor(props){
    super(props);
    this.state = ({
      query: ''
    });

  }

  handlePress(e,query){
      e.preventDefault();
      this.setState({query: e.target.value });
  }



  render(){
    console.log(this.state.query);
    return(
      <View style={styles.view}>
        <TextInput
        placeholder='Search by roles, reals, location... '
        style={styles.navInputs}
        underlineColorAndroid={'transparent'}
        onChangeText={(text) => this.setState({ query: text })}
         />

       </View>

    );
  }




}

// onChangeText={(text) => this.setState({ query: text })}
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
