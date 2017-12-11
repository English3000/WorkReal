import React from 'react';
import { View } from 'react-native';
import RealFormContainer from 'realFormContainer';
import Real from './real';

export default class RealsIndex extends React.Component {
  componentDidMount() {
    //upon sign-in
    this.props.getAllReals();

    //upon search query

    //on Role Show Page
  }

  render() {
    const {reals, roles, projects, createTruth, deleteTruth} = this.props;

    return (<View>
      <RealFormContainer/> {/* refactor to RealsIndexPage */}
      {reals && reals.all_ids.length > 0 ? reals.all_ids.map(id => {
        const real = reals.by_id[id];

        return <Real key={id} role={roles[real.role_id]}
                     project={projects[real.project_id]} real={real}
                     truth={createTruth} untruth={deleteTruth}/>;
      }) : null}
    </View>);
  }
}
