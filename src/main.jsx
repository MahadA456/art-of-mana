import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import roundFavicon from './assets/round.png'

const ensureFavicon = () => {
  const existing = document.querySelector("link[rel~='icon']")
  const link = existing || document.createElement('link')
  link.rel = 'icon'
  link.type = 'image/png'
  link.href = roundFavicon

  if (!existing) {
    document.head.appendChild(link)
  }
}

ensureFavicon()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
