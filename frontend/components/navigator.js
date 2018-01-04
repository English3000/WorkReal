import React from 'react';
import { Text, Button } from 'react-native';
import ReactNavigation, { StackNavigator} from 'react-navigation';
import entryFormContainer from './entryFormContainer';
import roleFormContainer from './roleFormContainer';
import roleShowContainer from './roleShowContainer';
import realContainer from './realContainer';
import realFormContainer from './realFormContainer';
import NavBarContainer from './navBarContainer';
import SearchMapContainer from './searchMapContainer';
import realsIndexContainer from './realsIndexContainer';
import userShowContainer from './userShowContainer';

export default /*(currentUser) =>*/ StackNavigator({
    home: {screen: /*currentUser ?*/ entryFormContainer /* //: realsIndexContainer*/,
      navigationOptions: {header: null}
    },
    roleForm: {screen: roleFormContainer,
      navigationOptions: {header: null}
    },

    navBar: {screen: NavBarContainer},
    searchMap: {screen: SearchMapContainer},
    userShow: {screen: userShowContainer},
    roleShow: {
      path: 'role/roleId',
      screen: roleShowContainer,
      // navigationOptions: {
        // headerRight: (<Button style={{color: 'white'}} title='logout' onPress={() => signOut()}></Button>),
        // headerLeft: (<Text style={{color: 'white', fontSize: 40, fontWeight: 'bold', flex: 1, marginLeft: 20, marginTop: -5}}>WorkReal</Text>)
      // }
    },
    // realForm: {
    //   path: 'real/projectId',
    //   screen: realFormContainer
    // },
    realsIndex: {
      screen: realsIndexContainer
    },
    projectReals: {
      path: 'projectReals/projectId',
      screen: realContainer
    }
  }, {
  navigationOptions: {
    headerTintColor: 'white',
		headerStyle: {backgroundColor: 'black', height: 15},
		// headerRight: (<SearchBarWrapperContainer/>),
		// headerLeft: (<Text style={{color: '#383838', fontSize: 40, fontWeight: 'bold', flex: 1, marginLeft: 20, marginTop: -5}}>WorkReal</Text>)
    header: navigation => <NavBarContainer navigation={navigation}/>
  }
});
