import { useState } from 'react';
import { Link } from 'react-router-dom';
import { gamesLoreData } from '../data/gamesData';
import { usePersistence } from '../hooks/usePersistence';

export default function GamesLore() {
  const [searchQuery, setSearchQuery] = useState('');
  const { progress, toggleFavoriteGame, markGameVisited } = usePersistence();

  const filteredGames = gamesLoreData.filter(game =>
    game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    game.genre.toLowerCase().includes(searchQuery.toLowerCase()) ||
    game.developer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCardClick = (gameId: number) => {
    markGameVisited(gameId);
  };

  return (
    <div className="games-lore-page">
      <style>{`
        .games-lore-page {
          max-width: 1000px;
          margin: 0 auto;
          padding: 2rem 1.5rem;
        }

        .page-header {
          text-align: center;
          margin-bottom: 2.5rem;
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
          font-size: 1rem;
        }

        .stats-bar {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 2rem;
        }

        .stat-pill {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          padding: 0.4rem 0.8rem;
          border-radius: 8px;
          background: var(--bg-card);
          border: 1px solid var(--border);
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .stat-value {
          color: var(--accent);
          font-weight: 600;
        }

        .controls {
          margin-bottom: 2rem;
        }

        .search-input {
          width: 100%;
          max-width: 400px;
          margin: 0 auto;
          display: block;
          padding: 0.85rem 1.25rem;
          border-radius: 10px;
          border: 1px solid var(--border);
          background: var(--bg-card);
          color: var(--text-primary);
          font-size: 0.95rem;
          outline: none;
          transition: all 0.3s ease;
        }

        .search-input:focus {
          border-color: var(--accent);
          box-shadow: 0 0 15px var(--accent-glow);
        }

        .games-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .game-card-link {
          text-decoration: none;
          display: block;
        }

        .game-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 1.75rem;
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          position: relative;
          overflow: hidden;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .game-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--accent), var(--accent-2));
          transform: scaleX(0);
          transition: transform 0.35s ease;
        }

        .game-card:hover {
          border-color: var(--accent);
          transform: translateY(-6px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.25);
        }

        .game-card:hover::before {
          transform: scaleX(1);
        }

        .game-card.favorited {
          border-color: var(--warning);
        }

        .game-card.favorited::before {
          background: var(--warning);
          transform: scaleX(1);
        }

        .game-card.new::before {
          background: var(--success);
          transform: scaleX(1);
        }

        .game-header-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.75rem;
        }

        .game-emoji {
          font-size: 2.5rem;
        }

        .favorite-btn {
          background: none;
          border: none;
          font-size: 1.35rem;
          cursor: pointer;
          opacity: 0.3;
          transition: all 0.2s ease;
          padding: 0.25rem;
        }

        .favorite-btn:hover {
          opacity: 1;
          transform: scale(1.2);
        }

        .game-card.favorited .favorite-btn {
          opacity: 1;
        }

        .game-title {
          font-size: 1.35rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }

        .game-meta {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin-bottom: 1rem;
        }

        .meta-tag {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          padding: 0.25rem 0.55rem;
          border-radius: 6px;
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          color: var(--text-muted);
        }

        .meta-tag.highlight {
          color: var(--accent);
        }

        .game-summary {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.6;
          flex-grow: 1;
          margin-bottom: 1.25rem;
        }

        .game-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 1rem;
          border-top: 1px solid var(--border);
          margin-top: auto;
        }

        .read-more {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--accent);
          display: flex;
          align-items: center;
          gap: 0.4rem;
          transition: gap 0.25s ease;
        }

        .game-card:hover .read-more {
          gap: 0.7rem;
        }

        .lore-preview {
          font-size: 0.8rem;
          color: var(--text-muted);
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }

        .empty-state {
          text-align: center;
          padding: 4rem 2rem;
          color: var(--text-muted);
        }

        .empty-state h3 {
          font-size: 1.35rem;
          margin-bottom: 0.5rem;
          color: var(--text-secondary);
        }

        .empty-state p {
          font-size: 0.95rem;
        }

        @media (min-width: 768px) {
          .page-title {
            font-size: 3rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .game-card {
            transition: none;
          }
        }
      `}</style>

      <header className="page-header">
        <h1 className="page-title">🎮 Jeux & Lore</h1>
        <p className="page-subtitle">
          Étudie les masters du indie game pour comprendre leur conception
        </p>
      </header>

      <div className="stats-bar">
        <div className="stat-pill">
          <span>📚</span>
          <span className="stat-value">{gamesLoreData.length}</span>
          <span>jeux analysés</span>
        </div>
        <div className="stat-pill">
          <span>⭐</span>
          <span className="stat-value">{progress.favoriteGames.length}</span>
          <span>favoris</span>
        </div>
        <div className="stat-pill">
          <span>👀</span>
          <span className="stat-value">{progress.visitedGames.length}</span>
          <span>vus</span>
        </div>
      </div>

      <div className="controls">
        <input
          type="text"
          placeholder="Rechercher un jeu, genre ou développeur..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="games-grid">
        {filteredGames.map(game => {
          const isNew = !progress.visitedGames.includes(game.id);
          const isFavorited = progress.favoriteGames.includes(game.id);

          return (
            <Link
              key={game.id}
              to={`/games/${game.id}`}
              className="game-card-link"
              onClick={() => handleCardClick(game.id)}
            >
              <div className={`game-card ${isFavorited ? 'favorited' : ''} ${isNew ? 'new' : ''}`}>
                <div className="game-header-row">
                  <span className="game-emoji">{game.emoji}</span>
                  <button
                    className="favorite-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      toggleFavoriteGame(game.id);
                    }}
                  >
                    {isFavorited ? '⭐' : '☆'}
                  </button>
                </div>

                <h3 className="game-title">{game.title}</h3>

                <div className="game-meta">
                  <span className="meta-tag highlight">{game.developer}</span>
                  <span className="meta-tag">{game.year}</span>
                  <span className="meta-tag">{game.genre}</span>
                </div>

                <p className="game-summary">{game.summary}</p>

                <div className="game-footer">
                  <span className="lore-preview">
                    📜 {game.lore.length} points de lore
                  </span>
                  <span className="read-more">
                    Découvrir →
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {filteredGames.length === 0 && (
        <div className="empty-state">
          <h3>Aucun jeu trouvé</h3>
          <p>Essaye avec d'autres mots-clés</p>
        </div>
      )}
    </div>
  );
}