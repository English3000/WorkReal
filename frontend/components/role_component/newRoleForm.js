import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Button} from 'react-native';
import DatePicker from 'react-native-datepicker';

class RoleForm extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '', industry: '', location: '',
       start_date: ''};
    this.handlesubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    this.props.createRole(this.state);
  }

  render() {
    console.log(this.props);
    return(
      <View style={styles.viewLayout}>
        <Text style={styles.headerText}>Your Role:</Text>
        <TextInput
          placeholder='Title'
          style={styles.formInputs}
          underlineColorAndroid={'transparent'}
          onChangeText={(title) => this.setState({title})}/>
        <TextInput
          placeholder='Industry'
          style={styles.formInputs}
          underlineColorAndroid={'transparent'}
          onChangeText={(industry) => this.setState({industry})}/>
        <TextInput
          placeholder='Location'
          underlineColorAndroid={'transparent'}
          style={styles.formInputs}
          onChangeText={(location) => this.setState({location})}/>
        <DatePicker {...this.props}
                format='YYYY-MM-DD'
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                showIcon={false}
                customStyles={{dateInput:{borderWidth: 0}}}
                style={styles.formInputs}
                placeholder={this.state.start_date}
                onDateChange={(start_date) => this.setState({start_date})} />
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.createRole(this.state)}>
            <Text style={{fontSize: 20, color: 'white'}}>Confirm</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

  const styles = StyleSheet.create({
    headerText: {
      fontSize: 20,
      color: 'white',
      margin: 10
    },
    viewLayout: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 5,
      backgroundColor: 'black'
    },
    formInputs: {
      margin: 10,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      fontSize: 20,
      width: '80%',
      borderWidth: 1,
      borderColor: 'blue',
      borderRadius: 5,
      color: 'white'
    },
    button: {
      margin: 10,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      width: '80%',
      backgroundColor: 'blue',
      borderRadius: 5
    }
  });

export default RoleForm;
