import React from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import theme from "./customTheme.js";
import { MuiThemeProvider } from "@material-ui/core/styles";

import "./styles.css";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </MuiThemeProvider>
  );
}

function App2() {
  return (
    <div className="App2">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

ReactDOM.render(<App2 />, document.querySelector("#app"));
