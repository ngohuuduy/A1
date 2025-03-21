import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import RouterCustom from "./router.jsx";
import { BrowserRouter } from "react-router-dom";
import "./style/style.scss";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <RouterCustom />
  </BrowserRouter>
);
