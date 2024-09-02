import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BudgetsProvider } from './Contexts/BudgetContext';

const root = ReactDOM.createRoot(document.getElementById('root')); // Updated API
root.render(
  <React.StrictMode>
    <BudgetsProvider>
      <App />
    </BudgetsProvider>
  </React.StrictMode>
);
