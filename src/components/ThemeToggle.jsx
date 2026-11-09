import { FiMoon, FiSun } from 'react-icons/fi'

export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      type="button"
      className="theme-toggle-btn"
      onClick={toggleTheme}
      aria-label={`Beralih ke mode ${theme === 'dark' ? 'terang' : 'gelap'}`}
      title={`Mode ${theme === 'dark' ? 'Terang' : 'Gelap'}`}
    >
      <span className="theme-toggle-icon" aria-hidden="true">
        {theme === 'dark' ? <FiSun /> : <FiMoon />}
      </span>
      <span className="theme-toggle-label">{theme === 'dark' ? 'Light' : 'Dark'}</span>
    </button>
  )
}

