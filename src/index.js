import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter} from "react-router-dom";

import Home from "./pages/Home.jsx";
import "./index.css"

ReactDOM.render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>,
  document.getElementById("root")
);
