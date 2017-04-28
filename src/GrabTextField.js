import React from "react";
import { TextField } from "material-ui/";
import {
  fontSizePrimary,
  textColorSecondary
} from "./variable";

class GrabTextField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorText: "",
      init: false
    };
  }
  handleChange(e) {
    if (e.target.value === "") {
      this.setState({
        errorText: "this input is required"
      });
    } else {
      this.setState({
        errorText: ""
      });
    }
  }
  handleBlur(e) {
    if (e.target.value === "") {
      this.setState({
        errorText: "this input is required"
      });
    }
  }
  render() {
    let { label, type, textArea } = this.props;
    return (
      <TextField
        onBlur={this.handleBlur.bind(this)}
        onChange={this.handleChange.bind(this)}
        type={type ? type : "text"}
        name={label}
        floatingLabelText={label}
        underlineShow={false}
        style={{
          background: "#EAEFF2",
          width: "auto",
          display: "block",
          maxWidth: "100%",
          border: "1px solid",
          borderColor: "#CCD6DD",
          borderRadius: "4px",
          marginBottom: "21px",
          overflow: "inherit",
          padding: "0 12px",
          height: "54px"
        }}
        floatingLabelStyle={{
          top: 0,
          lineHeight: "54px",
          fontSize: fontSizePrimary
        }}
        floatingLabelShrinkStyle={{
          transform: "scale(0.7) translateY(-12px)",
          color: textColorSecondary
        }}
        inputStyle={{
          position: "relative",
          marginTop: "4px",
          fontSize: fontSizePrimary,
          marginBottom: "0",
        }}
        textareaStyle={{
          position: "relative",
          padding: "0",
          marginTop: "12px",
          fontSize: fontSizePrimary,
          marginBottom: "0",
          lineHeight: 1.3,
        }}
        errorText={this.state.errorText}
        errorStyle={{
          position: 'absolute',
          bottom: '-17px',
          marginTop: "1px",
          fontSize: "11px"
        }}
        multiLine={textArea}
        rows={2}
        rowsMax={4}
      />
    );
  }
}

export default GrabTextField;
