import React from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";

import "./styles.css";

function App() {
  return (
    <Button variant="contained" color="primary">
      Hello World
    </Button>
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
