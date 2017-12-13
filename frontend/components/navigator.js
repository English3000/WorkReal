import React from 'react';
import ReactNavigation from 'react-navigation';
import { StackNavigator } from 'react-navigation';
import entryFormContainer from './entryFormContainer';
import roleFormContainer from './roleFormContainer';
import roleShowContainer from './roleShowContainer';

export default StackNavigator({
    home: {screen: entryFormContainer},
    roleForm: {screen: roleFormContainer},
    roleShow: {
      path: 'role/roleId',
      screen: roleShowContainer
    },

});
