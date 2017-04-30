import React from 'react';
import { connect } from 'react-redux';

class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (prevProps.activeStep !== this.props.activeStep) {
      window.scrollTo(0, 0);
    }
  }
  render() {
    return this.props.children;
  }
}

export default connect(state => ({ activeStep: state.activeStep }))(ScrollToTop);
