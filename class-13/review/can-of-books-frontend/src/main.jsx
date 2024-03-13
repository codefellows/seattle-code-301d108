import React from 'react';
import { createRoot } from 'react-dom/client'; // Importing createRoot from react-dom/client
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      {/* Add content for the home page */}
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About Page</h2>
      <p>This is the About page content.</p>
    </div>
  );
}

const root = createRoot(document.getElementById('root')); // Using createRoot from react-dom/client
root.render(
  <React.StrictMode>
    <Home />
    <App />
  </React.StrictMode>
);
