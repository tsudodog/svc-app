import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

// function App() {
//   return (
//     <MuiThemeProvider theme={theme}>
//       <Button variant="contained" color="primary">
//         Hello World
//       </Button>
//     </MuiThemeProvider>
//   );
// }

// function App2() {
//   return (
//     <div className="App2">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <h1>Hello</h1>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, window.document.getElementById("app"));

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
// ReactDOM.render(<App2 />, document.querySelector("#app"));
