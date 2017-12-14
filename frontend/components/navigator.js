import React from 'react';
import ReactNavigation from 'react-navigation';
import { StackNavigator } from 'react-navigation';
import entryFormContainer from './entryFormContainer';
import roleFormContainer from './roleFormContainer';
import roleShowContainer from './roleShowContainer';
import realContainer from './realContainer';
import realFormContainer from './realFormContainer';


export default StackNavigator({
    home: {screen: entryFormContainer},
    roleForm: {screen: roleFormContainer},
    roleShow: {
      path: 'role/roleId',
      screen: roleShowContainer
    },
    // realForm: {
    //   path: 'real/projectId',
    //   screen: realFormContainer
    // },
    projectReals: {
      path: 'projectReals/projectId',
      screen: realContainer
    },


});
