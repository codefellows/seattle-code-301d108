import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css'

let CLIENT_ID = import.meta.env.VITE_AUTH0_CLIENT_ID;
let DOMAIN = import.meta.env.VITE_AUTH0_DOMAIN;
let REDIRECT_URI = import.meta.env.VITE_AUTH0_REDIRECT_URI;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain={DOMAIN}
      clientId={CLIENT_ID}
      authorizationParams={{
        redirect_uri: REDIRECT_URI
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
)
