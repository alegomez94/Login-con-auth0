import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';

//* Aca esta el domain y el client id , los datos se ponen en el archivo .env
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <React.StrictMode>
    
    <Auth0Provider 
     domain={domain}
     clientId={clientId}
    
    
     //redirectUri es para poner la ruta de redireccion una vez logeado , en este caso window.location.origin te manda 
     // a la pantalla anterior del logeo.
   
   
   
     redirectUri={window.location.origin}
     >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
