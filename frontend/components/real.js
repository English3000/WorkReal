import React from 'react';
import { View } from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';

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
    const {role, real, project, createTruth, destroyTruth} = this.props;
    //should be able to edit & delete own reals IF currentRole matches
    return (this.state.fontLoaded ? <View>
      <View>
        <Text>
          <Text style={{fontWeight: 'bold'}}>{role.title}</Text> in {role.location}
        </Text>
        {project.name}
      </View>

      <Text>{real.body}</Text>
      {/* user state should include liked_reals--an array of real_ids;
          element to render based on whether currentUser has truthed this real*/}
      <FontAwesome onPress={() => createTruth(real)}>{Icons.star}</FontAwesome>
    </View> : null);
  }
}
