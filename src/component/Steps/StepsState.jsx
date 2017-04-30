import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { global, text } from '../../constant/variable';

const Wrapper = styled.div`
float: left;
width: 33.33%;
background: white;
height: ${global.size.touchable};
color: ${props => (props.isActive ? global.color.primary : props.isFinished ? text.color.primary : global.color.disabled)};
line-height: ${global.size.touchable};
text-decoration: none;
`;

const StepsState = ({ label, activeStep, identifier }) => {
  const isFinished = Number(activeStep) >= Number(identifier);
  const isActive = Number(activeStep) === Number(identifier);
  return (
    <Wrapper
      identifier={identifier}
      isActive={isActive}
      isFinished={isFinished}
    >{label}
    </Wrapper>
  );
};

export default connect(state => ({ activeStep: state.activeStep }))(StepsState);
