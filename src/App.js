import React, { Component } from "react";
import Helmet from "react-helmet";
import "./App.css";

import Header from "./Header";
import Wrapper from "./Wrapper";
import AppBar from "./AppBar";
import Steps from "./Steps";
import FormUserRegistration from './FormUserRegistration'

class App extends Component {
  render() {
    return (
      <div
        className="App"
        style={{
          paddingBottom: "50px",
          backgroundColor: "#F7F9FB",
          minHeight: "100vh"
        }}
      >
        <Helmet>
          <meta
            name="viewport"
            content="width=device-width, user-scalable=no"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/tachyons/4.7.1/tachyons.min.css"
          />
        </Helmet>
        <AppBar />
        <Steps />
        <Wrapper>
          <Header
            title="Your contact information"
            description="Fill in the following details"
          />
          <FormUserRegistration />
        </Wrapper>
      </div>
    );
  }
}

export default App;
