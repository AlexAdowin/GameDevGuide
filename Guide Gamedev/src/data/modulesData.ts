export interface Resource {
  title: string;
  channel: string;
}

export interface Module {
  id: number;
  emoji: string;
  title: string;
  level: string;
  context: string;
  resources: Resource[];
  bonus: string[];
}

export interface Channel {
  name: string;
  category: 'Technique' | 'Game Design' | 'Art';
  description: string;
}

export interface Tool {
  name: string;
  url: string;
}

export interface Book {
  title: string;
  author: string;
}

export interface GDCTalk {
  title: string;
  speaker: string;
}

export interface Phase {
  num: number;
  title: string;
  color: string;
  steps: string[];
}

export const modulesData: Module[] = [
  {
    id: 1,
    emoji: "🏗️",
    title: "Fondations & Architecture Projet",
    level: "Débutant → Intermédiaire",
    context: "Cette partie détermine la solidité de tout ton projet. Une bonne architecture permet d'éviter le chaos quand le jeu grossit : scènes modulaires, systèmes découplés, organisation propre des scripts et communication via signaux.",
    resources: [
      { title: "Godot 4 Beginners Tutorial", channel: "Brackeys" },
      { title: "The BEST Godot Project Structure", channel: "FinePointCGI" },
      { title: "Godot Architecture Series", channel: "Game Endeavor" },
      { title: "State Machines in Godot 4", channel: "HeartBeast" },
      { title: "Signals in Godot Explained", channel: "GDQuest" }
    ],
    bonus: [
      "Documentation officielle Godot : https://docs.godotengine.org",
      "GDQuest Open RPG architecture repo",
      "KidsCanCode recipes"
    ]
  },
  {
    id: 2,
    emoji: "🧍",
    title: "Personnage & Mouvements",
    level: "Débutant → Avancé",
    context: "Le déplacement est le cœur du ressenti (Game Feel). Les mécaniques comme coyote time, dash, jump buffer ou wall jump donnent immédiatement une sensation professionnelle et précise.",
    resources: [
      { title: "CharacterBody2D in Godot 4", channel: "GDQuest" },
      { title: "Platformer Movement Tutorial", channel: "HeartBeast" },
      { title: "Coyote Time & Jump Buffer", channel: "Game Endeavor" },
      { title: "Juicy Platformer Movement", channel: "Devworm" },
      { title: "Game Feel in Platformers", channel: "GMTK" }
    ],
    bonus: [
      "Game Feel Book — Steve Swink",
      "Celeste movement breakdowns",
      "Godot Input Map documentation"
    ]
  },
  {
    id: 3,
    emoji: "⚔️",
    title: "Systèmes de Combat",
    level: "Intermédiaire → Avancé",
    context: "Le combat moderne repose sur le feedback visuel, la lisibilité et la réactivité. Hitstop, iframes, parry et VFX transforment des attaques simples en gameplay hautement satisfaisant.",
    resources: [
      { title: "Hitboxes & Hurtboxes in Godot", channel: "HeartBeast" },
      { title: "Action Combat in Godot 4", channel: "Game Endeavor" },
      { title: "How Hollow Knight Combat Feels So Good", channel: "GMTK" },
      { title: "Parry Systems Explained", channel: "Adam Millard" },
      { title: "Game Juice Explained", channel: "Martin Donald" }
    ],
    bonus: [
      "Hollow Knight combat analysis articles",
      "JuiceFX packs for Godot",
      "Godot Area2D documentation"
    ]
  },
  {
    id: 4,
    emoji: "👾",
    title: "Ennemis & IA (Mobs)",
    level: "Intermédiaire → Avancé",
    context: "Les ennemis crédibles rendent le monde vivant. FSM (Finite State Machines), pathfinding et comportements émergents deviennent essentiels pour des jeux profonds inspirés de Rain World.",
    resources: [
      { title: "Finite State Machines in Godot", channel: "Game Endeavor" },
      { title: "Enemy AI in Godot 4", channel: "HeartBeast" },
      { title: "NavigationAgent2D Tutorial", channel: "GDQuest" },
      { title: "Emergent AI Systems", channel: "AI and Games" },
      { title: "Rain World AI Analysis", channel: "Curious Archive" }
    ],
    bonus: [
      "Red Blob Games Pathfinding",
      "Rain World developer talks",
      "Steering Behaviors by Craig Reynolds"
    ]
  },
  {
    id: 5,
    emoji: "💀",
    title: "Boss Battles",
    level: "Intermédiaire → Avancé",
    context: "Les boss sont des examens de gameplay. Ils doivent être lisibles, mémorables et rythmiques, avec des patterns progressifs et du telegraphing clair.",
    resources: [
      { title: "Designing Boss Battles", channel: "GMTK" },
      { title: "Boss AI in Godot", channel: "Game Endeavor" },
      { title: "Attack Pattern Design", channel: "AI and Games" },
      { title: "How Hollow Knight Designs Bosses", channel: "The Architect of Games" },
      { title: "Phase Based Bosses", channel: "HeartBeast" }
    ],
    bonus: [
      "Boss Keys series (GMTK)",
      "Hollow Knight & Furi boss breakdowns"
    ]
  },
  {
    id: 6,
    emoji: "🗺️",
    title: "Architecture Metroidvania",
    level: "Avancé",
    context: "Le Metroidvania repose sur un monde interconnecté, des raccourcis intelligents et des capacités qui modifient la lecture des niveaux.",
    resources: [
      { title: "Metroidvania World Design", channel: "Boss Keys" },
      { title: "Persistent Worlds in Godot", channel: "Game Endeavor" },
      { title: "Scene Streaming in Godot", channel: "FinePointCGI" },
      { title: "Environmental Storytelling", channel: "GMTK" },
      { title: "Level Design in Hollow Knight", channel: "Architect of Games" }
    ],
    bonus: [
      "Metroidvania Design Guide",
      "Hollow Knight map analysis",
      "Godot Resource system docs"
    ]
  },
  {
    id: 7,
    emoji: "🎲",
    title: "Roguelite & Génération Procédurale",
    level: "Intermédiaire → Avancé",
    context: "Les roguelites combinent génération procédurale et progression persistante. Les seeds, synergies et équilibrages sont fondamentaux.",
    resources: [
      { title: "Procedural Generation in Godot", channel: "KidsCanCode" },
      { title: "Roguelike Tutorial Series", channel: "HeartBeast" },
      { title: "How Spelunky Generates Levels", channel: "GMTK" },
      { title: "Randomness in Game Design", channel: "Game Maker's Toolkit" },
      { title: "Dungeon Generation Algorithms", channel: "Sebastian Lague" }
    ],
    bonus: [
      "RogueBasin wiki",
      "Wave Function Collapse articles",
      "Red Blob Games procedural generation"
    ]
  },
  {
    id: 8,
    emoji: "🛖",
    title: "Boucle Duale : Action + Gestion",
    level: "Avancé",
    context: "Des jeux comme Cult of the Lamb mélangent combat et gestion. Cela demande deux boucles de gameplay cohérentes et persistantes.",
    resources: [
      { title: "Cult of the Lamb Design Analysis", channel: "Design Doc" },
      { title: "Building Simulation Systems", channel: "AI and Games" },
      { title: "NPC Scheduling Systems", channel: "Game Endeavor" },
      { title: "Resource Systems in Games", channel: "GDC" },
      { title: "Village Management Systems", channel: "Tarodev" }
    ],
    bonus: [
      "RimWorld AI talks",
      "Dwarf Fortress storytelling systems"
    ]
  },
  {
    id: 9,
    emoji: "🌳",
    title: "Arbres de Compétences & Progression",
    level: "Intermédiaire",
    context: "Les systèmes de progression structurent la motivation du joueur. Un bon arbre doit être lisible, gratifiant et stratégiquement intéressant.",
    resources: [
      { title: "Skill Trees in Games", channel: "Design Doc" },
      { title: "Creating RPG Stats Systems", channel: "Game Endeavor" },
      { title: "Save Systems in Godot", channel: "GDQuest" },
      { title: "Dynamic Stats Systems", channel: "HeartBeast" },
      { title: "UI Skill Trees", channel: "DevWorm" }
    ],
    bonus: [
      "Diablo & Path of Exile skill tree analysis",
      "JSON skill trees examples"
    ]
  },
  {
    id: 10,
    emoji: "🌍",
    title: "World Building & Level Design",
    level: "Débutant → Avancé",
    context: "Le level design guide l'exploration et la narration. Le monde doit être lisible, cohérent et récompensant à parcourir.",
    resources: [
      { title: "TileMaps in Godot 4", channel: "GDQuest" },
      { title: "Parallax Backgrounds", channel: "HeartBeast" },
      { title: "Level Design Toolkit", channel: "GMTK" },
      { title: "Designing Exploration", channel: "Architect of Games" },
      { title: "Metroidvania Flow", channel: "Boss Keys" }
    ],
    bonus: [
      "Level Design Book by Rudolf Kremers",
      "Tiled Map Editor"
    ]
  },
  {
    id: 11,
    emoji: "💡",
    title: "Éclairage & Ambiance",
    level: "Intermédiaire → Avancé",
    context: "L'ambiance transforme un jeu techniquement simple en expérience mémorable. Lumière, brouillard, pluie et colorimétrie créent l'identité émotionnelle.",
    resources: [
      { title: "Lighting in Godot 4", channel: "FinePointCGI" },
      { title: "2D Lights & Shadows", channel: "GDQuest" },
      { title: "Godot 4 Environment & Post Processing", channel: "StayAtHomeDev" },
      { title: "Rain and Weather Systems", channel: "DevWorm" },
      { title: "Color and Mood in Games", channel: "GDC" }
    ],
    bonus: [
      "Godot WorldEnvironment docs",
      "Rain World atmosphere analyses"
    ]
  },
  {
    id: 12,
    emoji: "🎬",
    title: "Cinématiques & Narration",
    level: "Intermédiaire",
    context: "Les cinématiques in-engine permettent de raconter sans casser l'immersion. Les mouvements de caméra et dialogues doivent rester fluides et naturels.",
    resources: [
      { title: "AnimationPlayer in Godot 4", channel: "GDQuest" },
      { title: "Dialogue Systems in Godot", channel: "HeartBeast" },
      { title: "Environmental Storytelling", channel: "GMTK" },
      { title: "Cutscenes in Godot", channel: "Game Endeavor" },
      { title: "Narrative Design in Games", channel: "Extra Credits" }
    ],
    bonus: [
      "Dialogue Manager plugin",
      "Yarn Spinner"
    ]
  },
  {
    id: 13,
    emoji: "🎨",
    title: "Animations & Squelettes",
    level: "Intermédiaire → Avancé",
    context: "Les animations transmettent le poids, l'intention et l'énergie. Synchroniser gameplay et animation est essentiel dans les jeux d'action.",
    resources: [
      { title: "AnimationTree Explained", channel: "GDQuest" },
      { title: "Skeleton2D Tutorial", channel: "FinePointCGI" },
      { title: "Procedural Animation", channel: "Sebastian Lague" },
      { title: "Animating Combat", channel: "New Frame Plus" },
      { title: "Game Animation Principles", channel: "Alan Becker" }
    ],
    bonus: [
      "Spine 2D",
      "Blender Grease Pencil",
      "New Frame Plus analyses"
    ]
  },
  {
    id: 14,
    emoji: "✨",
    title: "VFX (Effets Visuels) & Shaders",
    level: "Intermédiaire → Avancé",
    context: "Les VFX apportent impact et identité visuelle. Shaders et particules sont indispensables pour atteindre un rendu indie moderne.",
    resources: [
      { title: "Shaders in Godot 4", channel: "GDQuest" },
      { title: "Stylized VFX in Godot", channel: "FinePointCGI" },
      { title: "GPUParticles2D Tutorial", channel: "HeartBeast" },
      { title: "Screen Shake & Juice", channel: "Game Endeavor" },
      { title: "How Indie Games Use VFX", channel: "Stylized Station" }
    ],
    bonus: [
      "ShaderToy",
      "GodotShaders.com",
      "VFX Apprentice"
    ]
  },
  {
    id: 15,
    emoji: "🔊",
    title: "SFX & Musique",
    level: "Intermédiaire",
    context: "Le son amplifie le ressenti des actions. Une bonne spatialisation et une musique adaptative renforcent énormément l'immersion.",
    resources: [
      { title: "Audio in Godot 4", channel: "GDQuest" },
      { title: "Adaptive Music Systems", channel: "Game Endeavor" },
      { title: "Game Audio Basics", channel: "GDC" },
      { title: "FMOD Beginner Tutorial", channel: "FMOD" },
      { title: "Why Hollow Knight Music Works", channel: "8-bit Music Theory" }
    ],
    bonus: [
      "FMOD integration for Godot",
      "Wwise",
      "Freesound.org"
    ]
  },
  {
    id: 16,
    emoji: "🖼️",
    title: "Pipeline Pixel Art & D.A.",
    level: "Débutant → Intermédiaire",
    context: "Une direction artistique cohérente donne immédiatement une identité forte au jeu. Le pipeline doit être clair du logiciel d'art jusqu'au moteur.",
    resources: [
      { title: "Pixel Art Workflow", channel: "Brandon James Greer" },
      { title: "Aseprite Tutorial", channel: "AdamCYounis" },
      { title: "Pixel Perfect in Godot 4", channel: "GDQuest" },
      { title: "Color Theory for Games", channel: "Saultoons" },
      { title: "Animating Pixel Art", channel: "MortMort" }
    ],
    bonus: [
      "Aseprite workflow guides",
      "Lospec palette list",
      "Pixel Logic book"
    ]
  },
  {
    id: 17,
    emoji: "🖥️",
    title: "UI / HUD",
    level: "Intermédiaire",
    context: "Une bonne UI doit être lisible, réactive et stylisée sans gêner le gameplay. Les menus et HUD sont une énorme partie du polish final.",
    resources: [
      { title: "UI in Godot 4", channel: "GDQuest" },
      { title: "Responsive UI Systems", channel: "Game Endeavor" },
      { title: "Inventory Systems", channel: "HeartBeast" },
      { title: "UI Animation", channel: "Tarodev" },
      { title: "Designing Better HUDs", channel: "GMTK" }
    ],
    bonus: [
      "Godot Theme docs",
      "Kenney UI packs"
    ]
  },
  {
    id: 18,
    emoji: "💾",
    title: "Sauvegardes & Données",
    level: "Intermédiaire",
    context: "Les sauvegardes maintiennent la continuité du monde. Un système robuste est vital pour les Metroidvania et roguelites.",
    resources: [
      { title: "Save & Load Systems in Godot", channel: "GDQuest" },
      { title: "Persistent Data Systems", channel: "Game Endeavor" },
      { title: "JSON Save Files", channel: "HeartBeast" },
      { title: "Checkpoint Systems", channel: "DevWorm" },
      { title: "ResourceSaver Explained", channel: "FinePointCGI" }
    ],
    bonus: [
      "SQLite for Godot",
      "Godot FileAccess docs"
    ]
  },
  {
    id: 19,
    emoji: "⚙️",
    title: "Optimisation & Performances",
    level: "Avancé",
    context: "L'optimisation permet d'obtenir un jeu fluide même avec beaucoup d'effets, ennemis et systèmes actifs simultanément.",
    resources: [
      { title: "Optimizing Godot 4 Games", channel: "GDQuest" },
      { title: "Godot Profiler Explained", channel: "FinePointCGI" },
      { title: "Object Pooling Tutorial", channel: "Game Endeavor" },
      { title: "Performance Optimization for Indie Games", channel: "GDC" },
      { title: "Scene Streaming in Godot", channel: "StayAtHomeDev" }
    ],
    bonus: [
      "Godot Performance docs",
      "Tracy profiler"
    ]
  },
  {
    id: 20,
    emoji: "🧰",
    title: "Workflow & Outils Pro",
    level: "Débutant → Avancé",
    context: "Le workflow détermine ta vitesse de production. Les outils et l'organisation sont cruciaux pour un projet solo ambitieux.",
    resources: [
      { title: "Git for Game Developers", channel: "GameDev.tv" },
      { title: "Godot + Git Setup", channel: "GDQuest" },
      { title: "Professional Indie Pipelines", channel: "GDC" },
      { title: "Debugging in Godot", channel: "HeartBeast" },
      { title: "Rapid Iteration in Game Dev", channel: "GMTK" }
    ],
    bonus: [
      "GitHub Desktop",
      "GitKraken",
      "Godot plugin library"
    ]
  },
  {
    id: 21,
    emoji: "📦",
    title: "Export & Distribution",
    level: "Intermédiaire",
    context: "La publication transforme un prototype en produit commercial. Export, compression, builds et plateformes doivent être maîtrisés.",
    resources: [
      { title: "Exporting Games in Godot 4", channel: "GDQuest" },
      { title: "Publishing on itch.io", channel: "Brackeys" },
      { title: "Steamworks Basics", channel: "GameDev.tv" },
      { title: "HTML5 Export in Godot", channel: "FinePointCGI" },
      { title: "Preparing Indie Games for Release", channel: "GDC" }
    ],
    bonus: [
      "itch.io creator docs",
      "Steamworks documentation",
      "Butler CLI for itch.io"
    ]
  },
  {
    id: 22,
    emoji: "🏆",
    title: "Game Feel & Polish",
    level: "Avancé",
    context: "Le polish est souvent la différence entre un jeu amateur et un jeu commercial. C'est l'ensemble des micro-feedbacks invisibles qui rendent le gameplay satisfaisant.",
    resources: [
      { title: "The Art of Screenshake", channel: "Jan Willem Nijman" },
      { title: "Game Feel Explained", channel: "GMTK" },
      { title: "Juice It or Lose It", channel: "Martin Jonasson & Petri Purho" },
      { title: "Hitstop & Combat Feel", channel: "New Frame Plus" },
      { title: "Why Celeste Feels Good", channel: "Design Doc" }
    ],
    bonus: [
      "Book : Game Feel — Steve Swink"
    ]
  },
  {
    id: 23,
    emoji: "📖",
    title: "Narrative Design & Lore",
    level: "Avancé",
    context: "Les jeux comme Hollow Knight ou Rain World utilisent énormément de narration implicite, de mystères et de storytelling environnemental.",
    resources: [
      { title: "Environmental Storytelling", channel: "GMTK" },
      { title: "Dark Souls Narrative Design", channel: "The Architect of Games" },
      { title: "Worldbuilding for Games", channel: "Hello Future Me" },
      { title: "Silent Storytelling in Games", channel: "Extra Credits" },
      { title: "Rain World Lore Analysis", channel: "Curious Archive" }
    ],
    bonus: [
      "The Anatomy of Story — John Truby",
      "Hollow Knight lore analyses"
    ]
  },
  {
    id: 24,
    emoji: "💰",
    title: "Économie de Jeu & Design Systémique",
    level: "Avancé",
    context: "Même dans un jeu d'action, l'économie interne (monnaie, cooldowns, équilibrage) influence fortement la progression, le rythme et la rejouabilité.",
    resources: [
      { title: "Game Economy Design", channel: "GDC" },
      { title: "Balancing RPG Systems", channel: "Design Doc" },
      { title: "Meaningful Choices in Games", channel: "GMTK" },
      { title: "Risk vs Reward", channel: "Extra Credits" },
      { title: "How Roguelikes Balance Items", channel: "Roguelike Celebration" }
    ],
    bonus: [
      "Machinations.io tool",
      "Game balance spreadsheets design"
    ]
  },
  {
    id: 25,
    emoji: "🧪",
    title: "QA, Playtesting & Feedbacks",
    level: "Débutant → Avancé",
    context: "Le playtesting régulier est la clé absolue pour identifier les frictions, ajuster la courbe de difficulté et s'assurer que le jeu est compréhensible sans tutoriels intrusifs.",
    resources: [
      { title: "How to Playtest Your Game", channel: "GMTK" },
      { title: "Running a Beta Test", channel: "GDC" },
      { title: "The Art of Playtesting", channel: "Extra Credits" }
    ],
    bonus: [
      "Playtest feedback templates",
      "Itch.io playtest setup"
    ]
  }
];

export const channelsData: Channel[] = [
  { name: "GDQuest", category: "Technique", description: "Tutoriels de haute qualité et structures d'architecture propres pour Godot." },
  { name: "HeartBeast", category: "Technique", description: "Spécialiste du pixel-art, des RPGs et des mécaniques fluides 2D sur Godot." },
  { name: "Game Endeavor", category: "Technique", description: "Leçons inestimables sur le Game Feel, le combat et la propreté de code." },
  { name: "FinePointCGI", category: "Technique", description: "Revues techniques poussées sur les shaders, la 3D et le multijoueur." },
  { name: "StayAtHomeDev", category: "Technique", description: "Focus sur l'optimisation, l'audio et l'environnement 2D/3D." },
  { name: "KidsCanCode", category: "Technique", description: "Explications algorithmiques simples pour débutants et intermédiaires." },
  { name: "DevWorm", category: "Technique", description: "Création de mécaniques et d'effets visuels juteux en 2D." },
  { name: "GMTK", category: "Game Design", description: "Game Maker's Toolkit, la meilleure analyse de game design général sur YouTube." },
  { name: "Design Doc", category: "Game Design", description: "Décryptage des systèmes complexes de progression et d'économie." },
  { name: "The Architect of Games", category: "Game Design", description: "Analyse critique des choix structurels et du level design." },
  { name: "AI and Games", category: "Game Design", description: "Exploration des comportements intelligents et des IA de jeux célèbres." },
  { name: "Extra Credits", category: "Game Design", description: "Vidéos éducatives sur l'histoire du jeu vidéo et le design accessible." },
  { name: "New Frame Plus", category: "Game Design", description: "Analyse approfondie de la qualité d'animation et de combat." },
  { name: "Curious Archive", category: "Game Design", description: "Focus sur le lore, l'IA écologique et l'immersion (Rain World)." },
  { name: "Brandon James Greer", category: "Art", description: "La référence absolue pour le workflow et la technique du Pixel Art." },
  { name: "AdamCYounis", category: "Art", description: "Tutoriels d'art 2D et de level design en pixel art pour jeux indie." },
  { name: "MortMort", category: "Art", description: "Workflow rapide d'animation et de conception sous Aseprite." },
  { name: "Saultoons", category: "Art", description: "Conseils pratiques pour débutants en art, théorie des couleurs et styles." },
  { name: "Stylized Station", category: "Art", description: "Inspirations et techniques pour obtenir un rendu stylisé 2D/3D moderne." }
];

export const toolsData: Tool[] = [
  { name: "Blender", url: "https://www.blender.org" },
  { name: "Aseprite", url: "https://www.aseprite.org" },
  { name: "Krita", url: "https://krita.org" },
  { name: "FMOD", url: "https://www.fmod.com" },
  { name: "GitHub Desktop", url: "https://desktop.github.com" },
  { name: "Obsidian", url: "https://obsidian.md" },
  { name: "PureRef", url: "https://www.pureref.com" }
];

export const booksData: Book[] = [
  { title: "Game Feel", author: "Steve Swink" },
  { title: "The Art of Game Design", author: "Jesse Schell" },
  { title: "Level Up!", author: "Scott Rogers" },
  { title: "Pixel Logic", author: "Michael Azzi" },
  { title: "The Animator's Survival Kit", author: "Richard Williams" }
];

export const gdcTalksData: GDCTalk[] = [
  { title: "Juicing Your Cameras With Math", speaker: "Jan Willem Nijman" },
  { title: "30 Things I Hate About Your Game Pitch", speaker: "Rami Ismail" },
  { title: "Practical Creativity", speaker: "Rami Ismail" },
  { title: "Level Design Workshop", speaker: "GDC" },
  { title: "The Animation Process Behind Hollow Knight", speaker: "Team Cherry" }
];

export const phasesData: Phase[] = [
  {
    num: 1,
    title: "Fondations Godot",
    color: "#10b981",
    steps: ["Architecture projet", "CharacterBody2D", "Input Map & Config", "Caméra 2D (Lerp/Juice)", "UI & HUD Basique", "Save System simple"]
  },
  {
    num: 2,
    title: "Action Platformer",
    color: "#6366f1",
    steps: ["Système combat (Hitbox/Hurtbox)", "Ennemis FSM basique", "Boss Battles & Telegraphing", "AnimationTree & Blending", "Game Feel (Screenshake/Hitstop)", "VFX (Particules/Shaders)"]
  },
  {
    num: 3,
    title: "Monde Vivant & Systèmes",
    color: "#f59e0b",
    steps: ["Structure Metroidvania (Saves/Map)", "Persistent World & Scene Streaming", "Génération procédurale & Seeds", "IA Avancée & Pathfinding 2D", "Écosystème & IA Émergente (style Rain World)"]
  },
  {
    num: 4,
    title: "Polish Commercial",
    color: "#ef4444",
    steps: ["Optimisation & Profiling", "Audio spatial & adaptatif (FMOD)", "Narrative design & Lore implicite", "Export Steam/itch.io & SDK", "QA, Beta test & Playtesting"]
  }
];