import React from "react";
import Header from "./Header";
import styled from "styled-components";
import Steps from "./Steps";
import FixedButton from "./FixedButton";

import { global, text, uploader } from "./variable";

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
margin-top: -${global.size.padding}
`;

const PhotoUploadWrapper = styled.div`
  position: absolute;
  width: 100%;
`;

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
    if (!file.name.match(/.(jpg|jpeg|png|gif)$/i)) {
      return this.setState({
        touched: true,
        imageUrl: ''
      })
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = e =>
      this.setState({
        imageUrl: [reader.result],
        errMessage: ""
      });
  };

  render() {
    const { touched, imageUrl } = this.state;
    return (
      <PhotoUploadWrapper>
        {touched &&
          imageUrl === "" &&
          <ErrMessage>You need to upload a photo</ErrMessage>}
        <ImageWrapper onClick={this.handleClick}>
          <img src={imageUrl} alt="" />
        </ImageWrapper>
        <input
          type="file"
          name="pic"
          ref="imageUpload"
          style={{ display: "none" }}
          onChange={this.handleImageChange}
          onFocus={() => alert("fooddd")}
        />
        <FixedButton valid={this.state.imageUrl !== ""} to="/2" />
        <p style={{ color: text.color.secondary, marginTop: 10 }}>
          Please upload any photo here
        </p>
      </PhotoUploadWrapper>
    );
  }
}

const PhotoUploadPage = ({ match }) => (
  <div>
    <Steps match={match} />
    <Header title="Upload Photo" />
    <PhotoUpload />
  </div>
);

export default PhotoUploadPage;
