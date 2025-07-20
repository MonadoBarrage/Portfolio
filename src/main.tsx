import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import Biography from "./pages/biography/Biography.tsx";

createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="biography" element={<Biography />} />
      </Routes>
      {/* <App /> */}
    </StrictMode>
  </HashRouter>,
);
