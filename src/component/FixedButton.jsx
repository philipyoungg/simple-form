import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { global } from "../variable";

const ButtonWrapper = styled.div`
  padding: ${global.size.padding};
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  z-index: 1000;
`;

const Button = styled.button`
  height: ${global.size.touchable};
  font-weight: bold;
  width: 100%;
  height: 100%;
  display: inline-block;
  color: white;
  text-align: center;
  line-height: ${global.size.touchable};
  border: none;
  cursor: pointer;
  border-radius: ${global.size.borderRadius};
  background-color: ${props => (props.valid ? global.color.primary : global.color.disabled)};
`;

const FixedButton = ({ valid, to }) => {
  return (
    <ButtonWrapper>
      <Link to={to}>
        <Button type="submit" disabled={!valid} valid={valid}>NEXT</Button>
      </Link>
    </ButtonWrapper>
  );
};

export default FixedButton;