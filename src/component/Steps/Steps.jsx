import React from 'react';
import styled from 'styled-components';
import StepsState from './StepsState';
import NextIcon from './NextIcon';
import { global } from '../../constant/variable';

const StepsStateWrapper = styled.div`
text-align: center;
margin-bottom: ${global.size.margin};
  &:after {
    display: table;
    clear:both;
    content: "";
  }
`;

const NextIconWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 0 18%;
  align-items: center;
`;

const Steps = () => (
  <div style={{ position: 'relative' }}>
    <NextIconWrapper>
      <NextIcon />
      <NextIcon />
    </NextIconWrapper>
    <StepsStateWrapper>
      <StepsState label="Step 1" identifier="1" />
      <StepsState label="Step 2" identifier="2" />
      <StepsState label="Step 3" identifier="3" />
    </StepsStateWrapper>
  </div>
);

export default Steps;
