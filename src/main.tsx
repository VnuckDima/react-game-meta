import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme/index.ts";
import { Provider } from "react-redux";
import store from "./store/store.ts"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
    </Provider>
  </React.StrictMode>
);
