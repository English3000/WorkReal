import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import SearchMapContainer from './searchMapContainer';
import { Font } from 'expo';
import FontAwesome, { Icons } from 'react-native-fontawesome';

// import SearchBar from 'react-native-material-design-searchbar';


export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {fontLoaded: false};
  }

  async componentDidMount() {
    await Font.loadAsync({
      'FontAwesome': require('../assets/fonts/FontAwesome.otf'),
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    const { navigate } = this.props.navigation;
    if (this.props.navigation) {
      return (<View style={styles.view}>
          <View><TouchableOpacity onPress={() => navigate('realsIndex')}>
              <FontAwesome style={{fontSize: 25, color: 'white'}}>{Icons.home}</FontAwesome>
          </TouchableOpacity></View>

          <View><TouchableOpacity onPress={() => navigate('searchMap')}>
              <FontAwesome style={{fontSize: 25, color: 'white'}}>{Icons.map}</FontAwesome>
          </TouchableOpacity></View>

          <View><TouchableOpacity onPress={() => navigate('home')}>
              <FontAwesome style={{fontSize: 25, color: 'white'}}>{Icons.signOut}</FontAwesome>
          </TouchableOpacity></View>
      </View>);
    } else { return null; }
  }
}

// onChangeText={(text) => this.setState({ query: text })}
const styles = StyleSheet.create({
  view: {
    // backgroundColor: 'yellow',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'black',
    justifyContent: 'space-between',
    height: '10%',
    padding: 20,
    paddingTop: 40,
    paddingBottom: 15
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
