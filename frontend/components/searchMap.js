import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import MapView from 'react-native-maps';

export default class SearchMap extends Component{
  constructor(props){
    super(props);
    this.state = {
      mapLoaded: false,
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }
    }

  }

  onMapLayout = () => {
    this.setState({mapLoaded: true});

  }



  componentDidMount(){
    navigator.geolocation.getCurrentPosition( (position) => (
        // console.log(position)
        this.setState({
          region: {
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          }

        })

      ));

    }

    // region={this.state.region}
  render(){
    return(
    <View style={styles.view}>
    <MapView style={styles.map}
          initialRegion={this.state.region}
          onLayout={this.onMapLayout}>

          {this.state.mapLoaded &&
            <MapView.Marker
              title="Software Developer"
              coordinate={{
                latitude: this.state.region.latitude,
                longitude: this.state.region.longitude
              }} />
          }




         </MapView>

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


// <MapView.Marker
//   title="Here"
//   coordinate={{
//     latitude: 37.78815,
//     longitude: -123.4324
//   }} />
//
//   <MapView.Marker
//     title="Here"
//     coordinate={{
//       latitude: 37.78815,
//       longitude: -123.4324
//     }} />
//
//     <MapView.Marker
//       title="Here"
//       coordinate={{
//         latitude: 37.7885,
//         longitude: -120.4324
//       }} />



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
