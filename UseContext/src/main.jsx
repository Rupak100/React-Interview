import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Products from './Context/Products.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Products>

    <App />
  </Products>
  </StrictMode>,
)
