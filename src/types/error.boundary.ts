import { ReactNode } from 'react';

interface IErrorBoundary {
  fallBackUIComponent: ReactNode;
}

interface IErrorState {
  hasError: boolean;
}

export { IErrorBoundary, IErrorState };
