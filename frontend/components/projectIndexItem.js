import React, { Component} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import RealForm from './realForm';
import RealIndexItem from './realIndexItem';

export default class ProjectIndexItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { project } = this.props;
    return(<View style={styles.projectContainer}>
      <Text style={styles.projectView}>Project: {project.project}</Text>
      <Text style={styles.projectView}>Location: {project.location}</Text>
      <Text style={styles.projectView}>Started: {project.start_date}</Text>
    </View>);

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
    width: '100%',
    margin: 10
  },
  projectText: {
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
