import React from 'react'
import ReactDOM from 'react-dom/client'
import FirstApp from './FirstApp';
import './styles.css';

ReactDOM.createRoot( document.getElementById('root') ).render(
  <React.StrictMode>
    <FirstApp titulo='Titulo por Props' /* texto='Texto desde props' *//>
  </React.StrictMode>
)