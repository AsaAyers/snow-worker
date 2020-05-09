import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

async function testAsync() {
  await Promise.resolve()
  console.log('Hello async function')
}
testAsync()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
