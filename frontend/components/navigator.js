import React from 'react';
import ReactNavigation from 'react-navigation';
import { StackNavigator } from 'react-navigation';
import entryFormContainer from './entryFormContainer';
import roleFormContainer from './roleFormContainer';
import roleShowContainer from './roleShowContainer';
import realContainer from './realContainer';
import realFormContainer from './realFormContainer';
import NavBarContainer from './navBarContainer';
import SearchMapContainer from './searchMapContainer';

import {Text} from 'react-native';


export default StackNavigator({
    // home: {screen: SearchMapContainer},
    home: {screen: entryFormContainer,
      navigationOptions: {
        header: null
      }
    },

    navBar: {screen: NavBarContainer},
    roleForm: {screen: roleFormContainer},
    searchMap: {screen: SearchMapContainer},
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
    }

  },

  {
    navigationOptions: {
    headerTintColor: 'white',
		headerStyle: {
			backgroundColor: 'black',
			height: 15
		},
		// headerRight: (<SearchBarWrapperContainer/>),
		// headerLeft: (<Text style={{color: '#383838', fontSize: 40, fontWeight: 'bold', flex: 1, marginLeft: 20, marginTop: -5}}>WorkReal</Text>)
    header: (<NavBarContainer/>)
  }


});
