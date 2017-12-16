import React from 'react';
import { connect } from 'react-redux';
import RealsIndex from './realsIndex';
import { getAllReals, createReal } from '../actions/real_actions';

const mapStateToProps = ({ reals, roles, projects }) => ({
  reals, roles
});

const mapDispatchToProps = dispatch => ({
  getAllReals: () => dispatch(getAllReals()),
  createReal: real => dispatch(createReal(real))
});

export default connect(mapStateToProps, mapDispatchToProps)(RealsIndex);

//Upon sign-in, across all pages; NOT FOR HERE
//getUsers: () => dispatch(getUsers()),
