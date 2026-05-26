export interface GameLore {
  id: number;
  title: string;
  emoji: string;
  developer: string;
  year: number;
  genre: string;
  engine: string;
  summary: string;
  lore: string[];
  inspirations: string[];
  lessons: string[];
  videoAnalysis?: string;
}

export const gamesLoreData: GameLore[] = [
  {
    id: 1,
    title: "Hollow Knight",
    emoji: "🐞",
    developer: "Team Cherry",
    year: 2017,
    genre: "Metroidvania",
    engine: "Godot 2",
    summary: "Un insecte guerrier descendant dans un royaume souterrain oubliée pour découvrir ses secrets.",
    lore: [
      "Le monde de Hallownest était initialement ruled par les Seigneurs du Ver qui ont ensuite été supplantés par le Pale King",
      "Le Pale King a créé les Navire pour remplacer les citoyens mourants et maintenir Hallownest",
      "The Radiance, l'ancienne entité du Rêve, a été vaincue par le Pale King et cherche à reprendre le contrôle",
      "Hornet est la fille du Pale King et de la Reine Esprit,divisée entre sa loyauté envers Hallownest et sa sœur Vessel",
      "Le protagonist est un Vessel vide, créé pour contenir The Radiance mais qui a échoué"
    ],
    inspirations: [
      "Super Metroid (1994) - architecture non-linéaire",
      "Dark Souls -lore environnementale et difficulté",
      "Metroid Prime - explorationisarctique",
      "Demon's Souls - récupération après la mort"
    ],
    lessons: [
      "Le lore peut être délivré sans texte : statues, décors, sons",
      "Chaque zone doit servir un double but : gameplay et narration",
      "Les boss doivent avoir une个人ité à travers leurs mouvements",
      "Ladirection artistique minimaliste permet au joueur de proyecter"
    ],
    videoAnalysis: "GMTK - How Hollow Knight Combat Feels So Good"
  },
  {
    id: 2,
    title: "Rain World",
    emoji: "🌧️",
    developer: "Joar Jakobsson",
    year: 2017,
    genre: "Survival Metroidvania",
    engine: "Unity",
    summary: "Un SLIG rampe à travers un monde cruel et beautiful, cherchantsa famille perdue.",
    lore: [
      "Le monde de Rain World est un écosystème complexe où chaque créature a son rôle",
      "Les Long necks sont des créatures anciennes qui ont survécu à multiples Extinctions",
      "Five Pebbles, un iterateur, a été créé pour protéger le monde mais a développé une personnalité",
      "Le joueur incarne un Scavenger, pas le seul de son espèce mais le seul à survive",
      "Les区域的 alternent entre périodes de pluie mortelles et périodes de sècheresse"
    ],
    inspirations: [
      "Catherine - anxiété et relationships",
      "Dark Souls - difficulty et learning",
      "生态系统 simulations - comportement émergent",
      "Ico - environnemental storytelling"
    ],
    lessons: [
      "L'IA peut créer du emergent gameplay sans scripting",
      "Le monde peut être le vrai protagonist",
      "Ne pas expliquer tout permet au joueur de créer sapropre histoire",
      "Le movement physique crée l attachment au personnage"
    ],
    videoAnalysis: "AI and Games - Rain World AI"
  },
  {
    id: 3,
    title: "Celeste",
    emoji: "🏔️",
    developer: "Maddy Thorson & Noel Berry",
    year: 2018,
    genre: "Platformer",
    engine: "XNA/Monogame",
    summary: "Madeline grimpe la montagne Celeste pour surmonter ses démons intérieurs.",
    lore: [
      "Madeline représente littéralement les deux côtés de sa personalité : rouge (anxiété) et bleu (calme)",
      "Le gameplay mechanic des dashes représente le overcoming des obstacles mentaux",
      "Les Strawberries ne sont pas nécessaires mais représentent le optional self-improvement",
      "Mr. Gristle est une manifestation de la peur de l'abandon de Madeline",
      "La montagne elle-même représente le voyage therapeutique"
    ],
    inspirations: [
      "Super Meat Boy - tight controls",
      "Donkey Kong (1981) - climb mechanic",
      "N++ - minimalism et difficulty",
      "Kentucky Route Zero - narration environnementale"
    ],
    lessons: [
      "Les mécaniques de jeu peuvent être une métaphore directe du thème",
      "Le difficulty est un choix de design, pas une contrainte",
      "Les assist mode démontrent que accessibility enrichit tout le monde",
      "Ladirection artistique simple mais distinctive est plus scalable"
    ],
    videoAnalysis: "Design Doc - Why Celeste Feels Good"
  },
  {
    id: 4,
    title: "Dead Cells",
    emoji: "💀",
    developer: "Motion Twin",
    year: 2018,
    genre: "Roguelite",
    engine: "Heaps (custom)",
    summary: "Un roi mort-vivant explore un royaume en constante évolution pour briser la Malédiction.",
    lore: [
      "Le protagoniste est une tête décapitée cherchant à reassembler son corps",
      "Chaque mort réinitialise le monde mais préserve certains upgrades (Meta-progression)",
      "La Malédiction vient d'une ancienne reine qui cherche à preserve son royaume",
      "Les différentes biomes représentent les régions d'un seul royaume à différentes époques",
      "Le Collector est un serviteur de la Reine qui chase le joueur à travers les runs"
    ],
    inspirations: [
      "Roguelikes classiques - randomization",
      "Soulslike - difficulty et punish",
      "Castlevania - gothic atmosphere",
      "Metroidvania - exploration"
    ],
    lessons: [
      "La repetition avec variation est addicting",
      "Le lore peut être dispersé sans impacter le core gameplay",
      "Les animations et sons creates le character",
      "Le polish sur les basics bat les features complex"
    ]
  },
  {
    id: 5,
    title: "Cult of the Lamb",
    emoji: "🐑",
    developer: "Massive Monster",
    year: 2022,
    genre: "Action Roguelite + Gestion",
    engine: "Unity",
    summary: "Un agneau sauver par un culte doit construit une communauté tout en combattant les anciens Dieux.",
    lore: [
      "Le joueur est un agneau resurrect par The One Who Waits pour détruire les anciens Dieux",
      "Les disciples sont d'anciens pèlerins qui ont trouvé la foi",
      "Les Necklaces représentent les pouvoirs des Dieux defeats",
      "Each Old God représente un archetype différent (Baba Yaga, He Who Shines, etc.)",
      "Le storyline révèle que The One Who Waits n'est peut-être pas si benevolent"
    ],
    inspirations: [
      "Darkest Dungeon - gestion du mental",
      "Civilization - progression et choices",
      "Don’t Starve - survival et crafting",
      "Cartoon Network - esthétique"
    ],
    lessons: [
      "Deux boucles de gameplay doivent être séparées mais interconnectées",
      "L aesthetic est crucial pour differentiate",
      "Le contenu quotidien (daily rituals) maintient l'engagement",
      "Le farming permet aux players de breathe entre les combats"
    ]
  },
  {
    id: 6,
    title: "Ori and the Blind Forest",
    emoji: "🌲",
    developer: "Moon Studios",
    year: 2015,
    genre: "Metroidvania",
    engine: "Unity",
    summary: "Un esprit forestier doit restaurer la lumière d'un forêt mourante.",
    lore: [
      "Ori est un être de lumière né de l'Arbre Spirit",
      "Naru est Ori's guardian qui a été tuée par le noir mais revive comme esprit",
      "Le forêt de Nibel est un ecosystem interconnecté où chaque créature a un rôle",
      "Shrink est le antagonist qui a été corrompu par la peur",
      "La lumière de la forêt représente l'espoir et la connexion"
    ],
    inspirations: [
      "Rayman Origins - fluid movement",
      "Braid - environnemental puzzle",
      "Journey - BEAUTiful minimal narration",
      "Zelda - exploration et puzzles"
    ],
    lessons: [
      "La direction artistique peut être le plus grand strength",
      "Le movement est le meilleur narrator",
      "Ne pas parler peut être plus powerful que le dialogue",
      "Le silence musical crée l emotion"
    ],
    videoAnalysis: "GMTK - What Makes Ori Special"
  },
  {
    id: 7,
    title: "Shovel Knight",
    emoji: "⛏️",
    developer: "Yacht Club Games",
    year: 2014,
    genre: "Action Platformer",
    engine: "GameMaker Studio",
    summary: "Un chevalier fidèle doit sauver sa bien-aimée d'un méchant sorcerer.",
    lore: [
      "Shovel Knight représente le dernier des Chevaliers de la Tour",
      "LaMagicienne est son amour sequestrada par le Shield Knight",
      "Les Order of No Quarter sont d'anciens heroes corrompus",
      "Le Phosphor Knight peut seulement être damaging quand il est warm",
      "Le temps dans le jeu avance réellement, affectant les NPCs"
    ],
    inspirations: [
      "Mega Man - boss rush et weapons",
      "CastleVania - upgrades et sub-weapons",
      "DuckTales - physics-based platforming",
      "8-bit aesthetics - NES era"
    ],
    lessons: [
      "Le homage peut être respectful et créatif",
      "Un simple hook (shovel) peut créer infinite possibilities",
      "Les secrets rewards l'exploration",
      "Le soundtrack peut porter le game"
    ]
  },
  {
    id: 8,
    title: "Fez",
    emoji: "🧢",
    developer: "Phil Fish / Polytron",
    year: 2012,
    genre: "Puzzle Platformer",
    engine: "XNA",
    summary: "Un être 2D découvre qu'il peut rotate pour voir le monde en 3D.",
    lore: [
      "Gomez découvre que les dimensions supérieures existent",
      "Le jeu révèle progressivement que tout est connected",
      "Les Anti-Cubes sont cachés dans des Easter eggs",
      "La timeline non-linéaire suggère des boucles temporelles",
      "La fin suggère que le joueur et le developer sontconnected"
    ],
    inspirations: [
      "Super Paper Mario - dimension shifting",
      "Myst - environmental puzzles",
      "The Legend of Zelda - exploration",
      "Art de MC Escher - perspective"
    ],
    lessons: [
      "Les mechanics peuvent transformer le perception",
      "Le mystery marketing crée l'engagement",
      "Le ARG peut étendre le jeu au-delà du jeu",
      "Une seule mechanic bien exécutée bat centmal implémentées"
    ],
    videoAnalysis: "GMTK - Fez Review"
  }
];