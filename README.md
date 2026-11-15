# Mise en situation – Explorateur de pays

**Durée :** 1h30, en individuel
**Compétences :** C3. Réaliser des interfaces utilisateur · C4. Développer la partie dynamique des interfaces utilisateur
**Fourni :** la [maquette](https://www.figma.com/design/dEfkmkI7YYqka5NDYMSK3O) et ce starter
**Interdit :** documentation, anciens projets, IA, code d'un camarade

## Contexte

L'agence **Atlas Voyages** veut une page « Explorer le monde » : le visiteur choisit un continent et cherche un pays par son nom.

**API :** `https://countries.dev/countries` (tous les pays, sans clé)

Une seule requête au chargement. Le filtre par continent et la recherche se font ensuite sur les données récupérées.

## Consignes

### P1. Maquette (C3)
- Intègre la maquette : en-tête, titre, filtres (continent + recherche), grille de cartes.
- Écris 3 cartes en dur : drapeau, nom, capitale, population.
- Responsive : 1 colonne sur mobile, 3 colonnes sur grand écran.

### P2. Affichage (C4)
- Récupère tous les pays avec `fetch` au chargement.
- Affiche les pays d'Afrique par défaut, une carte par pays.
- Supprime les cartes écrites en dur.

### P3. Filtres (C4)
- Le changement de continent met à jour la grille.
- La recherche filtre par nom, sans tenir compte des majuscules.
- Les deux filtres fonctionnent ensemble.
- Un message s'affiche si aucun pays ne correspond.

### Bonus
- Tri par population, indicateur de chargement, message d'erreur si l'API ne répond pas.

## Règles
- Écris le contenu des fonctions de `script.js` sans les renommer.
- CSS à la main ou avec un framework CSS. JavaScript sans librairie.
- Un commit par palier, avec un message clair.

## Rendu
Le lien de ton dépôt GitHub `atlas-explorer`, avant la fin des 1h30.

**Validation :** P1 et P2 complets, et au moins un filtre de P3 qui fonctionne.
