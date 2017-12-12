import React from 'react';
import { connect } from 'react-redux';
import Real from './real';
import { createTruth, deleteTruth } from '../actions/real_actions';
import { createFollow, deleteFollow } from '../actions/role_actions';

const mapStateToProps = ({ reals }) => ({
  reals
});

const mapDispatchToProps = dispatch => ({
  createTruth: real => dispatch(createTruth(real)),
  deleteTruth: real => dispatch(deleteTruth(real)),
  createFollow: role => dispatch(createFollow(role)),
  deleteFollow: role => dispatch(deleteFollow(role)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Real);

//Upon sign-in, across all pages; NOT FOR HERE
//getUsers: () => dispatch(getUsers()),
