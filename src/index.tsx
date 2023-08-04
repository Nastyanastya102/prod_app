import { render } from 'react-dom';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';

import App from 'app/App';
import { ThemeContextProvider } from 'app/providers/ThemeProvider';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { PageError } from 'widgets/PageError';

import './app/styles/index.scss';
import './shared/config/i18n/i18n';
import { StoreProvider } from 'app/providers/StoreProvider';

render(
    <StrictMode>
        <StoreProvider>
            <ErrorBoundary fallback={<PageError />}>
                <ThemeContextProvider>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </ThemeContextProvider>
            </ErrorBoundary>
        </StoreProvider>
    </StrictMode>,
    document.getElementById('root'),
);
