# MakeMyGoals – Roadmap & Suivi des tâches

Ce fichier liste les fonctionnalités cibles de MakeMyGoals et l’avancement au fil du projet.
Les cases `- [ ]` seront cochées `- [x]` au fur et à mesure.

---

## Phase 0 – Fondations & Landing

- [x] Configurer Nuxt 4 + Tailwind
- [x] Créer la landing page responsive (mobile-first)
- [x] Définir une charte graphique minimaliste (Space Grotesk / Inter, palette bleu/violet)
- [x] Créer une navbar responsive réutilisable (`AppNavbar`)
- [x] Créer un footer réutilisable (`AppFooter`)

---

## Phase 1 – Authentification & Profil

- [ ] Intégrer Supabase dans l’app Nuxt (client + variables d’environnement)
- [ ] Créer les tables d’auth/profil côté Supabase
  - [ ] `profiles` (lien 1–1 avec `auth.users`)
- [ ] Créer la page d’inscription `/auth/signup` (email + mot de passe)
- [ ] Créer la page de connexion `/auth/login`
- [ ] Mettre en place la gestion de session (user connecté côté front)
- [ ] Créer une page de profil simple `/profile` (afficher email + quelques préférences)

---

## Phase 2 – Objectifs & Découpage

- [ ] Définir le modèle de données pour les objectifs
  - [ ] Table `goals`
  - [ ] Table `goal_steps` (annuel / mensuel / hebdomadaire)
- [ ] Écrire le SQL des tables `goals` et `goal_steps` pour Supabase
- [ ] Créer une page de création d’objectif `/goals/new`
  - [ ] Saisie du but
  - [ ] Choix du délai
  - [ ] Découpage automatique (annuel/mensuel/hebdomadaire)
  - [ ] Possibilité de modifier les étapes avant sauvegarde
- [ ] Sauvegarder l’objectif et ses étapes dans Supabase
- [ ] Lister les objectifs de l’utilisateur `/goals`

---

## Phase 3 – Tâches, Semaine & Jour

- [ ] Définir le modèle de données pour les tâches
  - [ ] Table `tasks` (liée à `goal_steps`)
- [ ] Écrire le SQL de la table `tasks` pour Supabase
- [ ] Génération des tâches de la semaine à partir de l’objectif hebdo
  - [ ] Paramètre d’intensité
- [ ] Page “Organisation de la semaine” `/week`
  - [ ] Vue des jours de la semaine
  - [ ] Répartition automatique des tâches par jour
  - [ ] Drag & drop ou autre mécanisme de réorganisation (plus tard)
- [ ] Page “Plan du jour” `/today`
  - [ ] Liste des tâches du jour
  - [ ] Ajout / modification / suppression de tâches
  - [ ] Choix d’un focus du jour

---

## Phase 4 – Bilan du soir & Adaptation

- [ ] Définir les tables de suivi
  - [ ] Table `daily_reviews`
  - [ ] Table `settings` / préférences
- [ ] Écrire le SQL pour `daily_reviews` et `settings`
- [ ] Page “Bilan du soir” `/review`
  - [ ] Cocher les tâches réalisées
  - [ ] Reporter les tâches non faites
  - [ ] Ajuster le reste de la semaine
- [ ] Implémenter une première logique d’adaptation simple
  - [ ] Détection des tâches trop reportées
  - [ ] Ajustement de la charge (réduction/augmentation)

---

## Phase 5 – Suivi & Paramètres

- [ ] Vue progression hebdomadaire (par objectif)
- [ ] Vue progression mensuelle
- [ ] Vue progression globale
- [ ] Page paramètres `/settings`
  - [ ] Modifier l’objectif ou le délai
  - [ ] Changer l’intensité
  - [ ] Gérer les préférences personnelles (notifications, etc.)

---

## Notes techniques (résumé)

- Frontend : Nuxt 4, Vue 3, Tailwind, mobile-first.
- Backend : Supabase (PostgreSQL + Auth).
- Auth initiale : email + mot de passe (Google et autres SSO ajoutés plus tard).

Ce fichier pourra être mis à jour au fur et à mesure pour cocher les tâches terminées et ajouter des sous-tâches si besoin.
