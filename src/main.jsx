import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import '@fontsource/jetbrains-mono/400.css'
import '@fontsource/jetbrains-mono/700.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/600.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/theme.css'
import './styles/animations.css'
import './styles/components.css'
import './styles/overrides.scss'

import App from './App.jsx'
import { initAccent } from './utils/accent'

initAccent()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
