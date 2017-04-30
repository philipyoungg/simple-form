import React from 'react';
import Wrapper from './Wrapper';
import AppBar from './AppBar';
import Body from './Body';
import Steps from './Steps/Steps';
import ScrollToTop from './ScrollToTop';
import Pages from './Pages';

const App = () => (
  <ScrollToTop>
    <Body>
      <AppBar />
      <Steps />
      <Wrapper>
        <Pages />
      </Wrapper>
    </Body>
  </ScrollToTop>
);

export default App;
