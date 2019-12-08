import React from "react";
import ReactDOM from "react-dom";
import { Transaction } from "Features";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import dayjs from "dayjs";
import "dayjs/locale/id";
import * as serviceWorker from "./serviceWorker";

const App = () => {
  dayjs.locale("id");
  return <Transaction />;
};

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
