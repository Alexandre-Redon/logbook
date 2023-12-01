import React from "react";
import { Navigate } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1>404</h1>
      <p>Page not found</p>
      <Navigate to="/" />
    </div>
  );
};

export default ErrorPage;
