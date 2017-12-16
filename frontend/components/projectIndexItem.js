import React, { Component} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import RealForm from './realForm';
import RealIndexItem from './realIndexItem';

export default class ProjectIndexItem extends Component {
  constructor(props) {
    super(props);
    this.state = props.project;
    this.terminateProject = this.terminateProject.bind(this);
  }

  terminateProject() { //create ProjectForm (same layout as RoleForm w/ a few diff. fields)
    this.setState({end_date: new Date(Date.now())},
      () => /* make modal appear to rate & review .then() */ this.props.updateProject(this.state).then(() => this.props.navigation.navigate('projectForm'))
    );
  }

  render() {
    const { project, role, updateProject, currentUser } = this.props;
    return (currentUser.role_ids[0] === project.role_id && !project.end_date ? 
    <View style={styles.projectContainer}><Text>
      <TextInput style={styles.projectView} defaultValue={`Project: ${project.project}`}
        onChangeText={revProject => this.setState({ project: revProject })}/>
      <TextInput style={styles.projectView} defaultValue={`Location: {project.location}`}
        onChangeText={location => this.setState({location})}/>
      <TextInput style={styles.projectView} defaultValue={`Started: {project.start_date}`}
        onDateChange={start_date => this.setState({start_date})}/>
      <Button onPress={() => updateProject(this.state)} title='Update'/>
      <Button onPress={this.terminateProject} title='Terminate'/>
    </Text></View> : <View style={styles.projectContainer}><Text>
      <Text style={styles.projectView}>Project: {project.project}</Text>
      <Text style={styles.projectView}>Location: {project.location}</Text>
      <Text style={styles.projectView}>Started: {project.start_date}</Text>
    </Text></View>);
  }
}

const styles = StyleSheet.create({
  projectContainer: {
    alignItems: 'flex-start',
    borderRadius: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'white',
    padding: 10,
    width: '80%',
    margin: 10
  },
  projectView: {
    color: 'white'
  },
  realContainer: {
    borderRadius: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'white',
    width: '80%',
    margin: 10
  },
  realText: {
    color: 'white'
  }
});
