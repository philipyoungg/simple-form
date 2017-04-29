import React from "react";
import Helmet from "react-helmet";
import styled from 'styled-components';

import { Route, Redirect } from "react-router-dom";
import Wrapper from "./Wrapper";
import AppBar from "./AppBar";
import PhotoUpload from "./PhotoUpload";
import FormUserRegistration from "./FormUserRegistration";
import Complete from "./Complete";

import {global} from './variable'

const Body = styled.div`
  padding-bottom: 50px;
  background-color: ${global.color.background};
  min-height: 100vh;
`;

const App = () => (
  <Body>
    <Helmet>
      <meta name="viewport" content="width=device-width, user-scalable=no" />
    </Helmet>
    <AppBar />
    <Wrapper>
      <Redirect from="/" to="/1" />
      <Route path="/1" component={PhotoUpload} />
      <Route path="/2" component={FormUserRegistration} />
      <Route path="/3" component={Complete} />
    </Wrapper>
  </Body>
);

export default App;
