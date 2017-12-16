import React, {Component} from 'react';
import {View,Text,TextInput} from 'react-native';
import Icon from "react-native-vector-icons";

export default class SearchBox extends Component {
  render(){

    return(
      <View>
        <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        placeholder="Location">
        </TextInput>

      </View>

    );

  }


}
