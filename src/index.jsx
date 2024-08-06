import React from "react";
import ReactDOMClient from "react-dom/client";
import { Molight } from "./screens/Molight";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Molight />);
