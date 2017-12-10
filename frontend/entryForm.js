import React from 'react';
import { StyleSheet, View, Text, Image, TextInput, Button, Alert } from 'react-native';
import { Font } from 'expo';
import FontAwesome, { Icons } from 'react-native-fontawesome';

class CircleButton extends React.Component {
  render() {
    const {title, style, _onPress} = this.props;

    return (<Text style={[{ height: 85, width: 85, fontWeight: 'bold',
                           padding: 25, textAlign: 'center',
                           backgroundColor: 'white',
                           borderRadius: 100}, style]}
            onPress={_onPress}>{title}</Text>);
  }
}

export default class EntryForm extends React.Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false,
      email: '',
      password: ''
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Amaranth': require('./assets/fonts/Amaranth-Regular.ttf'),
      'FontAwesome': require('./assets/fonts/FontAwesome.otf'),
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      <View style={styles.view}>
        {this.state.fontLoaded ? <View style={styles.upper}>
          <Text style={[styles.text, styles.header]}>
            <Image source={require('./assets/images/logo.png')} style={{width: 187.5, height: 93.75}}/>
          &nbsp;WorkReal</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <CircleButton title='SIGN UP'
                          style={{position: 'relative', right: 3}}
                          _onPress={() => Alert.alert(`${this.state.email} signed up.`)}></CircleButton>
            <View>
              <TextInput style={[styles.text, styles.input]} placeholder='email'
                         underlineColorAndroid='transparent'
                         onChangeText={ email => this.setState({ email }) }/>
              <TextInput style={[styles.text, styles.input, styles.lastInput]} placeholder='password'
                         underlineColorAndroid='transparent' secureTextEntry={true}
                         onChangeText={ password => this.setState({ password }) }/>
            </View>
            <CircleButton title='SIGN IN'
                          style={{position: 'relative', left: 3}}
                          _onPress={() => Alert.alert(`${this.state.email} signed in.`)}></CircleButton>
          </View>
        </View> : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    fontSize: 50,
    fontFamily: 'Amaranth',
    marginBottom: 20,
    textAlign: 'center'
  },
  view: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    // fontSize: 20,
  },
  upper: {
    position: 'relative',
    top: '-10%'
  },
  input: {
    width: 175,
    paddingTop: 2.5,
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 5,
    borderRadius: 25,
    borderWidth: 4,
    borderColor: 'white',
  },
  lastInput: {
    position: 'relative',
    top: -4
  },
  circle: {
    height: 25,
    width: 25,
    borderRadius: 100
  }
});
