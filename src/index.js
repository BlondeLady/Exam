import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Стили для базовой страницы
import App from './app'; // Главный компонент

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);