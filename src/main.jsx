import { StrictMode, Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

const App = lazy(async () => {
  const [module] = await Promise.all([
    import('./App.jsx'),
    new Promise((resolve) => setTimeout(resolve, 450)),
  ])
  return module
})

function AppLoader() {
  return (
    <div className="app-loader" role="status" aria-live="polite" aria-label="Memuat website">
      <div className="app-loader-ring" />
      <div className="app-loader-core" />
      <p>Preparing...</p>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<AppLoader />}>
      <App />
    </Suspense>
  </StrictMode>,
)
