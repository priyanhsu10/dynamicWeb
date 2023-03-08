import React, { Component } from "react";

export class ErrorBoundary extends Component {
  constructor(prop) {
    super(prop);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  render() {
    if (this.setState.hasError) {
      return <h1>something went wrong</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
