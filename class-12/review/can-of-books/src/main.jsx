import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      {/* Add content for the home page */}
    </div>
  );
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
    <App />
  </React.StrictMode>
);

// export default main;
