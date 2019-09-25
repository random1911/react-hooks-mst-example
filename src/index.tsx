import React from "react";
import { render } from "react-dom";
import { createStore } from "./store/storeContext";
import App from "./App";

createStore();
render(<App />, document.getElementById("root"));
