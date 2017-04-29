import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { global, text } from "../variable";
import { Link, withRouter } from "react-router-dom";

const StyledLink = styled(Link)`
float: left;
width: 33.33%;
background: white;
height: ${global.size.touchable};
line-height: ${global.size.touchable};
text-decoration: none;
color: ${props => (props.isActive ? global.color.primary : props.isFinished ? text.color.primary : global.color.disabled)};
pointer-events: none;
text-decoration: none;
`;

const RegistrationLink = ({ to, label, location, idenfitier }) => {
  const currIdentifier = location.pathname.replace("/", "");
  const isFinished = currIdentifier >= idenfitier;
  const isActive = currIdentifier === idenfitier;
  return (
    <StyledLink
      to={to}
      idenfitier={idenfitier}
      isActive={isActive}
      isFinished={isFinished}
    >
      {label}
    </StyledLink>
  );
};

const RegistrationLinkWrapper = styled.div`
text-align: center;
paddingBottom: ${global.size.margin};
  &:after {
    display: table;
    clear:both;
    content: "";
  }
`;

const Steps = ({ location }) => (
  <RegistrationLinkWrapper>
    <RegistrationLink to="/1" label="Step 1" idenfitier="1" location={location} />
    <RegistrationLink to="/2" label="Step 2" idenfitier="2" location={location} />
    <RegistrationLink to="/3" label="Step 3" idenfitier="3" location={location} />
  </RegistrationLinkWrapper>
);

export default withRouter(Steps);
