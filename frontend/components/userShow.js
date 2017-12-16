import React from 'react';
import RoleShowContainer from './roleShowContainer';

export default class UserShow {
  render() {
    //include navbar w/ icon to RealsIndex
    return this.props.currentUser.role_ids.map(
      roleId => <RoleShowContainer roleId={roleId}/>
    );
  }
}
