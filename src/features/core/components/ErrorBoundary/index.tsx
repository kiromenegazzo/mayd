import { Component, ErrorInfo } from 'react';

import * as UI from './styles';
import { IState, IProps } from './types';

export class ErrorBoundary extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <UI.ErrorBoundary>
          <UI.Title>Something went wrong.</UI.Title>
          <UI.ReloadButton onClick={() => location.reload()}>Reload</UI.ReloadButton>
        </UI.ErrorBoundary>
      );
    }

    return children;
  }
}
