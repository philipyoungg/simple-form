import React from "react";
import styled from "styled-components";
import { global, text } from "../variable";
import { withRouter } from "react-router-dom";
import { StepsLink } from "./StepsLink";

const StepsLinkWrapper = styled.div`
text-align: center;
paddingBottom: ${global.size.margin};
  &:after {
    display: table;
    clear:both;
    content: "";
  }
`;

const Steps = ({ location }) => (
  <StepsLinkWrapper>
    <StepsLink to="/1" label="Step 1" idenfitier="1" location={location} />
    <StepsLink to="/2" label="Step 2" idenfitier="2" location={location} />
    <StepsLink to="/3" label="Step 3" idenfitier="3" location={location} />
  </StepsLinkWrapper>
);

export default withRouter(Steps);
