import React from 'react';
import { AppFallbackUI } from "./AppFallbackUI";

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { errorFound: false };
  }
  static getDerivedStateFromError(error) {
    // see the render to see how this affects what to be rendered.
    return { errorFound: true };
  }

  render() {
    if (this.state.errorFound) {
      return <AppFallbackUI />
    }
    else {
      return this.props.children;
    }
  }
}
export default ErrorBoundary;
