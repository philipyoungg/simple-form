import React from 'react';
import { connect } from 'react-redux';
import { changeActiveStep } from '../action/step';

const Link = ({ onLinkClick, to, children }) =>
  <a
    role="button"
    onClick={(e) => {
      e.preventDefault();
      onLinkClick(to);
    }}
  >{children}</a>;


export default connect(
  state => state,
  dispatch => ({ onLinkClick: newStep => dispatch(changeActiveStep(newStep)) }))(Link);
