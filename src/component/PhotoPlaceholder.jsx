import React from "react";
import styled from "styled-components";
import { global, text } from "../variable";

const PhotoPlaceholderText = styled.p`
  font-size: ${text.size.big};
  margin-bottom: 0;
  color: ${global.color.primary};
`;

const PhotoPlaceholderImage = styled.p`
  font-size: 19px;
  color: ${global.color.primary};
  border: 2px solid ${global.color.primary};
  border-radius: 100%;
  width: 28px;
  height: 28px;
  line-height: 21px;
  margin: 0 auto;
  text-align: center;
  margin-bottom: ${global.size.padding}
`;

const PlaceholderWrapper = styled.div`
position: absolute;
text-align: center;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
text-align: center;
`;

const PhotoPlaceholder = () => (
  <PlaceholderWrapper>
    <PhotoPlaceholderImage>+</PhotoPlaceholderImage>
    <PhotoPlaceholderText>Add Photo</PhotoPlaceholderText>
  </PlaceholderWrapper>
);

export default PhotoPlaceholder;
