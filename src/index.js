import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import MenuContext from "./Context/MenuOpen/MenuContext";
import LoadingContext, { LoadingCon } from "./Context/LoadingContext/LoadingContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LoadingContext>

    <MenuContext>
      <App />
    </MenuContext>
    </LoadingContext>
  </React.StrictMode>
);
