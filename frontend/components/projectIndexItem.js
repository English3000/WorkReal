import React, { Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';

class ProjectIndexItem extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    const { project } = this.props;
      return(
        <View style={styles.projectContainer}>
        <Text style={styles.projectView}>Project: {project.project}</Text>
        <Text style={styles.projectView}>Location: {project.location}</Text>
        <Text style={styles.projectView}>Started: {project.start_date}</Text>
        </View>
      );
    }

  }

const styles = StyleSheet.create({
  projectContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'white',
    padding: 10,
    width: '80%',
    margin: 10
  },
  projectView: {
    color: 'green'
  }
});

export default ProjectIndexItem;
