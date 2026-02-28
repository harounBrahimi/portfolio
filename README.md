# Portfolio — Haroun Brahimi

Portfolio one-page + page CV en HTML / CSS / JavaScript vanilla.

## 🚀 Lancement rapide

### Option 1 — Ouvrir directement

Ouvre `index.html` dans un navigateur.

### Option 2 — Live Server (recommandé)

1. Installe l'extension [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) dans VS Code
2. Clic droit sur `index.html` → **Open with Live Server**
3. Le site s'ouvre à `http://127.0.0.1:5500`

### Option 3 — Serveur Python

```bash
python -m http.server 8000
```

Puis ouvre `http://localhost:8000` dans le navigateur.

## 📂 Arborescence

```
SimplePortfolio/
├── index.html      # Page portfolio one-page
├── cv.html         # Page CV (imprimable en PDF)
├── styles.css      # Design system + thèmes dark/light
├── main.js         # Interactions (toggle, scroll, animations)
├── profile.js      # Configuration centralisée du profil
├── assets/         # Icônes et images (si nécessaire)
└── README.md       # Ce fichier
```

## 🎨 Fonctionnalités

- **Dark/Light mode** avec persistance localStorage
- **Navigation sticky** avec highlight de la section active
- **Scroll reveal** via IntersectionObserver
- **Smooth scroll** sur les ancres
- **Responsive** mobile-first
- **Accessible** : skip link, aria-labels, focus visible, contrastes
- **Imprimable** : page CV optimisée pour impression / export PDF
- **SEO minimal** : title, meta description, Open Graph

## ✏️ Personnalisation

Modifie `profile.js` pour mettre à jour le contenu (nom, expériences, projets, liens) sans toucher au HTML.

## 📄 Export CV en PDF

1. Va sur `cv.html`
2. Clique sur **Imprimer / PDF**
3. Choisis "Enregistrer au format PDF" dans la boîte de dialogue d'impression

## ⚡ Stack

- HTML5 sémantique
- CSS3 (custom properties, grid, flexbox)
- JavaScript vanilla (ES6+)
- Google Fonts (Inter + JetBrains Mono)
- Aucun framework, aucune dépendance
