import React, {Component} from 'react';
import { KeyboardAvoidingView, View, ScrollView, Text, TextInput, TouchableOpacity, StyleSheet, Button, Animated, Keyboard } from 'react-native';
import DatePicker from 'react-native-datepicker';

export default class RoleForm extends Component {
  constructor(props) {
    super(props);
    this.state = { /* user_id: this.props.currentUserId,*/ title: '', industry: '', location: '',
                   start_date: '', project: '', keyboardPadding: 0 };
    this.keyboardWillShow = this.keyboardWillShow.bind(this);
    this.keyboardDidShow = this.keyboardDidShow.bind(this);
    this.keyboardWillHide = this.keyboardWillHide.bind(this);
    this.keyboardDidHide = this.keyboardDidHide.bind(this);
  }

  //keyboard mount/unmount design from https://medium.freecodecamp.org/how-to-make-your-react-native-app-respond-gracefully-when-the-keyboard-pops-up-7442c1535580
  componentWillMount() {
    this.keyboardWillShowSub = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
    this.keyboardWillHideSub = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);
    this.keyboardDidShowSub = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow);
    this.keyboardDidHideSub = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide);
  }

  componentWillUnmount() {
    this.keyboardWillShowSub.remove();
    this.keyboardDidShowSub.remove();
  }

  keyboardWillShow(event) {
    this.setState({ keyboardPadding: '25%' });
  }

  keyboardDidShow(event) {
    this.setState({ keyboardPadding: '30%' });
  }

  keyboardWillHide(event) {
    this.setState({ keyboardPadding: 0 });
  }

  keyboardDidHide(event) {
    this.setState({ keyboardPadding: 0 });
  }

  render() {
    const { navigate } = this.props.navigation;

    return(
      <View style={styles.viewLayout}>
        <View style={[styles.viewLayout, {width: '100%', alignItems: 'center'}]}>
          <Text style={styles.headerText}>What's your job?</Text>
          <TextInput
            placeholder='Title'
            style={styles.formInputs}
            underlineColorAndroid={'transparent'}
            onChangeText={(title) => this.setState({title})}/>
          <TextInput
            placeholder='Industry'
            style={styles.formInputs}
            underlineColorAndroid={'transparent'}
            onChangeText={industry => this.setState({industry})}/>
          <TextInput
            placeholder='Location'
            underlineColorAndroid={'transparent'}
            style={styles.formInputs}
            onChangeText={location => this.setState({location})}/>
          <TextInput
            placeholder='Current Project'
            underlineColorAndroid={'transparent'}
            style={styles.formInputs}
            onChangeText={project => this.setState({project})}/>
          <DatePicker {...this.props}
                  placeholder={this.state.start_date}
                  format='YYYY-MM-DD'
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  showIcon={false}
                  customStyles={{
                    dateInput:{borderWidth: 0},
                    placeholderText: {color: 'white'},
                    dateText: {color: 'lightgray'}
                  }}
                  style={[styles.formInputs, {width: '50%'}]}
                  onDateChange={start_date => this.setState({start_date})} />
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.createRole({ user_id: this.props.currentUserId,
              title: this.state.title, industry: this.state.industry,
              location: this.state.location, start_date: this.state.start_date
            }).then(role => this.props.createProject({
              role_id: role.id, project: this.state.project,
              location: this.state.location, start_date: this.state.start_date
            })).then(project => navigate('roleShow', {roleId: project.role_id}))}>
              <Text style={{fontSize: 20}}>Confirm</Text>
          </TouchableOpacity>
        </View>
        <View style={{height: this.state.keyboardPadding}}></View>
      </View>
    );
  }

}


  const styles = StyleSheet.create({
    viewLayout: {
      flex: 6,
      justifyContent: 'center',
      backgroundColor: 'black',
    },
    headerText: {
      fontSize: 40,
      marginBottom: 5,
      color: 'white',
      textAlign: 'center',
      fontWeight: 'bold',
      fontStyle: 'italic'
    },
    formInputs: {
      margin: 10,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      fontSize: 20,
      width: '75%',
      borderWidth: 3,
      borderColor: 'white',
      borderRadius: 5,
      color: 'white'
    },
    button: {
      margin: 10,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      width: '75%',
      backgroundColor: 'white',
      borderRadius: 5,
      borderWidth: 3,
      borderColor: 'white'
    }
  });
