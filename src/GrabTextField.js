import React from "react";
import { TextField } from "material-ui/";
import {
  fontSizePrimary,
  textColorPrimary,
  fontSizeSecondary,
  textColorSecondary
} from "./variable";

class GrabTextField extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      errorText: '',
      init: false
    }
  }
  handleChange(e) {
    if (e.target.value === '') {
      this.setState({
        errorText: 'this input is required'
      })
    } else {
      this.setState({
        errorText: ''
      })
    }
  }
  handleBlur(e) {
    if (e.target.value === '') {
      this.setState({
        errorText: 'this input is required'
      })
    }
  }
  render() {
    let { label, type, textArea } = this.props
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
          padding: "0 12px",
          width: "auto",
          display: "block",
          maxWidth: "100%",
          height: "52px",
          border: "1px solid",
          borderColor: "#CCD6DD",
          borderRadius: "4px",
          overflow: "hidden",
          marginBottom: "21px",
          overflow: "inherit"
        }}
        floatingLabelStyle={{
          top: 0,
          lineHeight: "52px",
          fontSize: fontSizePrimary
        }}
        floatingLabelShrinkStyle={{
          transform: " scale(0.71) translateY(-10px)",
          color: textColorSecondary
        }}
        inputStyle={{
          marginTop: "4px",
          fontSize: fontSizePrimary,
          marginBottom: "0"
        }}
        errorText={this.state.errorText}
        errorStyle={{
          top: 0,
          marginTop: "1px",
          fontSize: "12px",
        }}
        multiLine={textArea}
        rows={2}
        rowsMax={4}
      />
    )
  }

}

export default GrabTextField;
