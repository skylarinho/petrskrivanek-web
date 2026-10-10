import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import '@fontsource/big-shoulders-display/latin-800'
import '@fontsource/big-shoulders-display/latin-ext-800'
import '@fontsource/schibsted-grotesk/latin-400.css'
import '@fontsource/schibsted-grotesk/latin-ext-400.css'
import '@fontsource/schibsted-grotesk/latin-500.css'
import '@fontsource/schibsted-grotesk/latin-ext-500.css'
import '@fontsource/schibsted-grotesk/latin-700.css'
import '@fontsource/schibsted-grotesk/latin-ext-700.css'
import './index.css'
import './site.css'
import App from './App.tsx'
import { langFromPath } from './i18n'

const root = document.getElementById('root')!
const app = (
  <StrictMode>
    <App lang={langFromPath(window.location.pathname)} />
  </StrictMode>
)

// Produkční HTML je předrenderované (scripts/prerender.mjs), vývojový server ne.
if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)
