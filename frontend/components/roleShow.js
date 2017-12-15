import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import ProjectIndexItem from './projectIndexItem';
import RealContainer from './realContainer';

export default class roleShowPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { work, reals, navigation } = this.props;

    if (Object.keys(work.roles).length > 0) {
      let currentRole = work.roles[navigation.routes[navigation.index].params.roleId];
      let roleView = (<View style={styles.roleContainer}>
          <Text style={styles.currentRoleView}>Title: {currentRole.title}</Text>
          <Text style={styles.currentRoleView}>Location: {currentRole.location}</Text>
          <Text style={styles.currentRoleView}>Started: {currentRole.start_date}</Text>
      </View>);

      return (
        <View style={styles.showPageContainer}>
          <Text style={styles.sectionHeader}>Current Role:</Text>
          <View style={styles.componentContainer}>
            {roleView}
          </View>
          <Text style={styles.sectionHeader}>Projects:</Text>
          {currentRole.project_ids.map(projectId =>
          <View style={{flex: 1, alignItems: 'center'}} key={`container-${projectId}`}>
            <ProjectIndexItem style={styles.componentContainer} key={`project-${projectId}`}
                              project={work.projects[projectId]} />

            {work.projects[projectId].real_ids.map(realId =>
              <RealContainer key={`real-${realId}`} project={work.projects[projectId]}
                role={currentRole} real={reals.by_id[realId]} />
            )}
          </View>)}
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
