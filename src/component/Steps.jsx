import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { global, text } from "../variable";
import { Link, withRouter } from "react-router-dom";

const LinkContainer = styled.div`
float: left;
width: 33.33%;
background: white;
height: ${global.size.touchable};
color: ${props => (props.isActive ? global.color.primary : props.isFinished ? text.color.primary : global.color.disabled)};
`;

const StyledLink = styled(Link)`
  line-height: ${global.size.touchable};
  text-decoration: none;
  color: inherit;
  pointer-events: none;
  text-decoration: none;
`;

const StepsLink = ({ to, label, location, idenfitier }) => {
  const currIdentifier = location.pathname.replace("/", "");
  const isFinished = currIdentifier >= idenfitier;
  const isActive = currIdentifier === idenfitier;
  return (
    <LinkContainer
      idenfitier={idenfitier}
      isActive={isActive}
      isFinished={isFinished}
    >
      <StyledLink to={to}>{label}</StyledLink>
    </LinkContainer>
  );
};

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
    <StepsLink
      to="/1"
      label="Step 1"
      idenfitier="1"
      location={location}
    />
  <StepsLink
      to="/2"
      label="Step 2"
      idenfitier="2"
      location={location}
    />
  <StepsLink
      to="/3"
      label="Step 3"
      idenfitier="3"
      location={location}
    />
</StepsLinkWrapper>
);

export default withRouter(Steps);
