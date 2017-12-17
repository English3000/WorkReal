import React from 'react';
import { Text, Button } from 'react-native';
import ReactNavigation from 'react-navigation';
import { StackNavigator} from 'react-navigation';
import entryFormContainer from './entryFormContainer';
import roleFormContainer from './roleFormContainer';
import roleShowContainer from './roleShowContainer';
import realContainer from './realContainer';
import realFormContainer from './realFormContainer';
import NavBarContainer from './navBarContainer';
import SearchMapContainer from './searchMapContainer';
import realsIndexContainer from './realsIndexContainer';


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
    header: (navigation) => (
      <NavBarContainer
      navigation={navigation}/>
    )
  }

  }

);
