import React from 'react';
import { Text, Button } from 'react-native';
import ReactNavigation from 'react-navigation';
import { StackNavigator} from 'react-navigation';
import entryFormContainer from './entryFormContainer';
import roleFormContainer from './roleFormContainer';
import roleShowContainer from './roleShowContainer';
import realContainer from './realContainer';
import realFormContainer from './realFormContainer';
import realsIndexContainer from './realsIndexContainer';
import signOut from '../actions/session_actions';

export default StackNavigator({
    home: {
      screen: entryFormContainer,
      navigationOptions: {
        headerLeft: (<Text style={{color: 'white', fontSize: 40, fontWeight: 'bold', flex: 1, marginLeft: 20, marginTop: -5}}>WorkReal</Text>)
      }
    },
    roleForm: {
      screen: roleFormContainer,
      navigationOptions: {
        headerRight: (<Button style={{color: 'white'}} title='logout' onPress={() => signOut()}></Button>),
    		headerLeft: (<Text style={{color: 'white', fontSize: 40, fontWeight: 'bold', flex: 1, marginLeft: 20, marginTop: -5}}>WorkReal</Text>)
      }
    },
    roleShow: {
      path: 'role/roleId',
      screen: roleShowContainer,
      navigationOptions: {
        headerRight: (<Button style={{color: 'white'}} title='logout' onPress={() => signOut()}></Button>),
        headerLeft: (<Text style={{color: 'white', fontSize: 40, fontWeight: 'bold', flex: 1, marginLeft: 20, marginTop: -5}}>WorkReal</Text>)
      }
    },
    realsIndex: {
      screen: realsIndexContainer
    },
    // realForm: {
    //   path: 'real/projectId',
    //   screen: realFormContainer
    // },
    projectReals: {
      path: 'projectReals/projectId',
      screen: realContainer,
      navigationOptions: {
        headerRight: (<Button style={{color: 'white'}} title='logout' onPress={() => signOut()}></Button>),
        headerLeft: (<Text style={{color: 'white', fontSize: 40, fontWeight: 'bold', flex: 1, marginLeft: 20, marginTop: -5}}>WorkReal</Text>)
      }
    },

  }, {
  navigationOptions: {
    headerTintColor: 'white',
		headerStyle: {
			backgroundColor: 'black',
			height: 80
		},
    // sign out doesnt work

  },
});
