import React from 'react';
import { connect } from 'react-redux';
import RealsIndex from './realsIndex';
import { getAllReals, createTruth, destroyTruth } from '../actions/real_actions';

const mapStateToProps = ({ reals, roles, projects }) => ({
  reals, roles, projects
});

const mapDispatchToProps = dispatch => ({
  getAllReals: () => dispatch(getAllReals()),
  createTruth: realId => dispatch(createTruth(realId)),
  destroyTruth: (id, realId) => dispatch(destroyTruth(id, realId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RealsIndex);

//Upon sign-in, across all pages; NOT FOR HERE
//getUsers: () => dispatch(getUsers()),
