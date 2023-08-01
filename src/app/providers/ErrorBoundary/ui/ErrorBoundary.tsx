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
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <Suspense fallback={<div>...Loading</div>}>
                    {this.props.fallback ?? <h1>Something went whong</h1>}
                </Suspense>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
