import React from "react";
import ReactDOMClient from "react-dom/client";
import { DivPx } from "./screens/DivPx";
import { DivColorBgSubtle } from "./screens/DivColorBgSubtle";
import { App } from "./App";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
// root.render(<DivPx />);
root.render(<App />);

