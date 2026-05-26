import { useParams, Link } from 'react-router-dom';
import { gamesLoreData } from '../data/gamesData';
import { usePersistence } from '../hooks/usePersistence';

export default function GamePage() {
  const { id } = useParams<{ id: string }>();
  const gameId = parseInt(id || '1');
  const game = gamesLoreData.find(g => g.id === gameId);
  const { progress, toggleFavoriteGame } = usePersistence();

  if (!game) {
    return (
      <div className="game-not-found">
        <style>{`
          .game-not-found {
            max-width: 600px;
            margin: 4rem auto;
            padding: 2rem;
            text-align: center;
          }
          .game-not-found h1 {
            font-size: 2rem;
            margin-bottom: 1rem;
            color: var(--danger);
          }
          .game-not-found p {
            color: var(--text-secondary);
            margin-bottom: 2rem;
          }
          .back-link {
            display: inline-block;
            padding: 0.75rem 1.5rem;
            background: var(--accent);
            color: #fff;
            text-decoration: none;
            border-radius: 8px;
            font-weight: 600;
          }
        `}</style>
        <h1>Jeu non trouvé</h1>
        <p>Ce jeu n'existe pas dans notre base de données.</p>
        <Link to="/games" className="back-link">← Retour aux jeux</Link>
      </div>
    );
  }

  const isFavorited = progress.favoriteGames.includes(game.id);

  return (
    <div className="game-page">
      <style>{`
        .game-page {
          max-width: 900px;
          margin: 0 auto;
          padding: 2rem 1.5rem;
        }

        .back-nav {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.9rem;
          margin-bottom: 2rem;
          transition: color 0.25s ease;
        }

        .back-nav:hover {
          color: var(--accent);
        }

        .game-header {
          text-align: center;
          margin-bottom: 3rem;
          position: relative;
        }

        .game-header::before {
          content: '';
          position: absolute;
          top: -2rem;
          left: 50%;
          transform: translateX(-50%);
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, var(--accent-glow) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }

        .game-emoji-large {
          font-size: 5rem;
          position: relative;
          z-index: 1;
          display: block;
          margin-bottom: 1rem;
        }

        .game-title-large {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          position: relative;
          z-index: 1;
        }

        .game-meta-row {
          display: flex;
          gap: 0.5rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 1.5rem;
          position: relative;
          z-index: 1;
        }

        .meta-tag-large {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          padding: 0.35rem 0.75rem;
          border-radius: 8px;
          background: var(--bg-card);
          border: 1px solid var(--border);
          color: var(--text-secondary);
        }

        .meta-tag-large.highlight {
          color: var(--accent);
          border-color: var(--accent);
        }

        .favorite-toggle {
          background: var(--bg-card);
          border: 1px solid var(--border);
          padding: 0.5rem 1rem;
          border-radius: 8px;
          color: var(--text-primary);
          cursor: pointer;
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.25s ease;
          margin: 0 auto;
        }

        .favorite-toggle:hover {
          border-color: var(--warning);
          transform: scale(1.02);
        }

        .favorite-toggle.favorited {
          background: rgba(245, 158, 11, 0.15);
          border-color: var(--warning);
        }

        .game-summary-large {
          font-size: 1.1rem;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.7;
          position: relative;
          z-index: 1;
        }

        .content-section-large {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 2rem;
          margin-bottom: 1.5rem;
        }

        .section-title-large {
          font-size: 1.4rem;
          margin-bottom: 1.25rem;
          color: var(--accent);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .lore-list-large {
          list-style: none;
        }

        .lore-item-large {
          font-size: 0.95rem;
          color: var(--text-secondary);
          padding: 0.75rem 0;
          padding-left: 1.5rem;
          position: relative;
          line-height: 1.6;
          border-bottom: 1px solid rgba(255, 255, 255, 0.03);
        }

        .lore-item-large:last-child {
          border-bottom: none;
        }

        .lore-item-large::before {
          content: '🔮';
          position: absolute;
          left: 0;
          font-size: 0.8rem;
        }

        .inspirations-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .inspiration-chip {
          font-size: 0.9rem;
          padding: 0.5rem 1rem;
          border-radius: 10px;
          background: rgba(139, 92, 246, 0.12);
          border: 1px solid rgba(139, 92, 246, 0.25);
          color: var(--accent-2);
        }

        .lessons-list-large {
          list-style: none;
        }

        .lesson-item-large {
          font-size: 0.95rem;
          color: var(--text-secondary);
          padding: 0.6rem 0;
          padding-left: 1.75rem;
          position: relative;
          line-height: 1.5;
        }

        .lesson-item-large::before {
          content: '💡';
          position: absolute;
          left: 0;
          font-size: 0.9rem;
        }

        .video-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.25rem;
          background: linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(239, 68, 68, 0.05) 100%);
          border: 1px solid rgba(239, 68, 68, 0.3);
          border-radius: 10px;
          color: #ef4444;
          text-decoration: none;
          font-size: 0.95rem;
          transition: all 0.25s ease;
        }

        .video-link:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(239, 68, 68, 0.2);
        }

        .navigation-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1rem;
          margin-top: 2rem;
        }

        .nav-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 1.25rem;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .nav-card:hover {
          border-color: var(--accent);
          transform: translateY(-2px);
        }

        .nav-card-label {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-bottom: 0.25rem;
        }

        .nav-card-title {
          font-size: 1rem;
          color: var(--text-primary);
          font-weight: 600;
        }

        @media (min-width: 768px) {
          .game-title-large {
            font-size: 3.5rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .game-page * {
            transition: none;
          }
        }
      `}</style>

      <Link to="/games" className="back-nav">
        ← Retour aux jeux
      </Link>

      <header className="game-header">
        <span className="game-emoji-large">{game.emoji}</span>
        <h1 className="game-title-large">{game.title}</h1>

        <div className="game-meta-row">
          <span className="meta-tag-large highlight">{game.developer}</span>
          <span className="meta-tag-large">{game.year}</span>
          <span className="meta-tag-large">{game.genre}</span>
          <span className="meta-tag-large">{game.engine}</span>
        </div>

        <button
          className={`favorite-toggle ${isFavorited ? 'favorited' : ''}`}
          onClick={() => toggleFavoriteGame(game.id)}
        >
          {isFavorited ? '⭐' : '☆'} {isFavorited ? 'Retirer des favoris' : 'Ajouter aux favoris'}
        </button>

        <p className="game-summary-large">{game.summary}</p>
      </header>

      <section className="content-section-large">
        <h2 className="section-title-large">📜 L'Histoire & le Lore</h2>
        <ul className="lore-list-large">
          {game.lore.map((item, idx) => (
            <li key={idx} className="lore-item-large">{item}</li>
          ))}
        </ul>
      </section>

      <section className="content-section-large">
        <h2 className="section-title-large">🎯 Inspirations du Développeur</h2>
        <div className="inspirations-grid">
          {game.inspirations.map((item, idx) => (
            <span key={idx} className="inspiration-chip">{item}</span>
          ))}
        </div>
      </section>

      <section className="content-section-large">
        <h2 className="section-title-large">💡 Leçons de Gamedev</h2>
        <ul className="lessons-list-large">
          {game.lessons.map((item, idx) => (
            <li key={idx} className="lesson-item-large">{item}</li>
          ))}
        </ul>
      </section>

      {game.videoAnalysis && (
        <section className="content-section-large">
          <h2 className="section-title-large">🎬 Analyse Vidéo</h2>
          <a
            href={`https://www.youtube.com/results?search_query=${encodeURIComponent(game.videoAnalysis)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="video-link"
          >
            ▶ Regarder l'analyse sur YouTube ↗
          </a>
        </section>
      )}

      <div className="navigation-cards">
        {gamesLoreData.filter(g => g.id !== game.id).slice(0, 3).map(otherGame => (
          <Link key={otherGame.id} to={`/games/${otherGame.id}`} className="nav-card">
            <div className="nav-card-label">Découvrir aussi</div>
            <div className="nav-card-title">{otherGame.emoji} {otherGame.title}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}