import React from 'react';
import { View, Picker } from 'react-native';
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

  componentDidMount() {
    this.props.getAllReals();
  }

  render() {
    const {reals, createReal} = this.props;
    let projects = reals.projects;
    if (projects) {
      projects = Object.values(projects);
      let roles = reals.roles;
      let pickerArray = [];
      projects.map( (project, idx) =>
      pickerArray.push(<Picker.Item label={`${project.project}`} value={project} key={`project-${project.id}`} />)
    );

      return (
      <View style={{backgroundColor: 'gray', height: '100%'}}>
        <View>
          <Picker style={{color: 'white'}} pickerStyleType={{color: 'white'}} selectedValue={this.state.project} onValueChange={(project) => this.setState({project})} mode='dropdown'>
            { pickerArray }
          </Picker>
        </View>
          <RealForm projectId={this.state.project.id} roleId={this.state.project.role_id} createReal={createReal} />

        { (Object.keys(reals).length > 0 && reals.all_ids.length > 0) ? reals.all_ids.map(id => {
        const real = reals.by_id[id];
         return <RealContainer key={id} role={roles[real.role_id]}
                     project={projects[real.project_id]} real={real}/>;}) : null}
    </View>
  );
  } else {
    return null;
  }
  }
}
