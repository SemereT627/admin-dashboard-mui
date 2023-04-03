import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import "./locales/i18n";

import App from "./App";
import AdapterDateFns from "@material-ui/lab/AdapterDateFns";
import reportWebVitals from "./reportWebVitals";
import { HelmetProvider } from "react-helmet-async";
import { LocalizationProvider } from "@material-ui/lab";
import { SettingsProvider } from "./contexts/SettingsContext";
import { BrowserRouter } from "react-router-dom";
import { CollapseDrawerProvider } from "./contexts/CollapseDrawerContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HelmetProvider>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <SettingsProvider>
        <CollapseDrawerProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </CollapseDrawerProvider>
      </SettingsProvider>
    </LocalizationProvider>
  </HelmetProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
