import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router' 
import './index.css'
import App from './App.jsx'
import CategoryContextProvider from './context/Context.jsx'
 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CategoryContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CategoryContextProvider>
  </StrictMode>,
)
