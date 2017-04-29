import React from 'react';

import { Route, Redirect, HashRouter } from 'react-router-dom';
import Wrapper from './Wrapper';
import AppBar from './AppBar';
import Body from './Body';
import Steps from './Steps';
import ScrollToTop from './ScrollToTop';
import PhotoUploadPage from '../page/PhotoUploadPage';
import UserRegistrationPage from '../page/UserRegistrationPage';
import CompletePage from '../page/CompletePage';

const App = () => (
  <HashRouter>
    <ScrollToTop>
      <Body>
        <AppBar />
        <Steps />
        <Wrapper>
          <Redirect from="/" to="/1" />
          <Route path="/1" component={PhotoUploadPage} />
          <Route path="/2" component={UserRegistrationPage} />
          <Route path="/3" component={CompletePage} />
        </Wrapper>
      </Body>
    </ScrollToTop>
  </HashRouter>
);

export default App;
