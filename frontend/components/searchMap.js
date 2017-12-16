import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import MapView from 'react-native-maps';
import SearchBox from './searchBox';

const roles = [{title: 'Solutions Engineer', latitude: 37.790319 , longitude: -122.390203}]


export default class SearchMap extends Component{
  constructor(props){
    super(props);
    this.state = {
      mapLoaded: false,
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.2,
        longitudeDelta: 0.2
      }
    }

  }

  onMapLayout = () => {
    this.setState({mapLoaded: true});

  }



  componentDidMount(){
    navigator.geolocation.getCurrentPosition( (position) => {

        return(this.setState({
          region: {
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          }

        })
      );

      });

    }


  render(){


    return(
      <View style={styles.view}>
      <MapView style={styles.map}
            initialRegion={this.state.region}
            onLayout={this.onMapLayout}>


              <MapView.Marker
                title="Software Developer"
                style={styles.marker_default}
                coordinate={{
                  latitude: this.state.region.latitude,
                  longitude: this.state.region.longitude
                }}
                pinColor={"green"}
                />

                {
                  roles.map((role) => (
                    <MapView.Marker
                      title={role.title}
                      style={styles.marker_default}
                      coordinate={{
                        latitude: role.latitude,
                        longitude: role.longitude
                      }}
                      pinColor={"red"}
                      />



                ))


                }










            </MapView>
            <SearchBox />


      </View>


    );
  }





};


const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },

  map: {
    flex: 1,
    width: '100%',
    height: '100%'

  },

  // radius_defult:{
  //   height: 50,
  //   width: 50,
  //   borderRadius: 50/2,
  //   overflow: 'hidden',
  //   backgroundColor: 'rgba(0,122,255,0.1)',
  //   borderWidth: 1,
  //   borderColor: 'rgba(0,122,255,0.3)',
  //   justifyContent: 'center'
  // },
  //
  // marker_default: {
  //   color: 'blue'
  //
  //
  // }

});


// <View style={styles.view}>
// <MapView style={styles.map}
//       initialRegion={this.state.region}
//       onLayout={this.onMapLayout}>
//
//       {this.state.mapLoaded &&
//         <MapView.Marker
//           title="Software Developer"
//           style={styles.marker_default}
//           coordinate={{
//             latitude: this.state.region.latitude,
//             longitude: this.state.region.longitude
//           }}
//           onPress={() => (
//
//             // this.setState({
//             //   region: {
//             //     latitudeDelta: 60,
//             //     longitudeDelta: 30,
//             //     latitude: this.state.region.latitude,
//             //     longitude: this.state.region.longitude
//             //   }
//             // })
//
//             console.log("mapview")
//
//           )} />
//       }
//
//
//
//
//
//      </MapView>
//
// </View>
// );







// <MapView.Marker
//   title={roles[0].title}
//   style={styles.marker_default}
//   coordinate={{
//     latitude: 37.790319,
//     longitude: -122.390203
//   }}
//   pinColor={"red"}
//   />
