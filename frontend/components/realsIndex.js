import React from 'react';
import { View } from 'react-native';
import RealFormContainer from 'realFormContainer';
import Real from './real';

export default class RealsIndex extends React.Component {
  render() {
    const {reals, roles, projects} = this.props;

    return (<View>
      <RealFormContainer/>
      {reals && reals.all_ids.length > 0 ? reals.all_ids.map(id => {
        const real = reals.by_id[id];

        return <Real key={id} role={roles[real.role_id]}
                     project={projects[real.project_id]} real={real}/>;
      }) : null}
    </View>);
  }
}
