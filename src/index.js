import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={process.env.REACT_APP_DOMAIN}
      clientId={process.env.REACT_APP_CLIENT_ID}      
      // domain="dev-5zkg9yey.us.auth0.com"
      // clientId="ts3dWrDjZ5ASXYzVfMwGaMCEbXTtfjM6"
      redirectUri={window.location.origin}

    >
      <App />
    </Auth0Provider>,

  </React.StrictMode>
);

// reportWebVitals();
