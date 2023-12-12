import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ApiProvider } from "./context/ApiProvider.tsx";
import { CartProvider } from "./context/Cart";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApiProvider>
      <CartProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CartProvider>
    </ApiProvider>
  </React.StrictMode>
);
