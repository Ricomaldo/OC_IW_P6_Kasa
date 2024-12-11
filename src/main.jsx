import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/main.scss";
import Router from "./Router.jsx";
import "/node_modules/@fortawesome/fontawesome-free/css/all.min.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router />
  </StrictMode>
);
