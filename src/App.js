import React, { Component } from "react";
import Helmet from "react-helmet";
import "./App.css";

import Header from "./Header";
import Wrapper from "./Wrapper";
import AppBar from "./AppBar";
import FixedButton from "./FixedButton";
import GrabTextField from "./GrabTextField";

class App extends Component {
  render() {
    return (
      <div className="App">
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
          <GrabTextField label="Address" textArea />
        </Wrapper>
        <FixedButton />
      </div>
    );
  }
}

export default App;
