import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import MapView from 'react-native-maps';

export default class SearchMap extends Component{
  constructor(props){
    super(props);
    this.state = {
      mapLoaded: false
    }
  }

  componentWillMount(){

  }

  render(){
    return(
    <View style={styles.view}>
      <Text> Inside SearchMap </Text>
    </View>
    );
  }





};


const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },

  map: {
    flex: 1,
    width: '100%',
    height: '100%'

  }

});



// return(
//    <View style={styles.view}>
//       <MapView style={styles.map}
//      initialRegion={{
//        latitude: 37.78825,
//        longitude: -122.4324,
//        latitudeDelta: 0.0922,
//        longitudeDelta: 0.0421,
//      }}>
//
//         <MapView.Marker
//           title="Here"
//           coordinate={{
//             latitude: 37.78825,
//             longitude: -122.4324
//           }} />
//
//
//      </MapView>
//
//
//
//    </View>
// )
