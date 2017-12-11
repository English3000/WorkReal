import React from 'react';
import { connect } from 'react-redux';
import RealsIndex from './realsIndex';
import { getAllReals, createTruth, deleteTruth } from '../actions/real_actions';

const mapStateToProps = ({ reals }) => ({
  reals
});

const mapDispatchToProps = dispatch => ({
  getAllReals: () => dispatch(getAllReals()),
  createTruth: real => dispatch(createTruth(real)),
  deleteTruth: real => dispatch(deleteTruth(real)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RealsIndex);

//Upon sign-in, across all pages; NOT FOR HERE
//getUsers: () => dispatch(getUsers()),
