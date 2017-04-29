import React from "react";
import styled from "styled-components";
import { text, global } from "./variable";

const HeaderWrapper = styled.div`
padding: 0 ${global.size.padding};
text-align: ${props => (props.center ? "center" : "")};
margin-bottom: ${global.size.margin};
`;

const Title = styled.h1`
font-size: ${text.size.big};
color: ${text.color.primary};
font-weight: normal;
marginBottom: 7px;
`;

const Description = styled.p`
font-size: ${text.size.primary};
color: ${text.color.secondary};
`;



const Header = ({ title, description, center, errMessage }) => (
  <HeaderWrapper center={center}>
    <Title>{title}</Title>
    {description && <Description>{description}</Description>}

  </HeaderWrapper>
);

export default Header;
