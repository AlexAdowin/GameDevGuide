import { useState, useEffect, useRef } from 'react';
import { modulesData, channelsData, toolsData, booksData, gdcTalksData, phasesData } from '../data/modulesData';
import { usePersistence } from '../hooks/usePersistence';

export default function Home() {
  const [expandedModule, setExpandedModule] = useState<number | null>(null);
  const [filterLevel, setFilterLevel] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const { progress, unlockModule, completeModule, toggleFavoriteChannel } = usePersistence();

  const sectionRefs = {
    hero: useRef<HTMLElement>(null),
    fondations: useRef<HTMLElement>(null),
    roadmap: useRef<HTMLElement>(null),
    modules: useRef<HTMLElement>(null),
    chaines: useRef<HTMLElement>(null),
    outils: useRef<HTMLElement>(null),
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const handleModuleClick = (moduleId: number) => {
    setExpandedModule(expandedModule === moduleId ? null : moduleId);
    unlockModule(moduleId);
  };

  const getYoutubeSearchUrl = (title: string, channel: string) => {
    const query = encodeURIComponent(`${title} ${channel} Godot 4`);
    return `https://www.youtube.com/results?search_query=${query}`;
  };

  const filteredModules = modulesData.filter(mod => {
    const matchesSearch = mod.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          mod.context.toLowerCase().includes(searchQuery.toLowerCase());

    if (filterLevel === 'all') return matchesSearch;
    if (filterLevel === 'beginner') return matchesSearch && mod.level.toLowerCase().includes('débutant');
    if (filterLevel === 'intermediate') return matchesSearch && mod.level.toLowerCase().includes('intermédiaire');
    if (filterLevel === 'advanced') return matchesSearch && mod.level.toLowerCase().includes('avancé');
    return matchesSearch;
  });

  const getLevelBadgeColor = (level: string) => {
    const lower = level.toLowerCase();
    if (lower.includes('débutant') && !lower.includes('intermédiaire') && !lower.includes('avancé')) {
      return '#10b981';
    }
    if (lower.includes('avancé') && !lower.includes('débutant') && !lower.includes('intermédiaire')) {
      return '#f59e0b';
    }
    return '#6366f1';
  };

  const scrollToRef = (ref: React.RefObject<HTMLElement | null>) => {
    if (ref.current) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = ref.current.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="home-page">
      <style>{`
        .home-page {
          max-width: 1100px;
          margin: 0 auto;
          padding: 2rem 1.5rem;
        }

        .animate-on-scroll {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .animate-on-scroll.visible {
          opacity: 1;
          transform: translateY(0);
        }

        h1, h2, h3, h4 {
          font-family: var(--font-title);
          font-weight: 700;
          letter-spacing: -0.02em;
        }

        .hero-section {
          padding: 4rem 0 2rem 0;
          text-align: center;
        }

        .hero-title {
          font-size: 3.5rem;
          line-height: 1.1;
          text-transform: uppercase;
          background: linear-gradient(135deg, var(--text-primary) 30%, var(--accent) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 1rem;
        }

        .hero-subtitle {
          font-size: 1.2rem;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto 2rem auto;
        }

        .marquee-container {
          background: var(--bg-card);
          border: 1px solid var(--border);
          padding: 0.6rem 1rem;
          border-radius: 9999px;
          max-width: 500px;
          margin: 0 auto 2rem auto;
          overflow: hidden;
        }

        .marquee-text {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--accent);
          white-space: nowrap;
          animation: marquee 15s linear infinite;
        }

        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }

        .progress-container {
          max-width: 600px;
          margin: 0 auto;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 1.25rem;
        }

        .progress-info {
          display: flex;
          justify-content: space-between;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-secondary);
          margin-bottom: 0.75rem;
        }

        .progress-track {
          height: 8px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 99px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--accent) 0%, var(--accent-2) 100%);
          border-radius: 99px;
          transition: width 0.5s ease;
        }

        .section {
          margin: 4rem 0;
        }

        .section-title {
          font-size: 2rem;
          margin-bottom: 0.5rem;
          text-align: center;
        }

        .section-subtitle {
          color: var(--text-secondary);
          text-align: center;
          margin-bottom: 2rem;
          font-size: 0.95rem;
        }

        .quick-nav {
          display: flex;
          gap: 0.5rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 3rem;
        }

        .quick-nav-btn {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          border: 1px solid var(--border);
          background: var(--bg-card);
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .quick-nav-btn:hover {
          border-color: var(--accent);
          color: var(--text-primary);
        }

        .warnings-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1rem;
        }

        .warning-card {
          border-radius: 12px;
          padding: 1.5rem;
          border: 1px solid transparent;
          transition: transform 0.3s ease;
        }

        .warning-card:hover {
          transform: translateY(-3px);
        }

        .warning-card.warning {
          background: rgba(245, 158, 11, 0.08);
          border-color: rgba(245, 158, 11, 0.2);
        }

        .warning-card.info {
          background: rgba(99, 102, 241, 0.08);
          border-color: rgba(99, 102, 241, 0.2);
        }

        .warning-card.danger {
          background: rgba(239, 68, 68, 0.08);
          border-color: rgba(239, 68, 68, 0.2);
        }

        .warning-card h3 {
          font-size: 1rem;
          margin-bottom: 0.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .warning-card.warning h3 { color: var(--warning); }
        .warning-card.info h3 { color: var(--accent); }
        .warning-card.danger h3 { color: var(--danger); }

        .warning-card p {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .phases-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1.25rem;
        }

        .phase-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 1.5rem;
          position: relative;
          transition: all 0.3s ease;
          overflow: hidden;
        }

        .phase-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          background: var(--phase-color);
        }

        .phase-card:hover {
          border-color: var(--phase-color);
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
        }

        .phase-num {
          font-family: var(--font-mono);
          font-size: 2rem;
          font-weight: 700;
          color: var(--phase-color);
          opacity: 0.5;
        }

        .phase-title {
          font-size: 1.25rem;
          margin: 0.5rem 0 1rem 0;
        }

        .phase-steps {
          list-style: none;
        }

        .phase-step {
          font-size: 0.85rem;
          color: var(--text-secondary);
          padding: 0.35rem 0;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .phase-step::before {
          content: '→';
          color: var(--phase-color);
        }

        .controls-bar {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .search-input {
          width: 100%;
          padding: 0.85rem 1.25rem;
          border-radius: 10px;
          border: 1px solid var(--border);
          background: var(--bg-card);
          color: var(--text-primary);
          font-family: var(--font-body);
          font-size: 0.95rem;
          outline: none;
          transition: all 0.3s ease;
        }

        .search-input:focus {
          border-color: var(--accent);
          box-shadow: 0 0 15px var(--accent-glow);
        }

        .filter-buttons {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .filter-btn {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          padding: 0.45rem 0.85rem;
          border-radius: 9999px;
          border: 1px solid var(--border);
          background: var(--bg-card);
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .filter-btn:hover {
          border-color: var(--accent);
          color: var(--text-primary);
        }

        .filter-btn.active {
          background: var(--accent);
          color: #fff;
          border-color: var(--accent);
        }

        .modules-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .module-card {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%);
          border: 1px solid var(--border);
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .light .module-card {
          background: var(--bg-card);
        }

        .module-card:hover {
          border-color: var(--border-hover);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        }

        .module-card.expanded {
          border-color: var(--accent);
          box-shadow: 0 0 25px var(--accent-glow);
        }

        .module-card.completed {
          border-color: var(--success);
          opacity: 0.8;
        }

        .module-header {
          width: 100%;
          padding: 1rem 1.25rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: transparent;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
          text-align: left;
        }

        .module-header-left {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .module-emoji {
          font-size: 1.35rem;
        }

        .module-title {
          font-size: 1.05rem;
          font-weight: 600;
        }

        .module-badges {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .level-badge {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          padding: 0.2rem 0.6rem;
          border-radius: 9999px;
          color: #fff;
          font-weight: 500;
        }

        .completion-badge {
          font-size: 1rem;
          cursor: pointer;
          transition: transform 0.2s ease;
        }

        .completion-badge:hover {
          transform: scale(1.2);
        }

        .arrow-icon {
          font-size: 0.9rem;
          color: var(--text-muted);
          transition: transform 0.3s ease;
        }

        .module-card.expanded .arrow-icon {
          transform: rotate(180deg);
          color: var(--accent);
        }

        .accordion-content {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.3s ease;
        }

        .module-card.expanded .accordion-content {
          grid-template-rows: 1fr;
        }

        .accordion-inner {
          overflow: hidden;
        }

        .module-body {
          padding: 0 1.25rem 1.25rem 1.25rem;
          border-top: 1px solid var(--border);
          background: rgba(0, 0, 0, 0.1);
        }

        .module-context-label {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-top: 1rem;
          margin-bottom: 0.4rem;
        }

        .module-context {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-bottom: 1.25rem;
        }

        .resources-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .resource-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 0.6rem 0.85rem;
          color: var(--text-primary);
          text-decoration: none;
          font-size: 0.85rem;
          transition: all 0.25s ease;
        }

        .resource-link:hover {
          background: var(--bg-card-hover);
          border-color: var(--accent);
          transform: translateX(4px);
        }

        .resource-title {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .resource-title span {
          color: var(--accent);
        }

        .resource-channel {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--text-muted);
        }

        .bonus-section {
          background: rgba(255, 255, 255, 0.02);
          border-radius: 8px;
          padding: 0.85rem;
          border: 1px dashed var(--border);
        }

        .bonus-title {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-bottom: 0.5rem;
        }

        .bonus-list {
          list-style: none;
        }

        .bonus-item {
          font-size: 0.8rem;
          color: var(--text-secondary);
          padding: 0.25rem 0;
        }

        .bonus-item::before {
          content: '•';
          color: var(--accent-2);
          margin-right: 0.4rem;
        }

        .channels-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1rem;
        }

        .channel-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 1.25rem;
          transition: all 0.3s ease;
        }

        .channel-card:hover {
          border-color: var(--accent);
          transform: translateY(-2px);
        }

        .channel-card.favorited {
          border-color: var(--warning);
          box-shadow: 0 0 15px rgba(245, 158, 11, 0.15);
        }

        .channel-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }

        .channel-name {
          font-size: 1.1rem;
          font-weight: 700;
        }

        .favorite-btn {
          background: none;
          border: none;
          font-size: 1.1rem;
          cursor: pointer;
          opacity: 0.4;
          transition: all 0.2s ease;
        }

        .favorite-btn:hover {
          opacity: 1;
          transform: scale(1.1);
        }

        .channel-card.favorited .favorite-btn {
          opacity: 1;
        }

        .channel-category {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          color: var(--text-secondary);
        }

        .channel-card p {
          font-size: 0.85rem;
          color: var(--text-secondary);
          margin-top: 0.5rem;
        }

        .tools-flex {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          justify-content: center;
          margin-bottom: 3rem;
        }

        .tool-link {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: var(--text-primary);
          background: var(--bg-card);
          border: 1px solid var(--border);
          padding: 0.5rem 1rem;
          border-radius: 9999px;
          text-decoration: none;
          transition: all 0.25s ease;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .tool-link:hover {
          border-color: var(--accent);
          transform: translateY(-2px);
        }

        .extra-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .extra-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 1.5rem;
        }

        .extra-card h3 {
          font-size: 1.2rem;
          margin-bottom: 1rem;
          color: var(--accent);
          border-bottom: 1px solid var(--border);
          padding-bottom: 0.5rem;
        }

        .extra-list {
          list-style: none;
        }

        .extra-list-item {
          display: flex;
          justify-content: space-between;
          font-size: 0.9rem;
          padding: 0.4rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.02);
        }

        .extra-title {
          font-weight: 500;
          color: var(--text-primary);
        }

        .extra-author {
          font-family: var(--font-mono);
          color: var(--text-muted);
          font-size: 0.8rem;
        }

        .advice-card {
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);
          border: 1px solid var(--accent);
          border-radius: 16px;
          padding: 2rem;
          margin: 3rem auto 2rem auto;
          max-width: 700px;
          text-align: center;
        }

        .advice-card h3 {
          font-size: 1.4rem;
          margin-bottom: 1rem;
        }

        .advice-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .advice-item {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .advice-item::before {
          content: '✦';
          color: var(--warning);
          margin-right: 0.4rem;
        }

        .advice-quote {
          font-size: 0.85rem;
          font-style: italic;
          color: var(--text-muted);
          border-top: 1px solid var(--border);
          padding-top: 0.75rem;
          margin-top: 1rem;
        }

        @media (min-width: 768px) {
          .hero-title {
            font-size: 4rem;
          }
          .controls-bar {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          }
          .search-input {
            max-width: 300px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-on-scroll {
            opacity: 1;
            transform: none;
            transition: none;
          }
          .marquee-text {
            animation: none;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="hero-section animate-on-scroll" ref={sectionRefs.hero}>
        <h1 className="hero-title">Roadmap Godot 4</h1>
        <p className="hero-subtitle">
          Le guide de ressources ultime pour forger des jeux indie 2D ambitieux.
        </p>

        <div className="marquee-container">
          <div className="marquee-text">
            Heu dude, tu veux apprendre le game dev ? • Azzy essaye ceci • Vu que t'es seul ça ne coûte rien de try • Right ? •
            Heu dude, tu veux apprendre le game dev ? • Azzy essaye ceci • Vu que t'es seul ça ne coûte rien de try • Right ? •
          </div>
        </div>

        <div className="progress-container">
          <div className="progress-info">
            <span>AVANCEMENT</span>
            <span>{progress.completedModules.length}/25 modules • {progress.unlockedModules.length} déverrouillés</span>
          </div>
          <div className="progress-track">
            <div
              className="progress-fill"
              style={{ width: `${(progress.completedModules.length / 25) * 100}%` }}
            />
          </div>
        </div>
      </section>

      {/* Quick Nav */}
      <nav className="quick-nav animate-on-scroll">
        <button className="quick-nav-btn" onClick={() => scrollToRef(sectionRefs.fondations)}>⚠️ Conseils</button>
        <button className="quick-nav-btn" onClick={() => scrollToRef(sectionRefs.roadmap)}>🗺️ Roadmap</button>
        <button className="quick-nav-btn" onClick={() => scrollToRef(sectionRefs.modules)}>📚 Modules</button>
        <button className="quick-nav-btn" onClick={() => scrollToRef(sectionRefs.chaines)}>📺 Chaînes</button>
        <button className="quick-nav-btn" onClick={() => scrollToRef(sectionRefs.outils)}>🛠️ Outils</button>
      </nav>

      {/* Warnings Section */}
      <section className="section animate-on-scroll" ref={sectionRefs.fondations}>
        <h2 className="section-title">⚠️ Bienvenue dans le gamedev</h2>
        <p className="section-subtitle">Trois choses à savoir avant de commencer</p>

        <div className="warnings-grid">
          <div className="warning-card warning">
            <h3>⚠️ Évite le Feature Creep</h3>
            <p>Hollow Knight a pris 3 ans par 3 personnes. Reste focalisé sur un périmètre restreint mais poli à l'extrême.</p>
          </div>
          <div className="warning-card info">
            <h3>💡 Code Propre & Modulaire</h3>
            <p>Godot 4 excelle dans les scènes instanciables et la communication via signaux. Découple tes comportements.</p>
          </div>
          <div className="warning-card danger">
            <h3>🔥 La Règle du Game Feel</h3>
            <p>Le fun naît des micro-feedbacks. Investis 50% de ton temps dans la physique et les rétroactions.</p>
          </div>
        </div>
      </section>

      {/* Roadmap Phases */}
      <section className="section animate-on-scroll" ref={sectionRefs.roadmap}>
        <h2 className="section-title">🗺️ Roadmap Conseillée</h2>
        <p className="section-subtitle">Progresse étape par étape</p>

        <div className="phases-grid">
          {phasesData.map((phase) => (
            <div
              key={phase.num}
              className="phase-card"
              style={{ '--phase-color': phase.color } as React.CSSProperties}
            >
              <span className="phase-num">0{phase.num}</span>
              <h3 className="phase-title">{phase.title}</h3>
              <ul className="phase-steps">
                {phase.steps.map((step, sIdx) => (
                  <li key={sIdx} className="phase-step">{step}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Modules Section */}
      <section className="section animate-on-scroll" ref={sectionRefs.modules}>
        <h2 className="section-title">📚 Les 25 Modules</h2>
        <p className="section-subtitle">Parcours les connaissances techniques</p>

        <div className="controls-bar">
          <input
            type="text"
            placeholder="Rechercher un module..."
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <div className="filter-buttons">
            {['all', 'beginner', 'intermediate', 'advanced'].map(level => (
              <button
                key={level}
                className={`filter-btn ${filterLevel === level ? 'active' : ''}`}
                onClick={() => setFilterLevel(level)}
              >
                {level === 'all' ? 'TOUS' : level === 'beginner' ? 'DÉBUTANT' : level === 'intermediate' ? 'INTERMÉDIAIRE' : 'AVANCÉ'}
              </button>
            ))}
          </div>
        </div>

        <div className="modules-list">
          {filteredModules.map(mod => (
            <div
              key={mod.id}
              className={`module-card ${expandedModule === mod.id ? 'expanded' : ''} ${progress.completedModules.includes(mod.id) ? 'completed' : ''}`}
            >
              <button
                className="module-header"
                onClick={() => handleModuleClick(mod.id)}
              >
                <div className="module-header-left">
                  <span className="module-emoji">{mod.emoji}</span>
                  <span className="module-title">{mod.id}. {mod.title}</span>
                </div>
                <div className="module-badges">
                  <span
                    className="completion-badge"
                    onClick={(e) => {
                      e.stopPropagation();
                      completeModule(mod.id);
                    }}
                    title={progress.completedModules.includes(mod.id) ? 'Terminé !' : 'Marquer comme terminé'}
                  >
                    {progress.completedModules.includes(mod.id) ? '✅' : '⬜'}
                  </span>
                  <span
                    className="level-badge"
                    style={{ backgroundColor: getLevelBadgeColor(mod.level) }}
                  >
                    {mod.level}
                  </span>
                  <span className="arrow-icon">▼</span>
                </div>
              </button>

              <div className="accordion-content">
                <div className="accordion-inner">
                  <div className="module-body">
                    <div className="module-context-label">📌 Contexte</div>
                    <p className="module-context">{mod.context}</p>

                    <div className="module-context-label">🎥 Vidéos</div>
                    <div className="resources-list">
                      {mod.resources.map((res, rIdx) => (
                        <a
                          key={rIdx}
                          href={getYoutubeSearchUrl(res.title, res.channel)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="resource-link"
                        >
                          <span className="resource-title">▶ {res.title} <span>par {res.channel}</span></span>
                          <span className="resource-channel">↗</span>
                        </a>
                      ))}
                    </div>

                    {mod.bonus.length > 0 && (
                      <div className="bonus-section">
                        <div className="bonus-title">🌐 Ressources Bonus</div>
                        <ul className="bonus-list">
                          {mod.bonus.map((b, bIdx) => (
                            <li key={bIdx} className="bonus-item">
                              {b.startsWith('http') ? (
                                <a href={b} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-2)' }}>
                                  {b} ↗
                                </a>
                              ) : b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {filteredModules.length === 0 && (
            <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginTop: '2rem' }}>
              Aucun module ne correspond à vos critères.
            </p>
          )}
        </div>
      </section>

      {/* Channels Section */}
      <section className="section animate-on-scroll" ref={sectionRefs.chaines}>
        <h2 className="section-title">📺 Chaînes YouTube</h2>
        <p className="section-subtitle">Les meilleurs créateurs à suivre</p>

        <div className="channels-grid">
          {channelsData.map((channel, idx) => (
            <div
              key={idx}
              className={`channel-card ${progress.favoriteChannels.includes(channel.name) ? 'favorited' : ''}`}
            >
              <div className="channel-header">
                <span className="channel-name">{channel.name}</span>
                <button
                  className="favorite-btn"
                  onClick={() => toggleFavoriteChannel(channel.name)}
                  title={progress.favoriteChannels.includes(channel.name) ? 'Retirer des favoris' : 'Ajouter aux favoris'}
                >
                  {progress.favoriteChannels.includes(channel.name) ? '⭐' : '☆'}
                </button>
              </div>
              <span className="channel-category">{channel.category}</span>
              <p>{channel.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tools Section */}
      <section className="section animate-on-scroll" ref={sectionRefs.outils}>
        <h2 className="section-title">🛠️ Outils & Ressources</h2>
        <p className="section-subtitle">La boîte à outils du développeur indie</p>

        <div className="tools-flex">
          {toolsData.map((tool, idx) => (
            <a
              key={idx}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="tool-link"
            >
              {tool.name} ↗
            </a>
          ))}
        </div>

        <div className="extra-grid">
          <div className="extra-card">
            <h3>📖 Livres Essentiels</h3>
            <ul className="extra-list">
              {booksData.map((book, idx) => (
                <li key={idx} className="extra-list-item">
                  <span className="extra-title">{book.title}</span>
                  <span className="extra-author">Par {book.author}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="extra-card">
            <h3>🎤 GDC Talks</h3>
            <ul className="extra-list">
              {gdcTalksData.map((talk, idx) => (
                <li key={idx} className="extra-list-item">
                  <span className="extra-title">{talk.title}</span>
                  <span className="extra-author">{talk.speaker}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="advice-card">
          <h3>Conseil Final</h3>
          <ul className="advice-list">
            <li className="advice-item">Le ressenti des mouvements en premier</li>
            <li className="advice-item">Des feedbacks visuels et audio immédiats</li>
            <li className="advice-item">Une architecture modulable et scalable</li>
            <li className="advice-item">Un level design rigoureux</li>
          </ul>
          <p className="advice-quote">"Fais moins, mais fais-le mieux."</p>
        </div>
      </section>
    </div>
  );
}