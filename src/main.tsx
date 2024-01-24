import React from "react";
import ReactDOM from "react-dom";
import Inform from "./component/inform";
import Health from "./component/health";
import Family from "./component/family";
import Menu from "./component/menu";
import Protofile from "./component/protofile";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Menu>
      <Protofile />
      <Inform />
      <br />
      <Health />
      <br />
      <Family />
    </Menu>
  </React.StrictMode>,
  rootElement
);
