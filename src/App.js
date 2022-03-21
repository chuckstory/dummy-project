import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider } from "styled-components";
import themes from "./shared/themes";
import Routes from './shared/routes';

import { CssBaseline, StyledEngineProvider } from "@mui/material";

const initialState = {
  isOpen: [], // for active default menu
  fontFamily: `'Roboto', sans-serif`,
  borderRadius: 12,
  opened: true,
};

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes(initialState)}>
        <CssBaseline />
        <Routes />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
