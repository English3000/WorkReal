import React, {Component} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Button } from 'react-native';
import DatePicker from 'react-native-datepicker';

class RoleForm extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '', industry: '', location: '',
       start_date: '', current_project: '' };
  }

  handleSubmit(e) {
    e.preventDefault();
    // console.log(this.state);
    this.props.createrole(this.state);
  }

  render() {
    // console.log(this.state);
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
            onChangeText={(industry) => this.setState({industry})}/>
          <TextInput
            placeholder='Location'
            underlineColorAndroid={'transparent'}
            style={styles.formInputs}
            onChangeText={(location) => this.setState({location})}/>
          <DatePicker {...this.props}
                  placeholder='Start Date'
                  format='YYYY-MM-DD'
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  showIcon={false}
                  customStyles={{dateInput:{borderWidth: 0}}}
                  style={[styles.formInputs, {width: '50%'}]}
                  onDateChange={(start_date) => this.setState({start_date})} />
          <TouchableOpacity
            style={styles.button}
            onPress={this.handleSubmit}>
              <Text style={{fontSize: 20}}>Confirm</Text>
          </TouchableOpacity>
        </View>
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
      borderRadius: 5
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

export default RoleForm;
