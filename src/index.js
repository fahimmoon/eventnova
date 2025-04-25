import React from 'react';
import ReactDOM from 'react-dom/client';
import 'aos/dist/aos.css';  // Import AOS CSS first
import './styles/globals.css';  // Import globals.css next
import './index.css';  // Import index.css last
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
