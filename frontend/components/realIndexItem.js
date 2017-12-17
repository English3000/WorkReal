import React, { Component} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import RealForm from './realForm';

class RealIndexItem extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.length !== nextProps.length) {
      this.props.fetchRole(this.props.real.role_id);
    }
  }

  render(){
    const { real, createReal } = this.props;
    // console.log(real);
    if (real.body) {
      return(
        <View style={styles.realContainer}>
        <Text style={styles.realText}>{real.body}</Text>
        </View>
      );
    } else {
      return null;
    }
    }

  }

const styles = StyleSheet.create({
  realContainer: {
    borderRadius: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'white',
    width: '80%',
    margin: 10
  },
  realText: {
    color: 'white',
    fontSize: 20,
  }
});

export default RealIndexItem;
