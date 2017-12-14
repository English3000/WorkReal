import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import ProjectIndexItem from './projectIndexItem';

export default class roleShowPage extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchRole(this.props.navigation.state.params.roleId);
  }

  render() {
    console.log(this.props);
// NEED TO FIX ROLE STATE - this.props.role.undefined.data.role to access role attributes.
  if (Object.keys(this.props.roles).length > 0) {
    let currentRole = (
      <View style={styles.roleContainer}>
        <Text style={styles.currentRoleView}>Title: {this.props.roles[this.props.currentUser.role_ids[0]].title}</Text>
        <Text style={styles.currentRoleView}>Location: {this.props.roles[this.props.currentUser.role_ids[0]].location}</Text>
        <Text style={styles.currentRoleView}>Started: {this.props.roles[this.props.currentUser.role_ids[0]].start_date}</Text>
      </View>
    );

    return(
      <View style={styles.showPageContainer}>
        <Text style={styles.sectionHeader}>Current Role:</Text>
        <View style={styles.componentContainer}>
          {currentRole}
        </View>
        <Text style={styles.sectionHeader}>Projects:</Text>
        <View style={styles.componentContainer}>
          {this.props.roles.project_ids.map(projectId => <ProjectIndexItem
            key={`project-${projectId}`}
            project={this.props.roles.projects[projectId]} />
          )}
        </View>
      </View>
    );
  } else {
    return null;
  }
  }
}

const styles = StyleSheet.create({
  showPageContainer: {
    backgroundColor: 'black',
    // justifyContent: 'center',
    // alignItems: 'flex-start',
    height: '100%',
    width: '100%'
  },
  componentContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%'
  },
  sectionHeader: {
    color: 'white',
    fontSize: 30
  },
  roleContainer: {
    alignItems: 'flex-start',
    borderRadius: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'white',
    padding: 10,
    width: '80%',
    margin: 10
  },
  currentRoleView: {
    color: 'white',
    justifyContent: 'flex-start',
  },
});
