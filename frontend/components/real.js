import React from 'react';[]
import { View, Text, StyleSheet } from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import { Font } from 'expo';

export default class Real extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fontLoaded: false };
  }

  async componentDidMount() {
    await Font.loadAsync({
      'FontAwesome': require('../assets/fonts/FontAwesome.otf'),
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    const { role, real, project, createFollow, deleteFollow,
            createTruth, destroyTruth } = this.props;

    //should be able to edit & delete own reals IF currentRole matches
    return (<View style={styles.realView}>
      <View style={{borderBottomWidth: 1, borderColor: 'white', padding: 5}}>
        <Text>
          <Text style={{color: 'white'}}>Role: </Text><Text style={{fontWeight: 'bold', color: 'white'}}>{role.title}</Text> in {role.location}
        </Text>
        <Text style={{color: 'white'}}>Project: {project.project}</Text>
      </View>

      <Text style={{color: 'white', padding: 5}}>{real.body}</Text>
      {/* user state should include liked_reals--an array of real_ids;
          element to render based on whether currentUser has truthed this real*/}
      <FontAwesome style={{color: 'white', padding: 5}} onPress={() => createTruth(real)}>{Icons.star}</FontAwesome>
    </View>);
  }
}

const styles = StyleSheet.create({
  realView: {
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'black',
    borderRadius: 5,
    padding: 5
  }
})
