import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import StepsLink from "./StepsLink";
import NextIcon from "./NextIcon";
import { global, text } from "../variable";

const StepsLinkWrapper = styled.div`
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

const Steps = ({ location }) => (
  <div style={{position: 'relative'}}>
    <NextIconWrapper>
      <NextIcon />
      <NextIcon />
    </NextIconWrapper>
    <StepsLinkWrapper>
      <StepsLink to="/1" label="Step 1" idenfitier="1" location={location} />
      <StepsLink to="/2" label="Step 2" idenfitier="2" location={location} />
      <StepsLink to="/3" label="Step 3" idenfitier="3" location={location} />
    </StepsLinkWrapper>
  </div>
);

export default withRouter(Steps);
