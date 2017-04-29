import React from "react";
import Header from "./Header";
import Steps from "./Steps";
import FixedButton from "./FixedButton";

import { textColorSecondary } from "./variable";

class PhotoUpload extends React.Component {
  state = {
    imageUrl: "",
    touched: false
  };
  handleClick = () => {
    this.refs.imageUpload.click();
    this.setState({
      touched: true
    });
  };
  handleImageChange = () => {
    const file = this.refs.imageUpload.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = e =>
      this.setState({
        imageUrl: [reader.result],
        errMessage: ""
      });
  };

  render() {
    const { match } = this.props;
    const errMessage = this.state.touched && this.state.imageUrl === ""
      ? "You need to upload a photo"
      : "";
    return (
      <div>
        <Steps match={match} />
        <Header title="Upload Photo" errMessage={errMessage} />
        <div
          className="relative aspect-ratio--16x9 bg-light-gray w-100 br2 overflow-hidden"
          onClick={this.handleClick}
        >
          <img className="absolute" src={this.state.imageUrl} alt="" />
        </div>
        <input
          type="file"
          name="pic"
          ref="imageUpload"
          style={{ display: "none" }}
          onChange={this.handleImageChange}
        />
        <FixedButton valid={this.state.imageUrl !== ""} to="/2" />
        <p style={{ color: textColorSecondary, marginTop: 10 }}>Please upload any photo here</p>
      </div>
    );
  }
}

export default PhotoUpload;
