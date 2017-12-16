import React from 'react';
import { connect } from 'react-redux';
import RealForm from './realForm';
import { createReal } from '../actions/real_actions';

const mapStateToProps = state => ({
reals: state.reals
});

const mapDispatchToProps = dispatch => ({
createReal: real => dispatch(createReal(real))
});

export default connect(mapStateToProps, mapDispatchToProps)(RealForm);
