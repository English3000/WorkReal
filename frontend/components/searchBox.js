import React, {Component} from 'react';
import {Text,TextInput} from 'react-native';
import { View, InputGroup, Input } from "native-base";
import { FontAwesome } from '@expo/vector-icons';

import { Dimensions } from "react-native";

var width = Dimensions.get("window").width;

export default class SearchBox extends Component {
  constructor(props){
    super(props);
    this.state = ({
      query: ''
    })
  }

  // async componentDidMount() {
  //   await Font.loadAsync({
  //     'FontAwesome': require('../assets/fonts/FontAwesome.otf'),
  //   });
  //
  //   this.setState({ fontLoaded: true });
  // }

  render(){
    // console.log(this.state);
    return(
        <View style={styles.searchBox}>
  				<View style={styles.inputWrapper}>
  					<Text style={styles.label}></Text>
  					<InputGroup>
  						<FontAwesome name="search" size={15} color="#FF5E3A"/>
  						<Input
  							style={styles.inputSearch}
  							placeholder="Search Roles, Reals, Industry, ..."
                onChangeText={(text) => this.setState({query: text})}
  						/>
  					</InputGroup>
  				</View>
        </View>

      );

    }

  }



const styles = {
    searchBox:{
        top:0,
        position:"absolute",
        width:width
    },
    inputWrapper:{
        marginLeft:15,
        marginRight:10,
        marginTop:10,
        marginBottom:0,
        backgroundColor:"#fff",
        opacity:0.9,
        borderRadius:7
    },
    secondInputWrapper:{
        marginLeft:15,
        marginRight:10,
        marginTop:0,
        backgroundColor:"#fff",
        opacity:0.9,
        borderRadius:7
    },
    inputSearch:{
        fontSize:14
    },
    label:{
        fontSize:10,
        fontStyle: "italic",
        marginLeft:10,
        marginTop:10,
        marginBottom:0
    }
};
