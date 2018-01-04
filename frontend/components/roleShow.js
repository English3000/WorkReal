import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Text, TextInput, Button } from 'react-native';
import { Font } from 'expo';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import ProjectContainer from './projectContainer';
import RealContainer from './realContainer';

export default class roleShowPage extends Component {
  constructor(props) {
    super(props);

    this.state = { fontLoaded: false, realsDropdown: '100%' };
    this.terminateRole = this.terminateRole.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);

    const { work, navigation} = this.props;
    const roleId= Object.values(this.props.work.roles).id
    // console.log(navigation.routes[navigation.index].params);
    // console.log("logging currentRole", work.roles[navigation.routes[navigation.index].params.roleId]);
    if (roleId) {
      this.state = work.roles[roleId];
    } else if (navigation.routes[navigation.index].params) {
      let currentRole = work.roles[navigation.routes[navigation.index].params.roleId];
      this.state = currentRole;
    }
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Amaranth': require('../assets/fonts/Amaranth-Regular.ttf'),
      'FontAwesome': require('../assets/fonts/FontAwesome.otf'),
    });

    this.setState({ fontLoaded: true });

    const {navigation} = this.props;
    const roleId= Object.values(this.props.work.roles).id
    if (roleId) this.setState({ realsDropdown: 0 });
  }

  componentWillReceiveProps(newProps) {
    const { work, navigation } = newProps;

    console.log('Role Show New Props', newProps);
    if (navigation.routes[navigation.index].params) {
      let currentRole = work.roles[navigation.routes[navigation.index].params.roleId];
      this.setState(currentRole);
    }
  }

  toggleDropdown() {
    if (this.state.realsDropdown !== 0) {
      this.state.realsDropdown = 0;
    } else {
      this.state.realsDropdown = '100%';
    }
  }

  terminateRole() { //add modal for role review pre-update
    this.setState({end_date: new Date(Date.now())},
      () => this.props.updateRole(this.state).then(() => this.props.navigation.navigate(`roleForm`))
    );
  }

  render() {
    const { work, reals, navigation, currentUser,
            updateRole, followRole, unfollowRole } = this.props;
    // if (navigation.routes[navigation.index].params) {
      let currentRole = work.roles[navigation.routes[navigation.index].params.roleId];

    if (this.state.fontLoaded && Object.keys(work.roles).length > 0) {
      let roleView = (currentUser.role_ids[0] === this.state.id ? <View style={styles.roleContainer}>
        <Text style={styles.currentRoleView}>Title: <TextInput
          style={{color: 'white'}} defaultValue={`${currentRole.title}`}
          onChangeText={title => this.setState({title})}/></Text>
        <Text style={styles.currentRoleView}>Location: <TextInput
          style={{color: 'white'}} defaultValue={`${currentRole.location}`}
          onChangeText={location => this.setState({location})}/></Text>
        <Text style={styles.currentRoleView}>Started: <TextInput
          style={{color: 'white'}} defaultValue={`${currentRole.start_date}`}
          onDateChange={start_date => this.setState({start_date})}/></Text>
        <Button onPress={() => updateRole(this.state)} title='Update'/>
        <Button onPress={this.terminateRole} title='Terminate'/>
      </View> : <View style={styles.roleContainer}>
        <Text style={styles.currentRoleView}>Title: {currentRole.title}
          {currentUser.follow_ids.include(this.state.id) ?
            <FontAwesome onPress={() => unfollowRole(currentUser.id, this.state.id)}>
              {Icons.star}</FontAwesome> : <FontAwesome style={{color: 'white'}} onPress={() => followRole(this.state.id)}>
          {Icons.star}</FontAwesome>}
        </Text>
        <Text style={styles.currentRoleView}>Location: {currentRole.location}</Text>
        <Text style={styles.currentRoleView}>Started: {currentRole.start_date}</Text>
      </View>);

      return (
        <View style={styles.showPageContainer}>
          <Text style={styles.sectionHeader}>Current Role:</Text>
          <View style={styles.componentContainer}>{roleView}</View>

          <Text style={styles.sectionHeader}>Projects:</Text>
          {this.state.project_ids.map(projectId =>
          <View style={{flex: 1, alignItems: 'center'}} key={`container-${projectId}`}>
            <ProjectContainer style={styles.componentContainer} key={`project-${projectId}`}
                              role={this.state} project={work.projects[projectId]}
                              currentUser={currentUser} onPress={this.toggleDropdown} />

            <View style={{height: this.state.realsDropdown}}>{work.projects[projectId].real_ids.map(realId =>
              <RealContainer key={`real-${realId}`} project={work.projects[projectId]}
                role={this.state} real={reals.by_id[realId]} />
            )}</View>
          </View>)}
        </View>
      );//}
    } else {
      return null;
    }
  }
}

const styles = StyleSheet.create({
  showPageContainer: {
    backgroundColor: 'black',
    // justifyContent: 'center',
    // alignItems: 'flex-start',
    height: '100%',
    width: '100%'
  },
  componentContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%'
  },
  sectionHeader: {
    color: 'white',
    fontSize: 30
  },
  roleContainer: {
    alignItems: 'flex-start',
    borderRadius: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'white',
    padding: 10,
    width: '80%',
    margin: 10
  },
  currentRoleView: {
    color: 'white',
    justifyContent: 'flex-start',
  },
});
