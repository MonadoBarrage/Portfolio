// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ScrollRestoration } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import Guardian from "./pages/projects/project-sites/guardian.tsx";
import Blossomhack from "./pages/projects/project-sites/blossomhack.tsx";
import Error from "./pages/error/Error.tsx";

import { createHashRouter, RouterProvider } from "react-router-dom";

const router = createHashRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollRestoration />
        <App />
      </>
    ),
  },
  {
    path: "guardian",
    element: (
      <>
        <ScrollRestoration />
        <Guardian />
      </>
    ),
  },
  {
    path: "blossomhack",
    element: (
      <>
        <ScrollRestoration />
        <Blossomhack />
      </>
    ),
  },
  {
    path: "*",
    element: (
      <>
        <ScrollRestoration />
        <Error />
      </>
    ),
  },
]);
const root = document.getElementById("root");
if (!root) {
  throw Error;
}

createRoot(root).render(<RouterProvider router={router} />);
