import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Text, TextInput, Button } from 'react-native';
import ProjectIndexItem from './projectIndexItem';
import RealContainer from './realContainer';

export default class roleShowPage extends Component {
  constructor(props) {
    super(props);
    this.terminateRole = this.terminateRole.bind(this);

    const { work, navigation } = this.props;
    console.log(navigation.routes[navigation.index].params);
    console.log("logging currentRole", work.roles[navigation.routes[navigation.index].params.roleId]);
    if (navigation.routes[navigation.index].params) {
      let currentRole = work.roles[navigation.routes[navigation.index].params.roleId];
      this.state = currentRole;
    }
  }

  componentWillReceiveProps(newProps) {
    const { work, navigation } = newProps;
    console.log(navigation.routes[navigation.index].params);
    if (navigation.routes[navigation.index].params) {
      let currentRole = work.roles[navigation.routes[navigation.index].params.roleId];
      this.setState(currentRole);
    }
  }

  terminateRole() {
    this.setState({end_date: new Date(Date.now())},
      () => this.props.updateRole(this.state).then(() => this.props.navigation.navigate(`roleForm`))
    );
  }

  render() {
    const { work, reals, navigation, currentUser, updateRole } = this.props;
    if (navigation.routes[navigation.index].params) {
      let currentRole = work.roles[navigation.routes[navigation.index].params.roleId];

    if (Object.keys(work.roles).length > 0) {
      let roleView = (currentUser.role_ids[0] === this.state.id ? <View style={styles.roleContainer}>
        <TextInput style={styles.currentRoleView} defaultValue={`Title: ${currentRole.title}`}
          onChangeText={title => this.setState({title})}/>
        <TextInput style={styles.currentRoleView} defaultValue={`Location: ${currentRole.location}`}
          onChangeText={location => this.setState({location})}/>
        <TextInput style={styles.currentRoleView} defaultValue={`Started: ${currentRole.start_date}`}
          onDateChange={start_date => this.setState({start_date})}/>
        <Button onPress={() => updateRole(this.state)} title='Update'/>
        <Button onPress={this.terminateRole} title='Terminate'/>
      </View> : <View style={styles.roleContainer}>
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
          {this.state.project_ids.map(projectId =>
          <View style={{flex: 1, alignItems: 'center'}} key={`container-${projectId}`}>
            <ProjectIndexItem style={styles.componentContainer} key={`project-${projectId}`}
                              role={this.state} project={work.projects[projectId]} />

            {work.projects[projectId].real_ids.map(realId =>
              <RealContainer key={`real-${realId}`} project={work.projects[projectId]}
                role={this.state} real={reals.by_id[realId]} />
            )}
          </View>)}
        </View>
      );}
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
