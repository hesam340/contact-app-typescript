import App from "./App.tsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";

import "./index.css";

import TanstackProvider from "@/core/configs/TanstackProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TanstackProvider>
      <App />
      <ToastContainer position="top-center" autoClose={3000} />
    </TanstackProvider>
  </StrictMode>
);
