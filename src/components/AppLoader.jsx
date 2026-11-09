export default function AppLoader() {
  return (
    <div className="app-loader" role="status" aria-live="polite" aria-label="Memuat website">
      <div className="app-loader-content">
        <div className="app-loader-visual">
          <div className="app-loader-ring" />
          <div className="app-loader-core" />
        </div>
        <p className="app-loader-text">Kamilah Dwianti</p>
        <span className="app-loader-subtext">Preparing portfolio experience...</span>
      </div>
    </div>
  )
}

