import React, { Component } from "react";
import Helmet from "react-helmet";
import "./App.css";
import { TextField } from "material-ui/";

const fontSizePrimary = "14px";
const fontSizeSecondary = "12px";
const textColorPrimary = "#363A45";
const textColorSecondary = "#565D6B";
const colorPrimary = "#00B23E";

const Header = ({ title, description }) => (
  <div>
    <p
      style={{
        fontSize: fontSizePrimary,
        color: textColorPrimary,
        fontWeight: "normal",
        marginBottom: "7px"
      }}
    >
      {title}
    </p>
    <p style={{ fontSize: fontSizeSecondary, color: textColorSecondary }}>
      {description}
    </p>
  </div>
);

const Wrapper = ({ children }) => (
  <div style={{ padding: "19px 10px" }}>{children}</div>
);

const AppBar = () => (
  <div
    style={{
      height: "45px",
      width: "100%",
      backgroundColor: colorPrimary,
    }}
  />
);

const FixedButton = () => (
  <div
    style={{
      height: "50px",
      width: "100%",
      backgroundColor: colorPrimary,
      fontWeight: "bold",
      color: "white",
      textAlign: "center",
      lineHeight: "50px",
      position: "fixed",
      bottom: 0
    }}
  >
    NEXT
  </div>
);

const GrabTextField = ({ label, type }) => (
  <TextField
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
      marginBottom: "14px"
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
      fontSize: fontSizePrimary
    }}
  />
);
class App extends Component {
  render() {
    return (
      <div
        className="App"
        style={{ color: textColorPrimary, fontSize: fontSizePrimary }}
      >
        <Helmet>
          <meta
            name="viewport"
            content="width=device-width, user-scalable=no"
          />
        </Helmet>
        <AppBar />
        <Wrapper>
          <Header
            title="Your contact information"
            description="Fill in the following details"
          />
          <GrabTextField label="Your First Name" />
          <GrabTextField label="Your Last Name" />
          <GrabTextField label="Contact Number" type="tel" />
          <GrabTextField label="Address" />
        </Wrapper>
        <FixedButton />
      </div>
    );
  }
}

export default App;
