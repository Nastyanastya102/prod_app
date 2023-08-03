import { render } from '@testing-library/react';
import React, { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';

import i18nTesting from 'shared/config/i18n/i18nTesting';

export interface IRenderComponent {
  route?: string;
}
export const ComponentRender = (component: ReactNode, options: IRenderComponent = {}) => {
    const {
        route = '/',
    } = options;
    return render(
        <MemoryRouter initialEntries={[route]}>
            <I18nextProvider i18n={i18nTesting}>
                {component}
            </I18nextProvider>
        </MemoryRouter>,
    );
};
