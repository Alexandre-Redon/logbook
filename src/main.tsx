import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ApiProvider } from "./context/ApiProvider.tsx";
import { CartProvider } from "./context/Cart";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <ApiProvider>
      <CartProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CartProvider>
    </ApiProvider>
);
