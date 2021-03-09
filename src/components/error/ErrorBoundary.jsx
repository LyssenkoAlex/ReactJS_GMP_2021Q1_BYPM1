import React from 'react';
import { AppFallbackUI } from './AppFallbackUI';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { errorFound: false };
  }

  static getDerivedStateFromError() {
    // see the render to see how this affects what to be rendered.
    return { errorFound: true };
  }

  render() {
    if (this.state.errorFound) {
      return <AppFallbackUI />;
    }

    return this.props.children;
  }
}
export default ErrorBoundary;
