import { useContext } from "react";
import { Navigate, useLocation } from "react-router";

const ProtectedRoute = ({ children }) => {
  const location = useLocation();

  // Sinon, on affiche le composant demandé.
  return children;
};

export default ProtectedRoute;
