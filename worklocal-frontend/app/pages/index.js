import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import googleauthprovider from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <googleauthprovider clientId="253108701359-sbui25ecoecv0h1fvm7ei02boteakl26.apps.googleusercontent.com">
    <AuthProvider>
      <App />
    </AuthProvider>
    </googleauthprovider>
  </React.StrictMode>
);
