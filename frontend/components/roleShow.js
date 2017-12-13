import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';


export default class roleShowPage extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchRole(this.props.navigation.state.params.roleId);
  }

  render() {
    console.log(this.props.role.undefined.data);
    let currentRole = (
      <View>
        <Text>{this.props.role.undefined.data.role.title}</Text>
        <Text>{this.props.role.undefined.data.role.location}</Text>
        <Text>{this.props.role.undefined.data.role.start_date}</Text>
      </View>
    );
// NEED TO FIX ROLE STATE - this.props.role.undefined.data.role to access role attributes.
    return(
      <View style={styles.showPageContainer}>
          <View>
            <Text style={styles.currentRoleView}>{this.props.role.undefined.data.role.title}</Text>
            <Text style={styles.currentRoleView}>{this.props.role.undefined.data.role.location}</Text>
            <Text style={styles.currentRoleView}>{this.props.role.undefined.data.role.start_date}</Text>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  showPageContainer: {
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },

  currentRoleView: {
    color: 'white'
  }
});
