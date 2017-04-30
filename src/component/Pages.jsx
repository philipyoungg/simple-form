import React from 'react';
import { connect } from 'react-redux';
import PhotoUploadPage from '../page/PhotoUploadPage';
import UserRegistrationPage from '../page/UserRegistrationPage';
import CompletePage from '../page/CompletePage';

const Pages = ({
  activeStep,
}) => ({
  1: <PhotoUploadPage />,
  2: <UserRegistrationPage />,
  3: <CompletePage />,
}[activeStep]);

export default connect(state => ({
  activeStep: state.activeStep,
}))(Pages);
