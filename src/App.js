import React, { Component } from "react";
import Helmet from "react-helmet";
import "./App.css";

import { Route, Redirect } from "react-router-dom";
import Wrapper from "./Wrapper";
import AppBar from "./AppBar";
import PhotoUpload from "./PhotoUpload";
import FormUserRegistration from "./FormUserRegistration";
import Complete from "./Complete";

class App extends Component {
  render() {
    return (
      <div
        className="App"
        style={{
          paddingBottom: 50,
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
        <Wrapper>
          <Redirect from='/' to='/1'></Redirect>
          <Route path="/1" component={PhotoUpload} />
          <Route path="/2" component={FormUserRegistration} />
          <Route path="/3" component={Complete} />
        </Wrapper>
      </div>
    );
  }
}

export default App;
