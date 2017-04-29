import React from "react";
import styled from "styled-components";
import Link from "react-router-dom";
import { text } from "../variable";

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

export default StepsLink;
