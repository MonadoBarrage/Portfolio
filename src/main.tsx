import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import Biography from "./pages/biography/Biography.tsx";
import Guardian from "./pages/projects/project-sites/guardian.tsx";
import Blossomhack from "./pages/projects/project-sites/blossomhack.tsx";
import Error from "./pages/error/Error.tsx";

createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="biography" element={<Biography />} />
        <Route path="*" element={<Error />} />

        {/* Add new routes here*/}
        <Route path="guardian" element={<Guardian />} />
        <Route path="blossomhack" element={<Blossomhack />} />
      </Routes>
      {/* <App /> */}
    </StrictMode>
  </HashRouter>,
);
