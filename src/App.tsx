import React from "react";
import { Provider } from "react-redux";
import { store } from "./state";
import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";

import Routes from "./routes";
import theme from "./theme";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme()}>
          <CssBaseline />
          <Routes />
        </ThemeProvider>
      </StyledEngineProvider>
    </Provider>
  );
};

export default App;
