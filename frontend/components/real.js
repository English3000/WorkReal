import React from 'react';
import { View } from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';

export default class Real extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fontLoaded: false };
    // console.log(this.props);
    // console.log(this.state);
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Amaranth': require('../assets/fonts/Amaranth-Regular.ttf'),
      'FontAwesome': require('../assets/fonts/FontAwesome.otf'),
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    const {role, real, project} = this.props;

    return ({this.state.fontLoaded ? <View>
      <View>
        <Text>
          <Text style={{fontWeight: 'bold'}}>{role.title}</Text> in {role.location}
        </Text>
        {project.name}
      </View>

      <Text>{real.body}</Text>
      <FontAwesome onPress={() => Alert.alert('liked')}>{Icons.star}</FontAwesome>
    </View> : null});
  }
}
