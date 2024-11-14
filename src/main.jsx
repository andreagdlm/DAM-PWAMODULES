import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import ReactDOM from 'react-dom/client';
import './share/css/allPages.css';
import AppAllModules from './AppAllModules';
//import './index.css'
//import App from './App.jsx'
//import AppDemo from './AppDemo';
import { Provider } from "react-redux";
import store from '../src/ecommerce/redux/store/store';

// VARIABLES PARA BD
const apiUrl = import.meta.env.VITE_API_URL; // API URL
const dbConnection = import.meta.env.VITE_DB_CONNECTION; // Conexión a DB

console.log("API URL:", apiUrl);
console.log("DB Connection String:", dbConnection);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Provider store={store}>
      <AppAllModules />
      {/*  <AppDemo />  */}
    </Provider>
  </React.StrictMode>,
);

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App /> 
//   </StrictMode>,
// )
