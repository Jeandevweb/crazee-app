# 🍔 Crazee Burger

Application de prise de commande pour un fast-food, avec un espace client et un
espace administrateur permettant de gérer le menu en temps réel.

**[▶️ Voir la démo en ligne](https://crazee-burger-app.netlify.app/)**

<!--
  Astuce : ajoute une capture d'écran ici pour un rendu plus vendeur sur GitHub.
  1. Prends une capture de l'app (page menu par exemple)
  2. Enregistre-la dans docs/screenshot.png
  3. Décommente la ligne ci-dessous
-->
<!-- ![Aperçu de Crazee Burger](docs/screenshot.png) -->

## ✨ Fonctionnalités

**Espace client**
- Connexion par prénom (accès direct, sans mot de passe — voir [note](#-choix-techniques))
- Consultation du menu et ajout de produits au panier
- Gestion des quantités et total calculé en temps réel
- Panier conservé d'une session à l'autre

**Espace administrateur**
- Ajout, modification et suppression de produits à la volée
- Édition en direct : les changements se reflètent immédiatement sur le menu
- Réinitialisation du menu
- Modifications conservées d'une session à l'autre

## 🛠️ Stack technique

| Domaine | Outils |
| --- | --- |
| Langage | TypeScript |
| UI | React 18 |
| Build | Vite |
| Styles | styled-components |
| Routing | React Router |
| État global | React Context + hooks personnalisés |
| Persistance | `localStorage` du navigateur |
| Qualité | ESLint (typescript-eslint), `tsc` |
| Déploiement | Netlify |

## 🚀 Démarrage rapide

Prérequis : **Node.js 18+** et **Yarn**.

```bash
# Installer les dépendances
yarn install

# Lancer le serveur de développement (http://localhost:5173)
yarn dev

# Construire la version de production
yarn build

# Prévisualiser le build de production
yarn preview
```

### Scripts de qualité

```bash
yarn lint        # Analyse statique (ESLint)
yarn typecheck   # Vérification des types (tsc --noEmit)
```

## 🧩 Choix techniques

- **Pas de backend.** Les données (menu par utilisateur, panier) sont stockées
  dans le `localStorage` du navigateur. L'application fonctionne donc en ligne
  sans configuration ni clé d'API — idéal pour une démo de portfolio. La couche
  de persistance est isolée dans [`src/api/`](src/api), ce qui permettrait de
  rebrancher un vrai backend sans toucher aux composants.
- **Connexion volontairement factice.** Le login demande un simple prénom : il
  sert à identifier un espace de travail, pas à authentifier un utilisateur.
  Chaque prénom obtient son propre menu et son propre panier, indépendants.
- **État global via Context.** Un `OrderContext` unique expose l'état de la
  commande (menu, panier, mode admin) aux composants, alimenté par des hooks
  dédiés [`useMenu`](src/hooks/useMenu.ts) et [`useBasket`](src/hooks/useBasket.ts).

## 📁 Structure du projet

```
src/
├── api/            # Couche de persistance (localStorage)
├── components/
│   ├── pages/      # Pages : login, order (commande), error
│   └── reusable-ui/# Composants réutilisables (Button, Card, TextInput…)
├── constants/      # Constantes de l'application
├── context/        # OrderContext (état global)
├── fakeData/       # Menu par défaut
├── hooks/          # useMenu, useBasket, useSuccessMessage
├── theme/          # Thème (couleurs, typographie, animations)
├── types/          # Types TypeScript
└── utils/          # Fonctions utilitaires (array, maths, string…)
```

## 📦 Déploiement

Le projet se déploie sur **Netlify**. Le fichier [`public/_redirects`](public/_redirects)
redirige toutes les routes vers `index.html` pour le routage côté client (SPA).
