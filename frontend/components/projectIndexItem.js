import React, { Component} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import RealForm from './realForm';
import RealIndexItem from './realIndexItem';

class ProjectIndexItem extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    console.log(this.props);
    const { project, createReal, fetchRole, navigate } = this.props;
      return(
        <ScrollView>
          <View style={styles.projectContainer}>
            <Text style={styles.projectText}>Project: {project.project}</Text>
            <Text style={styles.projectText}>Location: {project.location}</Text>
            <Text style={styles.projectText}>Started: {project.start_date}</Text>
          </View>
          <View>
              <Text style={{color: 'white'}}>Reals</Text>
              {project.reals.map(real => <RealIndexItem
                key={`real-${real.id}`}
                real={real}
                fetchRole={fetchRole}
                createReal={createReal} />
            )}
            <RealForm roleId={project.role_id}
              projectId={project.id}
              createReal={createReal}
              navigate={navigate} />
          </View>
        </ScrollView>
      );
    }

    componentWillReceiveProps(nextProps) {

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

export default ProjectIndexItem;
