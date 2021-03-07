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
    // eslint-disable-next-line react/destructuring-assignment
    if (this.state.errorFound) {
      return <AppFallbackUI />;
    }

    // eslint-disable-next-line react/destructuring-assignment,react/prop-types
    return this.props.children;
  }
}
export default ErrorBoundary;
