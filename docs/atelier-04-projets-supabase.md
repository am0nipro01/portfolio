# Atelier 04 — Page Projets + Supabase

> Statut : En cours
> Dernière mise à jour : 2026-04-10

## Objectif

Remplacer le tableau hardcodé dans Projects.jsx par un vrai fetch Supabase.
Créer la table `projects` en base, ajouter les 2 projets réels, gérer loading/erreur.

## Décisions prises

- Table : `projects` avec colonnes : id, title, description, stack (array), link, image_url, display_order
- RLS activé : lecture publique autorisée (anon), écriture interdite côté front
- Clé Supabase : publishable key (sb_publishable_...) — déjà dans .env

## Travail réalisé

- [ ] Table `projects` créée dans Supabase
- [ ] RLS configuré (select public)
- [ ] Données insérées (Car Obsidian, Algiers Gastronomy)
- [ ] Projects.jsx mis à jour (fetch Supabase + loading + erreur)

## Reste à faire

- [ ] Ajouter images des projets (screenshots Netlify) → image_url

## SQL à exécuter dans Supabase

```sql
create table projects (
  id            bigserial primary key,
  title         text not null,
  description   text,
  stack         text[],
  link          text,
  image_url     text,
  display_order smallint default 0,
  created_at    timestamptz default now()
);

alter table projects enable row level security;

create policy "Public read"
  on projects for select
  to anon
  using (true);

insert into projects (title, description, stack, link, display_order) values
  ('Car Obsidian',       'A sleek automotive showcase with immersive dark visuals, performance filtering and an editorial aesthetic built for car enthusiasts.',          array['React','Tailwind','Supabase'], '#', 1),
  ('Algiers Gastronomy', 'A restaurant discovery platform celebrating Algerian cuisine — built for local businesses with a clean multilingual interface.',                array['React','Node.js','Supabase'],  '#', 2);
```
