// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// // fonts

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
// reportWebVitals();

// Import necessary dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Replace with your main component
import { GoogleOAuthProvider } from "@react-oauth/google";

// Render the entire application inside GoogleOAuthProvider
ReactDOM.render(
  <GoogleOAuthProvider clientId="your-client-id">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GoogleOAuthProvider>,
  document.getElementById('root')
);
