import React from 'react';
import { connect } from 'react-redux';
import EntryForm from './entryForm';

const mapStateToProps = ({ session }) => ({
  session
});

// const mapDispatchToProps = dispatch => ({
//
// });

export default connect(mapStateToProps)(EntryForm);
