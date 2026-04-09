# Atelier 02 — Maquette & Design

> Statut : Terminé
> Dernière mise à jour : 2026-04-09

---

## Résumé en 3 lignes

- Maquette choisie sur Google Stitch : variante "Digital Kiln" — dark, tons terres, terracotta/obsidian.
- Layout validé : single page, 4 sections (Hero, Projects, Skills, Contact) + navbar sticky + footer.
- Code HTML de référence disponible dans `C:/Users/MUGIWARA/Downloads/pf2/code.html`.

---

## Design system validé : "The Digital Kiln"

### Concept
Dark editorial. Terre cuite rencontre précision technique. Asymétrie intentionnelle, typographie large, glassmorphism sur la nav.

---

### Couleurs

| Token | Valeur | Usage |
|---|---|---|
| `background` / `surface` | `#1b1112` | Base de page |
| `surface-container-low` | `#23191a` | Sections secondaires |
| `surface-container` | `#281d1e` | Cards, form |
| `surface-container-highest` | `#3e3233` | Éléments interactifs au premier plan |
| `primary` | `#ffb4a5` | Accent principal, liens, icônes |
| `primary-container` | `#e46d55` | Terracotta vif — titres accentués |
| `on-surface` | `#f2dedf` | Texte principal (jamais blanc pur) |
| `on-surface-variant` | `#dec0ba` | Texte secondaire, descriptions |
| `outline-variant` | `#57423e` | Ghost borders (15% opacité max) |
| CTA gradient | `#d4614a` → `#b04030` | Bouton principal |

### Règles de surface
- **Pas de lignes de séparation** : les sections se séparent uniquement par changement de `background-color`
- **Ghost border** : `outline-variant` à 15% opacité si border absolument nécessaire
- **Glassmorphism** : nav et éléments flottants → `backdrop-blur: 12–20px` + fond semi-transparent

---

### Typographie

| Rôle | Police | Usage |
|---|---|---|
| Headlines / Display | Space Grotesk | Grands titres, nav, CTAs |
| Body / Labels | Inter | Descriptions, labels de formulaire, metadata |

- Titres : `tracking-tighter`, grands (`text-6xl` à `text-8xl` en hero)
- Labels techniques : uppercase, `tracking-widest`, `text-[10px]`
- Jamais Inter pour les titres de section

---

### Composants validés

**Navbar**
- Fixed top, glassmorphism (`bg-[#1b1112]/40` + `backdrop-blur-xl`)
- Logo gauche, liens centre, switcher langue droite (FR / EN / ES / PT)
- Lien actif en `primary-container` (#e46d55)

**Hero**
- 2 colonnes : headline + description + CTA à gauche / code snippet card à droite
- Badge disponibilité animé (ping) en haut à gauche
- Snippet de code avec faux terminal (dots rouge/orange/vert)
- CTA gradient `#d4614a → #b04030`, `rounded-md`

**Cards projet**
- Image en `aspect-video`, effet grayscale → couleur au hover
- Tags stack en glassmorphism sur l'image (bottom-left)
- Titre + description + "View live →" en dessous
- Hover : `group-hover:scale-105` sur l'image

**Skills**
- Grille 6 colonnes, tiles glassmorphism
- Icône Material Symbols + label court (Backend, Frontend, Storage…)

**Contact**
- 2 colonnes : texte + infos gauche / formulaire droite
- Form sur fond `surface-container`, inputs `border-b` seulement
- CTA full-width gradient

**Footer**
- Minimal : copyright gauche, icônes (mail, code, share) droite
- `border-t` à 15% opacité

---

## Travail réalisé

- [x] Maquette générée et validée sur Google Stitch
- [x] Variante choisie : "Digital Kiln" (pf2)
- [x] Design system documenté (couleurs, typo, composants)
- [x] Code HTML de référence disponible (`pf2/code.html`)

## Reste à faire

- [ ] Intégration React — atelier 3

## Points ouverts

- Nom affiché dans la nav/footer : "Auteur.io" est un placeholder — à remplacer par le vrai nom/marque
- Le snippet de code hero est factice — à personnaliser avec le vrai contenu (nom, stack réelle)
- Images des projets : générées par Stitch — à remplacer par les vrais screenshots Netlify
