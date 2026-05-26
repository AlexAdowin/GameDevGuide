import { Link, useLocation, Outlet } from 'react-router-dom';
import { usePersistence } from '../hooks/usePersistence';

export default function Layout() {
  const location = useLocation();
  const { progress, setTheme, resetProgress } = usePersistence();
  const theme = progress.theme;

  const navItems = [
    { path: '/', label: 'Roadmap', icon: '🗺️' },
    { path: '/games', label: 'Jeux & Lore', icon: '🎮' },
    { path: '/about', label: 'À Propos', icon: 'ℹ️' },
  ];

  return (
    <div className={`app-wrapper ${theme}`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;700&family=Space+Grotesk:wght@500;600;700&display=swap');

        :root {
          --transition-theme: background 0.5s cubic-bezier(0.4, 0, 0.2, 1), color 0.3s ease;
          --font-title: 'Space Grotesk', sans-serif;
          --font-body: 'Inter', sans-serif;
          --font-mono: 'JetBrains Mono', monospace;
        }

        .app-wrapper.dark {
          --bg-primary: #0a0a0f;
          --bg-secondary: #111827;
          --bg-card: rgba(255, 255, 255, 0.03);
          --bg-card-hover: rgba(255, 255, 255, 0.07);
          --border: rgba(255, 255, 255, 0.08);
          --border-hover: rgba(99, 102, 241, 0.4);
          --text-primary: #f1f5f9;
          --text-secondary: #94a3b8;
          --text-muted: #475569;
          --accent: #6366f1;
          --accent-2: #8b5cf6;
          --accent-glow: rgba(99, 102, 241, 0.15);
          --success: #10b981;
          --warning: #f59e0b;
          --danger: #ef4444;
          background: linear-gradient(135deg,
            #0f0f12 0%,
            #1a1a24 10%,
            #12121a 20%,
            #1c1c28 30%,
            #0f0f15 40%,
            #15151f 50%,
            #1a1a26 60%,
            #0e0e14 70%,
            #181824 80%,
            #101018 90%,
            #1a1a28 100%
          );
          background-size: 400% 400%;
          animation: gradientShift 15s ease infinite;
        }

        .app-wrapper.dark::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background:
            radial-gradient(ellipse at 20% 20%, rgba(99, 102, 241, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 80%, rgba(139, 92, 246, 0.06) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 50%, rgba(16, 185, 129, 0.03) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }

        .app-wrapper.dark::after {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            180deg,
            rgba(255,255,255,0.02) 0%,
            transparent 20%,
            transparent 80%,
            rgba(255,255,255,0.01) 100%
          );
          pointer-events: none;
          z-index: 0;
        }

        .app-wrapper.light {
          --bg-primary: #fafafa;
          --bg-secondary: #f1f5f9;
          --bg-card: #ffffff;
          --bg-card-hover: #f8fafc;
          --border: #e2e8f0;
          --border-hover: #6366f1;
          --text-primary: #0f172a;
          --text-secondary: #475569;
          --text-muted: #94a3b8;
          --accent: #4f46e5;
          --accent-2: #7c3aed;
          --accent-glow: rgba(79, 70, 229, 0.08);
          --success: #10b981;
          --warning: #d97706;
          --danger: #dc2626;
          background: linear-gradient(135deg,
            #f8f9fa 0%,
            #e9ecef 20%,
            #f5f6f8 40%,
            #e8e9ed 60%,
            #f4f5f7 80%,
            #eaebef 100%
          );
          background-size: 400% 400%;
          animation: gradientShift 15s ease infinite;
        }

        .app-wrapper.light::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background:
            radial-gradient(ellipse at 30% 30%, rgba(79, 70, 229, 0.06) 0%, transparent 50%),
            radial-gradient(ellipse at 70% 70%, rgba(124, 58, 237, 0.04) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 50%, rgba(16, 185, 129, 0.02) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }

        .app-wrapper.light::after {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            180deg,
            rgba(255,255,255,0.5) 0%,
            transparent 30%,
            transparent 70%,
            rgba(255,255,255,0.3) 100%
          );
          pointer-events: none;
          z-index: 0;
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          background-color: transparent;
        }

        .app-wrapper {
          color: var(--text-primary);
          font-family: var(--font-body);
          min-height: 100vh;
          transition: var(--transition-theme);
          padding-bottom: 5rem;
          line-height: 1.6;
          overflow-x: hidden;
          position: relative;
        }

        .app-wrapper > *:not(.app-wrapper > style) {
          position: relative;
          z-index: 1;
        }

        .top-bar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.75rem 1.5rem;
          background: rgba(10, 10, 15, 0.8);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--border);
        }

        .light .top-bar {
          background: rgba(250, 250, 250, 0.85);
        }

        .logo {
          font-family: var(--font-title);
          font-size: 1.1rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          color: var(--accent);
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .logo-icon {
          font-size: 1.3rem;
        }

        .nav-links {
          display: flex;
          gap: 0.25rem;
        }

        .nav-link {
          font-family: var(--font-title);
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--text-secondary);
          text-decoration: none;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          transition: all 0.25s ease;
          position: relative;
        }

        .nav-link:hover {
          color: var(--text-primary);
          background: var(--bg-card);
        }

        .nav-link.active {
          color: var(--accent);
          background: var(--bg-card);
        }

        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: 2px;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--accent);
        }

        .nav-link .icon {
          margin-right: 0.4rem;
        }

        .controls {
          display: flex;
          gap: 0.5rem;
          align-items: center;
        }

        .control-btn {
          background: var(--bg-card);
          border: 1px solid var(--border);
          padding: 0.5rem 0.75rem;
          border-radius: 8px;
          color: var(--text-secondary);
          cursor: pointer;
          font-size: 0.85rem;
          transition: all 0.25s ease;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .control-btn:hover {
          border-color: var(--accent);
          color: var(--text-primary);
          transform: scale(1.02);
        }

        .control-btn.reset {
          color: var(--danger);
        }

        .control-btn.reset:hover {
          border-color: var(--danger);
          background: rgba(239, 68, 68, 0.1);
        }

        .progress-badge {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          padding: 0.25rem 0.6rem;
          border-radius: 6px;
          background: var(--bg-card);
          border: 1px solid var(--border);
          color: var(--accent);
        }

        .main-content {
          padding-top: 5rem;
          min-height: 100vh;
        }

        @media (max-width: 640px) {
          .top-bar {
            flex-direction: column;
            gap: 0.75rem;
            padding: 0.75rem;
          }
          .nav-links {
            order: 2;
          }
          .controls {
            order: 1;
          }
          .nav-link {
            padding: 0.4rem 0.75rem;
            font-size: 0.8rem;
          }
          .nav-link .icon {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .app-wrapper.dark, .app-wrapper.light {
            animation: none;
          }
        }
      `}</style>

      <header className="top-bar">
        <Link to="/" className="logo">
          <span className="logo-icon">🎮</span>
          <span>Guide Gamedev</span>
        </Link>

        <nav className="nav-links">
          {navItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
            >
              <span className="icon">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="controls">
          <span className="progress-badge">
            {progress.completedModules.length}/25 modules • {progress.totalVisits} visites
          </span>
          <button
            className="control-btn"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <button
            className="control-btn reset"
            onClick={resetProgress}
            title="Réinitialiser la progression"
          >
            🔄
          </button>
        </div>
      </header>

      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}