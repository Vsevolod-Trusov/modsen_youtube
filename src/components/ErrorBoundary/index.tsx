import { Component, ErrorInfo, PropsWithChildren } from 'react';

import { IErrorBoundary, IErrorState } from '@/types';

export default class ErrorBoundary extends Component<
  PropsWithChildren<IErrorBoundary>,
  IErrorState
> {
  constructor(props: PropsWithChildren<IErrorBoundary>) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log('Catched error', errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallBackUIComponent;
    }

    return this.props.children;
  }
}
