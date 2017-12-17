import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import MapView from 'react-native-maps';
import SearchBox from './searchBox';

const roles = [
  {title: 'Solutions Engineer', description: 'Fixing bugs all day. Sucks.', latitude: 37.790319 , longitude: -122.390203},
  {title: 'Barista', description: 'Seeing Customers happy makes my day', latitude: 37.791393, longitude: -122.392242},
  {title: 'Chef', description: 'Wow, I just got a $100 tip !!!',   latitude: 37.798434, longitude: -122.404512 },
  {title: 'Software Engineer', description: 'My program works in O(N^2) time. What do??', latitude: 37.802471, longitude: -122.405835},
  {title: 'Doctor', description: 'Booo another 24 hour shift :( ',latitude: 37.767230, longitude: -122.391271},
  {title: 'Research Doctor', description: 'I love Research Medicine', latitude: 37.767391, longitude: -122.392228},
  {title: 'Assembly Member', description: 'Should I vote to repeal Net Neutrality??', latitude: 37.779300, longitude: -122.419409},
  {title: 'Chamber Member', description: 'You are a corporate shill', latitude: 37.779682, longitude: -122.419711},
  {title: 'Supervisor District X', description: 'Those campaigns aint goanna pay for themselves',latitude: 37.779667, longitude: -122.419008},

  {title: 'U.S. Army Staff Sgt', description: 'Hooooooooah', latitude: 37.775695, longitude: -122.417957},
  {title: 'Toll Collector', latitude:37.789366, longitude: -122.387338},
  {title: 'Fisherman', description: 'Clam Chowder', latitude: 37.810930, longitude: -122.410592},
  {title: 'Academic Professor', description: '3+3-1 = 4. Quick Maths', latitude: 37.722943, longitude: -122.477656},
  {title: 'Muni Driver', description: 'California has the worst Drivers', latitude: 37.792817, longitude: -122.396959}

]


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
                description="I hate Coding"
                style={styles.marker_default}
                coordinate={{
                  latitude: this.state.region.latitude,
                  longitude: this.state.region.longitude
                }}
                pinColor={"green"}
                />

                {
                  roles.map((role,idx) => (
                    <MapView.Marker
                      title={role.title}
                      key={idx}
                      description={role.description}
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
    backgroundColor: 'black',
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
