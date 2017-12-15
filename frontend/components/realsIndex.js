import React from 'react';
import { View } from 'react-native';
import RealFormContainer from 'realFormContainer';
import RealContainer from './realContainer';

export default class RealsIndex extends React.Component {
  componentWillMount() {
    //upon sign-in
    this.props.getAllReals();

    //upon search query

  }

  render() {
    const {reals, roles, projects} = this.props;

    return (<View>
      <RealFormContainer/>
      {Object.keys(reals).length > 0 && reals.all_ids.length > 0 ? reals.all_ids.map(id => {
        const real = reals.by_id[id];

        return <RealContainer key={id} role={roles[real.role_id]}
                     project={projects[real.project_id]} real={real}/>;
      }) : null}
    </View>);
  }
}
