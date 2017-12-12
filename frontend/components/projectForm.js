import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Button } from 'react-native';
import DatePicker from 'react-native-datepicker';

//for adding new project while in same role
// separate form for updating project???
export default class ProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { location: '', start_date: '', project: '' };
  }

  render() {
    // console.log(this.state);
    return (
      <View style={styles.viewLayout}>
        <View style={[styles.viewLayout, {width: '100%', alignItems: 'center'}]}>
          <Text style={styles.headerText}>What are you working on?</Text>
          <TextInput
            placeholder='Name'
            style={styles.formInputs}
            underlineColorAndroid={'transparent'}
            onChangeText={name => this.setState({name})}/>
          <TextInput
            placeholder='Location'
            underlineColorAndroid={'transparent'}
            style={styles.formInputs}
            onChangeText={location => this.setState({location})}/>
          <DatePicker {...this.props}
                  // placeholder='Start Date'
                  format='YYYY-MM-DD'
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  showIcon={false}
                  customStyles={{dateInput:{borderWidth: 0}}}
                  style={[styles.formInputs, {width: '50%'}]}
                  onDateChange={start_date => this.setState({start_date})} />
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.createProject(this.state)}>
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
