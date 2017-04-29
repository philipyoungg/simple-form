import React from "react";
import styled from "styled-components";
import FixedButton from "./FixedButton";
import PhotoPlaceholder from "./PhotoPlaceholder";

import { global, text, uploader } from "../variable";

const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  padding-bottom: 56.25%;
  width: 100%;
  border-radius: ${global.size.borderRadius};
  background: ${uploader.color.background};

  & > img {
    position: absolute;
    max-width: 100%;
  }
`;

const ErrMessage = styled.p`
color: red;
padding-left: ${global.size.padding}
margin-top: -${global.size.margin}
font-size: ${text.size.secondary}
`;

const SmallMessage = styled.p`
  margin-top: ${global.size.padding};
  color: ${text.color.secondary};
`;

const PhotoUploadWrapper = styled.div``;

class PhotoUpload extends React.Component {
  state = {
    imageUrl: "",
    touched: false
  };
  handleClick = () => {
    this.refs.imageUpload.click();
  };
  handleImageChange = () => {
    const file = this.refs.imageUpload.files[0];
    // check if it's image—otherwise return error
    if (!file.name.match(/.(jpg|jpeg|png|gif)$/i)) {
      return this.setState({
        touched: true,
        imageUrl: ""
      });
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = e =>
      this.setState({
        imageUrl: [reader.result]
      });
  };

  render() {
    const { touched, imageUrl } = this.state;
    return (
      <PhotoUploadWrapper>
        {touched &&
          imageUrl === "" &&
          <ErrMessage>
            You need to upload a photo (.jpg, .png, .gif ) are supported
          </ErrMessage>}
        <ImageWrapper onClick={this.handleClick}>
          <img src={imageUrl} alt="" />
          {imageUrl === "" && <PhotoPlaceholder />}
        </ImageWrapper>
        <input
          type="file"
          name="pic"
          ref="imageUpload"
          style={{ display: "none" }}
          onChange={this.handleImageChange}
          onFocus={() => alert("fooddd")}
        />
        <FixedButton valid={imageUrl !== ""} to="/2" />
        <SmallMessage>Please upload any photo here.</SmallMessage>
      </PhotoUploadWrapper>
    );
  }
}

export default PhotoUpload;
