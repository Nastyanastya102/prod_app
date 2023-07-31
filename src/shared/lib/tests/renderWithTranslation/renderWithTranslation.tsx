import { render } from '@testing-library/react'
import React, { ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'

import i18nTesting from "shared/config/i18n/i18nTesting"

export const RenderWithTranslation = (component: ReactNode) => {
  return (
    render(
      <I18nextProvider i18n={i18nTesting}>
        {component}
      </I18nextProvider>
    )
  )
}
