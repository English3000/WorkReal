import React from 'react';
import ReactNavigation from 'react-navigation';
import { StackNavigator } from 'react-navigation';
import entryFormContainer from './entryFormContainer';
import roleFormContainer from './roleFormContainer';

const MyStackNavigator = StackNavigator({
    home: {screen: entryFormContainer},
    roleForm: {screen: roleFormContainer}
});

export default MyStackNavigator;
