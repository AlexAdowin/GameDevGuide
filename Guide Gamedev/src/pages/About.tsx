import { usePersistence } from '../hooks/usePersistence';

export default function About() {
  const { progress, resetProgress } = usePersistence();

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="about-page">
      <style>{`
        .about-page {
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem 1.5rem;
        }

        .page-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .page-title {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
          background: linear-gradient(135deg, var(--text-primary) 30%, var(--accent) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .page-subtitle {
          color: var(--text-secondary);
        }

        .content-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 2rem;
          margin-bottom: 1.5rem;
        }

        .content-card h2 {
          font-size: 1.4rem;
          margin-bottom: 1rem;
          color: var(--accent);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .content-card p {
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 1rem;
        }

        .content-card p:last-child {
          margin-bottom: 0;
        }

        .feature-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1rem;
          margin-top: 1rem;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem;
          background: var(--bg-secondary);
          border-radius: 10px;
          border: 1px solid var(--border);
        }

        .feature-icon {
          font-size: 1.5rem;
        }

        .feature-text {
          font-size: 0.9rem;
          color: var(--text-primary);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 1rem;
          margin-top: 1rem;
        }

        .stat-box {
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 1.25rem;
          text-align: center;
        }

        .stat-value {
          font-family: var(--font-mono);
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--accent);
          display: block;
        }

        .stat-label {
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-top: 0.25rem;
        }

        .reset-section {
          background: rgba(239, 68, 68, 0.05);
          border: 1px solid rgba(239, 68, 68, 0.2);
          border-radius: 12px;
          padding: 1.5rem;
          margin-top: 1rem;
        }

        .reset-section h3 {
          color: var(--danger);
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
        }

        .reset-section p {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-bottom: 1rem;
        }

        .reset-btn {
          background: var(--danger);
          color: #fff;
          border: none;
          padding: 0.6rem 1.25rem;
          border-radius: 8px;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .reset-btn:hover {
          transform: scale(1.02);
          box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
        }

        .credits {
          text-align: center;
          padding: 2rem;
          color: var(--text-muted);
          font-size: 0.85rem;
        }

        .credits a {
          color: var(--accent);
          text-decoration: none;
        }

        .credits a:hover {
          text-decoration: underline;
        }

        @media (min-width: 768px) {
          .page-title {
            font-size: 3rem;
          }
        }
      `}</style>

      <header className="page-header">
        <h1 className="page-title">ℹ️ À Propos</h1>
        <p className="page-subtitle">Tout sur ce guide de développement de jeux</p>
      </header>

      <div className="content-card">
        <h2>💡 Qu'est-ce que Guide Gamedev ?</h2>
        <p>
          Guide Gamedev est une roadmap interactive et complète pour apprendre le développement
          de jeux indépendants avec Godot 4. Plus qu'un simple listado de tutoriels,
          c'est un véritable compagnon de voyage pour quiconque souhaite créer des jeux 2D mémorables.
        </p>
        <p>
          Inspiré par les plus grands chefs-d'œuvre indie comme Hollow Knight, Rain World,
          Celeste ou Dead Cells, ce guide condense les meilleures ressources YouTube,
          les livres essentiels et les conférences GDC en 25 modules progressifs.
        </p>
      </div>

      <div className="content-card">
        <h2>✨ Fonctionnalités</h2>
        <div className="feature-grid">
          <div className="feature-item">
            <span className="feature-icon">🗺️</span>
            <span className="feature-text">25 modules progressifs du débutant à l'expert</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">📺</span>
            <span className="feature-text">150+ ressources vidéo curatées</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">💾</span>
            <span className="feature-text">Sauvegarde automatique de ta progression</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">🎮</span>
            <span className="feature-text">8 analyses de jeux mythiques</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">⭐</span>
            <span className="feature-text">Système de favoris et favoris chaînes</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">🌓</span>
            <span className="feature-text">Thème sombre et clair avec gradient métallique</span>
          </div>
        </div>
      </div>

      <div className="content-card">
        <h2>📊 Ta Progression</h2>
        <div className="stats-grid">
          <div className="stat-box">
            <span className="stat-value">{progress.completedModules.length}</span>
            <span className="stat-label">Modules terminés</span>
          </div>
          <div className="stat-box">
            <span className="stat-value">{progress.unlockedModules.length}</span>
            <span className="stat-label">Modules déverrouillés</span>
          </div>
          <div className="stat-box">
            <span className="stat-value">{progress.favoriteChannels.length}</span>
            <span className="stat-label">Chaînes favorites</span>
          </div>
          <div className="stat-box">
            <span className="stat-value">{progress.favoriteGames.length}</span>
            <span className="stat-label">Jeux favoris</span>
          </div>
          <div className="stat-box">
            <span className="stat-value">{progress.totalVisits}</span>
            <span className="stat-label">Visites totales</span>
          </div>
        </div>

        <div className="reset-section">
          <h3>🔄 Réinitialiser la progression</h3>
          <p>
            Ta progression est sauvegardée automatiquement dans ton navigateur.
           Dernière visite : {formatDate(progress.lastVisit)}
          </p>
          <button className="reset-btn" onClick={resetProgress}>
            Réinitialiser tout
          </button>
        </div>
      </div>

      <div className="content-card">
        <h2>🛠️ Stack Technique</h2>
        <p>
          Ce projet estBuilt avec <strong>React 19</strong> + <strong>TypeScript</strong> +
          <strong>Vite</strong> pour des performances optimales. Il utilise{' '}
          <strong>React Router</strong> pour la navigation multi-pages et le localStorage
          pour persister tes données.
        </p>
        <p>
          Les design repose sur des gradients métalliques subtils, des animations fluides
          et une interface accessible qui s'adapte aussi bien au desktop qu'au mobile.
        </p>
      </div>

      <div className="content-card">
        <h2>🤝 Remerciements</h2>
        <p>
          Ce guide n'existerait pas sans les créateurs de contenu incroyables qui partagent
          leur savoir gratuitement : GDQuest, HeartBeast, Game Endeavor, GMTK, et tous les autres.
        </p>
        <p>
          Remerciements spéciaux à Team Cherry pour Hollow Knight, Massive Monster pour Cult of the Lamb,
          et à tous les développeurs indie qui nous inspirent quotidiennement.
        </p>
      </div>

      <div className="credits">
        <p>
          Fait avec ❤️ pour la communauté indie game dev française.
        </p>
        <p style={{ marginTop: '0.5rem' }}>
          © 2026 — Guide Gamedev — "Fais moins, mais fais-le mieux."
        </p>
      </div>
    </div>
  );
}