import React from 'react';
import { StyleSheet, View, Text, Image, TextInput, Button, Alert,
         ActivityIndicator, TouchableOpacity,AsyncStorage } from 'react-native';
import { Font } from 'expo';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import { TabNavigator } from 'react-navigation';





class CircleButton extends React.Component {
  constructor(props){
    super(props);
    this.handlePress = this.handlePress.bind(this);

  }



  handlePress(){
    const{session,processForm,credentials} = this.props;

    //sign in/sign up the user and then access the state/store for updated currentUser and session_token
    processForm({email: credentials.email,password: credentials.password})

  }





  render() {
    const {title, style, _onPress} = this.props;

    return (<TouchableOpacity style={style} onPress={this.handlePress}>
              <Text style={{ height: 85, width: 85, fontWeight: 'bold',
                              padding: 25, textAlign: 'center',
                              backgroundColor: 'white',
                              borderRadius: 100}}>{title}</Text>
            </TouchableOpacity>);
  }
}

export default class EntryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false,
      email: '',
      password: ''
    };

  }

  async componentDidMount() {
    await Font.loadAsync({
      'Amaranth': require('../assets/fonts/Amaranth-Regular.ttf'),
      'FontAwesome': require('../assets/fonts/FontAwesome.otf'),
    });

    this.setState({ fontLoaded: true });

  }




  async storeToken(token){
    //Write Async storage here

    //Async storage now has an item called 'currentUser' with a value of token.
    //token === currentUser.session_token
    try {
     await AsyncStorage.setItem('session_token', token);
   } catch (error) {
     console.error('AsyncStorage error: ' + error.message);
   }



  }

  componentWillReceiveProps(newProps){

    //if currentUser changed

    if (newProps.session.currentUser !== this.props.session.currentUser) {

      //if AsyncStorage session_token exists
      AsyncStorage.getItem('session_token')
      .then((token) => {
        if (token) {
          //if AsyncStorage session_token exists, then navigate to roleForm
          this.props.navigation.navigate(`roleForm`);

        }
        else{
            // if AsyncStorage session_token doesn't exist, but the user is logged in. Then create a
            // AsyncStorage session_token
            this.storeToken(newProps.session.currentUser.data.session_token);
            this.props.navigation.navigate(`roleForm`);
        }});




    }
    //currentUser is null
    else{

        newProps.errors.map( (e) => (
          Alert.alert(e)
        ));


    }

  }

  //should institute 2-factor authentication
  render() {
    //if not signed in
    const { navigate } = this.props.navigation;
    return (

      <View style={styles.view}>

        {this.state.fontLoaded ? <View style={styles.upper}>
          <Text style={[styles.text, styles.header]}>
            <Image source={require('../assets/images/logo.png')} style={{width: 187.5, height: 93.75}}/>
          &nbsp;WorkReal</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <CircleButton title='SIGN UP'
                          style={{position: 'relative', right: 3}}
                          session={this.props.session}
                          processForm={this.props.signUp}
                          credentials={ this.state }
                          _onPress={() => this.props.signUp({
                            email: this.state.email, password: this.state.password
                          }).then(() => navigate('roleForm'))}></CircleButton>
            <View>
              <TextInput style={[styles.text, styles.input]}
                         placeholder='email'
                         value={this.state.email}
                         underlineColorAndroid='transparent' type={'email-address'}
                         onChangeText={ email => this.setState({ email }) }/>
              <TextInput style={[styles.text, styles.input, styles.lastInput]}
                         placeholder='password' secureTextEntry={true}
                         underlineColorAndroid='transparent'
                         onChangeText={ password => this.setState({ password }) }/>
            </View>
            <CircleButton title='SIGN IN'
                          style={{position: 'relative', left: 3}}
                          session={this.props.session}
                          processForm={this.props.signIn}
                          credentials={this.state}
                          _onPress={() => this.props.signIn({
                            email: this.state.email, password: this.state.password
                          })}></CircleButton>
          </View>
        </View> : null}
      </View>
    );
    //else
    /* return (
      TabNavigator({
        Home: {
          screen: EntryFormContainer,
          // navigationOptions: { headerTitle: 'Home' }
        },
        Details: {
          screen: EntryFormContainer
        }
      });
    ) */
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 50,
    fontFamily: 'Amaranth',
    marginBottom: 20,
    textAlign: 'center'
  },
  text: {
    color: 'white'
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
