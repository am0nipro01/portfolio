# Atelier 01 — Structure & setup du projet

> Statut : Terminé
> Dernière mise à jour : 2026-04-09

---

## Résumé en 3 lignes (avant de commencer)

- Stack validée : React + Vite, Supabase, Netlify Forms, hébergement Netlify, i18n FR/EN/ES/PT.
- Projet non initialisé : le répertoire `C:/Users/MUGIWARA/Documents/ME/` était vide.
- Objectif : initialiser le projet Vite, créer la structure de dossiers, configurer le client Supabase et le `.env`.

---

## Décisions prises dans cet atelier

- Template Vite utilisé : `react` (JS, pas TypeScript)
- Variables d'env Supabase : `VITE_SUPABASE_URL` et `VITE_SUPABASE_ANON_KEY`
- `.env` non versionné, `.env.example` versionné comme référence

---

## Travail réalisé

- [x] Projet React initialisé avec Vite (`--template react`)
- [x] Structure créée : `src/components/`, `src/pages/`, `src/i18n/`, `src/lib/`, `src/assets/`
- [x] Dépendances installées : `react-router-dom`, `@supabase/supabase-js`
- [x] `src/lib/supabaseClient.js` créé (client Supabase via variables d'env)
- [x] `.env` créé avec les deux clés Supabase (non versionné)
- [x] `.env.example` créé comme référence versionnée
- [x] `.gitignore` mis à jour pour exclure `.env`
- [x] Build vérifié : `npm run build` passe sans erreur

---

## Reste à faire

- [ ] Renseigner les vraies valeurs dans `.env` (URL et clé Supabase du projet)
- [ ] Initialiser le repo Git et connecter à GitHub (optionnel avant atelier 2)

---

## Points ouverts

- Nom du projet Vite / repo Git non décidé (pas bloquant pour l'instant)

---

## Notes de session

Build OK en 345ms. Projet prêt pour l'atelier 2 (maquette Google Stitch).
