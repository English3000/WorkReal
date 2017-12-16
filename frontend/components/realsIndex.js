import React from 'react';
import { View, Picker, ScrollView, StyleSheet } from 'react-native';
// import RealFormContainer from './realFormContainer';
import RealForm from './realForm';
import RealContainer from './realContainer';


export default class RealsIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = { project: ((props.reals.projects)? Object.values(props.reals.projects)[0] : '') };
  }

  componentWillMount() {
    //upon sign-in
    this.props.getAllReals();
    //upon search query

  }
  //
  // componentDidMount() {
  //   this.props.getAllReals();
  // }

  render() {
    const {reals, createReal} = this.props;
    let projects = reals.projects;
    if (projects) {
      let projectsArray = Object.values(projects);
      let roles = reals.roles;
      let pickerArray = [];
      projectsArray.map( (project, idx) =>
      pickerArray.push(<Picker.Item label={`${project.project}`} value={project} key={`project-${project.id}`} />)
    );

      return (
      <View style={{backgroundColor: 'gray', height: '100%'}}>
        <View style={styles.picker}>
          <Picker style={{color: 'white'}} pickerStyleType={{color: 'white'}} selectedValue={this.state.project} onValueChange={(project) => this.setState({project})} mode='dropdown'>
            { pickerArray }
          </Picker>
        </View>
        <View style={styles.formContainer}>
          <RealForm project={Object.values(this.props.reals.projects)[0]} projectId={this.state.project.id} roleId={this.state.project.role_id} createReal={createReal} />
        </View>
        <ScrollView style={styles.scroll}>
          { (Object.keys(reals).length > 0 && reals.all_ids.length > 0) ? reals.all_ids.map(id => {
            const real = reals.by_id[id];
            return <RealContainer key={id} role={roles[real.role_id]}
              project={projects[real.project_id]} real={real}/>;}) : null}
        </ScrollView>
    </View>
  );
  } else {
    return null;
  }
  }
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1
  },
  picker: {
    flex: 0
  },
  formContainer: {
    flex: 1
  }
});
