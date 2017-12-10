import React from 'react';
import {connect} from 'react-redux';
import entryForm from './entryForm';

const mapStateToProps = (state) => ({
  session: state.session

});

// const mapDispatchToProps = dispatch => ({
//
// });

export default connect(mapStateToProps,null)(entryForm);
