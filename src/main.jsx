import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import NavbarEvent from "./components/NavbarEvent.jsx";
import FooterEvent from "./components/FooterEvent.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NavbarEvent />
    <App />
    <FooterEvent />
  </StrictMode>
);
