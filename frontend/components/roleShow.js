import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';


class roleShowPage extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    // this.props.fetchRole(this.props.navigation.state.params.roleId);
  }

  render() {
    console.log('DEBUG');
    console.log(this.props.navigation);
    debugger;

    let currentRole = (
      <View>
        {this.props.role.title}
        {this.props.role.location}
        {this.props.role.start_date}
      </View>
    );

    return(
      <View style={styles.showPageContainer}>
        <ScrollView>
          {currentRole}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  showPageContainer: {
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },

  currentRoleView: {

  }
});

export default roleShowPage;
