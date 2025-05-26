import React from "react";
import "./App.css";
import "./assets/css/globals.css";
// import "./assets/css/react-slick.css";
// import "slick-carousel/slick/slick.css";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useRoutes } from "react-router-dom";
import { base } from 'viem/chains';
import { OnchainKitProvider } from '@coinbase/onchainkit';
import Router from "./routes/Router";
import '@coinbase/onchainkit/styles.css';
import theme from "./theme";

function App() {
  const routing = useRoutes(Router);
  return (
    <OnchainKitProvider apiKey="YOUR_API_KEY" chain={base}>
      <ThemeProvider theme={theme}>
        <div className="App">{routing}</div>
      </ThemeProvider>
    </OnchainKitProvider>
  );
}

export default App;
