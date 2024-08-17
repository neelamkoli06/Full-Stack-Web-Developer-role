import React from 'react';
import ReactDOM from 'react-dom/client';
import { UserProvider } from "./components/UserContext";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Register from './components/Register';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>
);

reportWebVitals();
