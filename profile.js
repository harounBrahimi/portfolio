/**
 * profile.js — Configuration centralisée du portfolio
 * Modifier ce fichier pour mettre à jour le contenu sans toucher au HTML.
 */

const PROFILE = {
  // — Identité
  name: "Haroun Brahimi",
  title: "Architecte logiciel & Développeur d'applications",
  email: "haroun.brahimi@outlook.com",
  location: "France",

  // — Accroches (3 variantes — la première est utilisée par défaut)
  taglines: [
    "Je conçois des applications robustes qui simplifient les flux métiers complexes.",
    "Du besoin métier au code en production — j'architecture, je développe, je livre.",
    "Angular en façade, .NET en fondation, SQL en colonne vertébrale."
  ],

  // — Liens (remplacer les placeholders par vos vrais liens)
  links: {
    linkedin: "https://www.linkedin.com/in/haroun-brahimi",
    github: "https://github.com/haroun-brahimi",
    email: "mailto:harounbrahimi.dev@gmail.com"
  },

  // — À propos
  about: `Développeur fullstack spécialisé Angular / ASP.NET / SQL, je m'investis dans la conception d'applications métiers fiables et maintenables. Mon approche : comprendre le besoin, structurer l'architecture, livrer un code propre. Actuellement chez Pacific Pêche, je développe des outils internes qui fiabilisent et pilotent les échanges entre systèmes.`,

  // — Expériences professionnelles
  experiences: [
    {
      company: "Pacific Pêche",
      role: "Architecte logiciel / Développeur d'application",
      period: "Mars 2024 — Présent",
      description: "Application interne pour fiabiliser et piloter les flux inter-applicatifs.",
      bullets: [
        "Conception de l'architecture d'une solution Angular + ASP.NET d'intégration de flux",
        "Développement de mécanismes de synchronisation robustes entre applications métiers",
        "Mise en place d'un monitoring des flux pour traçabilité et détection d'anomalies",
        "Modélisation et optimisation des bases de données SQL Server",
        "Garantie de maintenabilité et qualité du code sur l'ensemble de la stack"
      ],
      stack: ["Angular", "ASP.NET", "SQL Server", "TypeScript", "C#"]
    },
    {
      company: "Alten",
      role: "Consultant",
      client: "Agirc-Arrco",
      period: "Sept 2023 — Fév 2024",
      description: "Migration de base de données DB2 vers PostgreSQL.",
      bullets: [
        "Analyse des schémas et dépendances (tables, vues, contraintes)",
        "Adaptation des types, fonctions et requêtes SQL (spécificités DB2 → Postgres)",
        "Préparation et exécution de scripts de migration",
        "Validation de cohérence des données (contrôles, échantillonnage, rapprochement)",
        "Support aux tests et corrections d'écarts"
      ],
      stack: ["DB2", "PostgreSQL", "SQL"]
    },
    {
      company: "dpliance",
      role: "Développeur fullstack — Alternance",
      period: "2021 — 2023 (2 ans)",
      description: "Développement fullstack sur des applications métiers en alternance longue durée.",
      bullets: [
        "Développement de features end-to-end (frontend Angular + backend NestJS)",
        "Conception et intégration d'API REST avec base de données SQL",
        "Travail en équipe avec revues de code et bonnes pratiques de développement",
        "Participation à l'ensemble du cycle : spécifications, développement, tests, déploiement"
      ],
      stack: ["Angular", "NestJS", "SQL", "TypeScript", "Node.js"]
    }
  ],

  // — Formation
  education: [
    {
      school: "Epitech",
      degree: "Expert en Technologies de l'Information",
      period: "2018 — 2023",
      description: "Formation par projets, pédagogie active. Spécialisation développement logiciel."
    }
  ],

  // — Compétences
  skills: {
    frontend: ["Angular", "TypeScript", "HTML / CSS", "RxJS", "Material Design"],
    backend: ["ASP.NET Core", "C#", "NestJS", "Node.js", "REST API"],
    database: ["SQL Server", "PostgreSQL", "DB2", "Modélisation BDD"],
    tools: ["Git", "Azure DevOps", "VS Code", "Postman", "Docker"],
    methods: ["Architecture logicielle", "Clean Code", "Agile / Scrum", "CI/CD"]
  },

  // — Projets PRO (internes / clients — non publics)
  projectsPro: [
    {
      title: "Gestion des flux inter-applicatifs",
      context: "Pacific Pêche — Projet interne",
      status: "Interne",
      objective: "Centraliser et fiabiliser les échanges de données entre les différentes applications du SI.",
      problem: "Flux de données entre systèmes non tracés, sources d'erreurs et de désynchronisation.",
      solution: [
        "Architecture Angular + ASP.NET Core pour orchestrer les échanges",
        "Monitoring en temps réel des flux avec traçabilité complète",
        "Interface d'administration accessible aux équipes métier"
      ],
      stack: ["Angular", "ASP.NET Core", "SQL Server", "TypeScript"],
      links: { details: null, code: null }
    },
    {
      title: "Modernisation d'applications métiers",
      context: "Projets internes — Angular + API .NET",
      status: "Interne",
      objective: "Développer et moderniser des applications web internes pour répondre aux besoins métiers.",
      problem: "Applications vieillissantes, difficiles à maintenir et à faire évoluer.",
      solution: [
        "Refonte avec une architecture modulaire Angular + API .NET",
        "API robustes avec validation, gestion d'erreurs et documentation",
        "Interfaces utilisateur intuitives et réactives"
      ],
      stack: ["Angular", "ASP.NET Core", "C#", "SQL Server"],
      links: { details: null, code: null }
    },
    {
      title: "Migration DB2 → PostgreSQL",
      context: "Agirc-Arrco (via Alten) — Client",
      status: "Client",
      objective: "Migrer une base de données DB2 vers PostgreSQL sans perte ni régression.",
      problem: "Base DB2 legacy à remplacer : incompatibilités de types, fonctions et syntaxe SQL.",
      solution: [
        "Analyse complète des schémas, dépendances et contraintes existantes",
        "Adaptation des types, fonctions et requêtes spécifiques DB2 vers Postgres",
        "Scripts de migration + validation de cohérence par échantillonnage"
      ],
      stack: ["DB2", "PostgreSQL", "SQL"],
      links: { details: null, code: null }
    }
  ],

  // — Projets PERSO (publics ou en cours)
  projectsPerso: [
    {
      title: "Moteur 3D en Rust",
      context: "Projet personnel",
      status: "Perso",
      objective: "Concevoir un moteur 3D capable d'afficher et de manipuler des formes et objets 3D.",
      problem: "Comprendre les fondamentaux du rendu 3D et l'architecture d'un moteur graphique performant.",
      solution: [
        "Pipeline de rendu complet : parsing de modèles, transformations, affichage",
        "Architecture modulaire pour séparer rendu, chargement et logique",
        "Optimisations de performance et gestion mémoire bas-niveau"
      ],
      stack: ["Rust"],
      links: { details: null, code: "#" }
    },
    {
      title: "Apprentissage par renforcement",
      context: "Projet personnel",
      status: "Perso",
      objective: "Expérimenter le reinforcement learning en développant des environnements d'entraînement.",
      problem: "Explorer les techniques RL sur des environnements custom avec des contraintes variées.",
      solution: [
        "Conception d'environnements d'entraînement sur mesure",
        "Implémentation de boucles d'entraînement avec reward shaping",
        "Évaluation et comparaison des politiques apprises"
      ],
      stack: ["Python"],
      links: { details: null, code: "#" }
    },
    {
      title: "DB Browser (SaaS)",
      context: "Projet personnel",
      status: "Perso",
      objective: "Proposer une solution SaaS pour explorer des bases de données et gérer l'import/export de données.",
      problem: "Besoin d'un outil accessible pour parcourir, requêter et exporter des données sans client lourd.",
      solution: [
        "Connecteurs multi-bases avec exploration de schéma interactive",
        "Éditeur de requêtes SQL avec export CSV / JSON",
        "Gestion des accès et sécurité des connexions"
      ],
      stack: ["Fullstack", "SQL", "API", "UI"],
      links: { details: null, code: "#" }
    }
  ]
};
