import React from 'react';
import { connect } from 'react-redux';
import Real from './real';
import { createFollow, deleteFollow } from '../actions/role_actions';
import { createTruth, destroyTruth } from '../actions/real_actions';

// const mapStateToProps = ({ reals }) => ({
//   reals
// });

const mapDispatchToProps = dispatch => ({
  createFollow: role => dispatch(createFollow(role)),
  deleteFollow: role => dispatch(deleteFollow(role)),
  createTruth: real => dispatch(createTruth(real)),
  destroyTruth: real => dispatch(destroyTruth(real)),
});

export default connect(null, mapDispatchToProps)(Real);
