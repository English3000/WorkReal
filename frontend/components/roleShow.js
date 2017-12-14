import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import ProjectIndexItem from './projectIndexItem';

export default class roleShowPage extends Component {
  constructor(props) {
    super(props);
  }

<<<<<<< HEAD
  componentWillMount(nextProps) {
=======
  componentWillMount() {
    // debugger;
>>>>>>> afee45f05e41d8d99d1e8eefea2504184eaf1a32
    this.props.fetchRole(this.props.navigation.state.params.roleId);
  }

  componentWillReceiveProps(nextProps) {
    nextProps.fetchRole(nextProps.navigation.state.params.roleId);
    for(let i = 0; i < nextProps.roles.undefined.data.projects.length; i++){
      if (this.props.roles.undefined.data.projects !== undefined) {
        if (this.props.roles.undefined.data.projects[i]) {
          if ((this.props.roles.undefined.data.projects[i].id === nextProps.roles.undefined.data.projects[i].id)
          && (this.props.roles.undefined.data.projects[i].reals.length !== nextProps.roles.undefined.data.projects[i].reals.length)) {
            nextProps.fetchRole(nextProps.navigation.state.params.roleId);
          }
        }
      } else {
        nextProps.fetchRole(nextProps.navigation.state.params.roleId);
      }
    }
  }


  render() {
    const { navigate } = this.props.navigation;
// NEED TO FIX ROLE STATE - this.props.role.undefined.data.role to access role attributes.
  if (this.props.roles.undefined.data.role) {
    let currentRole = (

      <View style={styles.roleContainer}>
        <Text style={styles.currentRoleView}>Title: {this.props.roles.undefined.data.role.title}</Text>
        <Text style={styles.currentRoleView}>Location: {this.props.roles.undefined.data.role.location}</Text>
        <Text style={styles.currentRoleView}>Started: {this.props.roles.undefined.data.role.start_date}</Text>
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
<<<<<<< HEAD
          {this.props.roles.undefined.data.projects.map(project => <ProjectIndexItem
            key={`project-${project.id}`}
            project={project}
            reals={project.reals}
            navigate={navigate}
            fetchRole={this.props.fetchRole}
            createReal={this.props.createReal} />
=======
          {this.props.roles.undefined.data.role.project_ids.map(projectId => <ProjectIndexItem
            key={`project-${projectId}`}
            project={this.props.roles.undefined.data.projects[projectId]} />
>>>>>>> afee45f05e41d8d99d1e8eefea2504184eaf1a32
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
