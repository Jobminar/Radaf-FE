
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; 
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.render(
  <GoogleOAuthProvider clientId="967489170200-vj0aa4q12aovbb3jt69dkb32cm8b0m1f.apps.googleusercontent.com">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GoogleOAuthProvider>,
  document.getElementById('root')
);
