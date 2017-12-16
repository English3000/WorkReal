import React, {Component} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Button } from 'react-native';
// import DatePicker from 'react-native-datepicker';

export default class RealForm extends Component {
  constructor(props) {
    super(props);
    this.state = {role_id: props.project.role_id, project_id: props.project.id, body: '' };
    this.handlePress = this.handlePress.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({role_id: nextProps.roleId, project_id: nextProps.projectId});
  }

  handlePress(e) {
    e.preventDefault();
    this.props.createReal(this.state);
    this.setState({body: ''});
  }

  render() {
    const { navigate } = this.props;

    return(
      <View style={styles.viewLayout}>
        <View style={[styles.viewLayout, {width: '100%', alignItems: 'center'}]}>
          <TextInput
            multiline = {true}
            minHeight={4}
            nmaxHeight={8}
            placeholder='body'
            style={styles.formInputs}
            underlineColorAndroid={'transparent'}
            onChangeText={(body) => this.setState({body})}/>

          <TouchableOpacity
            style={styles.button}
            onPress={this.handlePress}>
              <Text style={{fontSize: 20}}>Add Real</Text>
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
