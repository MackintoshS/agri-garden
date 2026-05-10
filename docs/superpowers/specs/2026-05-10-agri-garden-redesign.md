# Agri-Garden — Redesign Site Web

**Date :** 2026-05-10  
**Statut :** Approuvé  
**Stack :** HTML/CSS/JS pur (migration Next.js + Tailwind possible si pack SEO)  
**Langue :** Français uniquement

---

## Contexte

Refonte du site agri-garden.be/WP/ (WordPress 2019, contenu minimal). Le site actuel comporte une homepage basique avec section "Nouveau", un CTA boutique et une section événements. L'objectif est de produire une maquette moderne livrable au client, avec une architecture propre facilitant une migration Next.js ultérieure.

---

## Architecture de fichiers

```
agri-garden/
├── index.html
├── pepiniere.html
├── boutique.html
├── evenements.html
├── a-propos.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   ├── components.js
│   └── main.js
└── assets/
    └── images/
```

---

## Design System

### Couleurs
| Rôle | Valeur |
|---|---|
| Primaire (vert forêt) | `#2D5016` |
| Accent (vert sauge) | `#7A9E5F` |
| Fond | `#F5F0E8` |
| CTA (terre) | `#8B6914` |
| Fond clair | `#FAFAF7` |

### Typographie
- **Titres :** Playfair Display (Google Fonts)
- **Corps :** Inter (Google Fonts)

### Style global
- Coins arrondis (`border-radius: 12px` cards, `8px` boutons)
- Ombres douces (`box-shadow: 0 4px 20px rgba(0,0,0,0.08)`)
- Micro-animations scroll via `IntersectionObserver` (fade-in)
- Photos avec overlay vert semi-transparent sur hover
- Mobile-first, max-width 1280px

---

## Pages

### Accueil (`index.html`)
- Hero plein écran : titre + 2 CTA ("Découvrir la pépinière" / "Accéder à la boutique")
- Section "Nouveautés" : carousel de 3 cards
- Section mise en avant événements Chlorophylle Night
- Bandeau confiance : années d'expérience, nombre de variétés, localisation

### Pépinière (`pepiniere.html`)
- Hero avec texte d'accroche
- Grille de catégories (arbres, vivaces, potager, arbustes, plantes d'intérieur, bulbes)
- Section savoir-faire : alternance image/texte (2 blocs)

### Boutique (`boutique.html`)
- Filtre par catégorie (JS vanilla, sans rechargement)
- Grille de produits : photo, nom, prix placeholder, bouton "Réserver"
- Mini-panier sticky dans header (compteur + total)
- Formulaire de réservation simple (pas de vrai paiement)

### Événements (`evenements.html`)
- Hero "Chlorophylle Night by Xav"
- Cards prochains événements : date, lieu, description, bouton inscription
- Section "Événements passés" en ton atténué

### À propos (`a-propos.html`)
- Photo équipe + texte histoire
- Timeline : fondation → aujourd'hui (3-4 étapes)
- Section valeurs : 3 icônes SVG + texte

### Contact (`contact.html`)
- Formulaire : nom, email, sujet, message + validation inline
- Placeholder Google Maps
- Infos pratiques : horaires, adresse, téléphone

---

## Composants partagés (`components.js`)

### Navbar
- Logo gauche, liens centrés, CTA "Boutique" bouton vert à droite
- Sticky : fond blanc progressif au scroll
- Mobile : menu hamburger avec slide-in latéral

### Footer
- 3 colonnes : logo + tagline / liens rapides / contact
- Bande `#2D5016` en bas avec copyright

---

## Interactions (`main.js`)
- `IntersectionObserver` : fade-in sections au scroll
- Carousel accueil : navigation par flèches et dots
- Filtre boutique : toggle classes CSS par catégorie
- Validation formulaire contact : inline, sans soumission réelle
- Hover cards : `transform: translateY(-4px)` + ombre renforcée

---

## Responsive
| Breakpoint | Grilles |
|---|---|
| Mobile (< 768px) | 1 colonne, hamburger nav, hero compact |
| Tablet (768–1024px) | 2 colonnes |
| Desktop (> 1024px) | 3–4 colonnes, hero plein écran |

---

## Migration Next.js (si pack SEO activé)
- Chaque `.html` → `app/[page]/page.tsx`
- `components.js` → composants React `Navbar.tsx` / `Footer.tsx`
- `style.css` → Tailwind CSS classes
- Images → `next/image` avec optimisation automatique
- Données boutique → JSON local ou Strapi headless CMS
