import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

export default function reactAppInit() {
  const container = document.getElementById('root')
  if (!container) {
    console.error('No #root element found in HTML!')
    return
  }

  const root = createRoot(container)
  root.render(<App />)
}

