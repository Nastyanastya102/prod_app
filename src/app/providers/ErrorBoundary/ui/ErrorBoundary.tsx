import React, { ErrorInfo, Suspense } from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode
  fallback?: any
}

interface ErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
    // Example "componentStack":
    //   in ComponentThatThrows (created by App)
    //   in ErrorBoundary (created by App)
    //   in div (created by App)
    //   in App
        console.log(error, info.componentStack);
    }

    render() {
        const { hasError } = this.state;
        const { fallback, children } = this.props;

        if (hasError) {
            // You can render any custom fallback UI
            return (
            /* eslint i18next/no-literal-string: 0 */
                <Suspense fallback={<div>...Loading</div>}>
                    {fallback ?? <h1>Something went whong</h1>}
                </Suspense>
            );
        }

        return children;
    }
}

export default ErrorBoundary;
