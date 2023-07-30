import { render } from "react-dom";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";

import App from "app/App";
import {ThemeContextProvider} from "app/providers/ThemeProvider";

import "./shared/config/i18n/i18n";

render(
  <StrictMode>
    <ThemeContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeContextProvider>
  </StrictMode>,
  document.getElementById("root")
)