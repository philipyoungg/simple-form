import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { global, text } from "./variable";
import { Link } from "react-router-dom";

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

const RegistrationLink = ({ to, label, match, state }) => {
  const currentState = match.url.replace("/", "");
  const isFinished = currentState >= state;
  const isActive = currentState === state;
  return (
    <StyledLink
      to={to}
      state={state}
      isActive={isActive}
      isFinished={isFinished}
    >
      {label}
    </StyledLink>
  );
};

const RegistrationLinkWrapper = styled.div`
text-align: center;
paddingBottom: 30px;
&:after {
  display: table;
  clear:both;
  content: "";
}
`

const Steps = ({ match }) => (
  <RegistrationLinkWrapper>
    <RegistrationLink to="/1" label="Step 1" state="1" match={match} />
    <RegistrationLink to="/2" label="Step 2" state="2" match={match} />
    <RegistrationLink to="/3" label="Step 3" state="3" match={match} />
  </RegistrationLinkWrapper>
);

export default connect(state => ({ activeState: state.activeState }))(Steps);
