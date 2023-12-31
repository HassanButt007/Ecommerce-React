import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import { AppProvider } from './context/ProductContext.jsx';
import { FilterContextProvider } from './context/FilterContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <AppProvider>
    <FilterContextProvider>
      <App />
    </FilterContextProvider>
  </AppProvider>

  // </React.StrictMode>,
)
