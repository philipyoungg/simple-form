import React from "react";

import { Route, Redirect } from "react-router-dom";
import Wrapper from "./component/Wrapper";
import AppBar from "./component/AppBar";
import Body from "./component/Body";
import ScrollToTop from "./component/ScrollToTop";
import PhotoUploadPage from "./page/PhotoUploadPage";
import UserRegistrationPage from "./page/UserRegistrationPage";
import CompletePage from "./page/CompletePage";

const App = () => (
  <ScrollToTop>
    <Body>
      <AppBar />
      <Wrapper>
        <Redirect from="/" to="/1" />
        <Route path="/1" component={PhotoUploadPage} />
        <Route path="/2" component={UserRegistrationPage} />
        <Route path="/3" component={CompletePage} />
      </Wrapper>
    </Body>
  </ScrollToTop>
);

export default App;
