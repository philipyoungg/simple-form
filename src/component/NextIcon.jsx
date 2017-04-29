import React from "react";
import styled from "styled-components";

const IconContainer = styled.div`
  width: 16px;
  height: 16px;
  color: ${text.color.primary};
  border-radius: 100%;
  background: ${global.color.disabled};
  line-height: 16px;
  text-align: center;
    & i {
      margin-left: 1px;
    }
`;

const NextIcon = () => (
  <IconContainer><i className="fa fa-angle-right" /></IconContainer>
);

export default NextIcon;
