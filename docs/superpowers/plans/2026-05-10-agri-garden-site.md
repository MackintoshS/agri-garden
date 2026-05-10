# Agri-Garden Site Web — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Construire un site vitrine 6 pages HTML/CSS/JS pur pour Agri-Garden avec design naturel & organique, prêt à présenter au client.

**Architecture:** Multi-pages classiques partageant un design system CSS + composants navbar/footer injectés via JS. Chaque page est un fichier HTML autonome. Structure miroir de Next.js pour faciliter la migration future.

**Tech Stack:** HTML5, CSS3 (variables, Grid, Flexbox), JavaScript ES6 vanilla, Google Fonts (Playfair Display + Inter)

---

## Fichiers créés

| Fichier | Responsabilité |
|---|---|
| `css/style.css` | Design system complet : variables, reset, typographie, composants, utilitaires, responsive |
| `js/components.js` | Injection navbar + footer dans toutes les pages |
| `js/main.js` | Interactions : scroll animations, carousel, filtre boutique, validation formulaire |
| `index.html` | Page d'accueil |
| `pepiniere.html` | Page pépinière |
| `boutique.html` | Page boutique |
| `evenements.html` | Page événements |
| `a-propos.html` | Page à propos |
| `contact.html` | Page contact |

---

## Task 1 : Design System CSS

**Files:**
- Create: `css/style.css`

- [ ] **Step 1 : Créer `css/style.css`**

```css
/* =============================================
   AGRI-GARDEN — Design System
   ============================================= */

/* --- Variables --- */
:root {
  --color-primary: #2D5016;
  --color-primary-light: #3d6b1f;
  --color-accent: #7A9E5F;
  --color-accent-light: #9ab87a;
  --color-bg: #F5F0E8;
  --color-bg-light: #FAFAF7;
  --color-cta: #8B6914;
  --color-cta-hover: #a07a18;
  --color-text: #1a1a1a;
  --color-text-muted: #6b7280;
  --color-white: #ffffff;
  --color-border: #e5ddd0;

  --font-heading: 'Playfair Display', Georgia, serif;
  --font-body: 'Inter', system-ui, sans-serif;

  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --shadow-sm: 0 2px 8px rgba(0,0,0,0.06);
  --shadow-md: 0 4px 20px rgba(0,0,0,0.08);
  --shadow-lg: 0 8px 40px rgba(0,0,0,0.12);

  --max-width: 1280px;
  --nav-height: 72px;
  --transition: 0.3s ease;
}

/* --- Reset --- */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  font-family: var(--font-body);
  background: var(--color-bg);
  color: var(--color-text);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}
img { max-width: 100%; height: auto; display: block; }
a { text-decoration: none; color: inherit; }
ul { list-style: none; }

/* --- Typography --- */
h1, h2, h3, h4 { font-family: var(--font-heading); line-height: 1.2; }
h1 { font-size: clamp(2.2rem, 5vw, 3.5rem); }
h2 { font-size: clamp(1.6rem, 3vw, 2.4rem); }
h3 { font-size: clamp(1.2rem, 2vw, 1.6rem); }
h4 { font-size: 1.1rem; }
p { font-size: 1rem; color: var(--color-text-muted); }

/* --- Layout --- */
.container { max-width: var(--max-width); margin: 0 auto; padding: 0 24px; }
.section { padding: 80px 0; }
.section--alt { background: var(--color-bg-light); }
.section-header { text-align: center; margin-bottom: 56px; }
.section-header h2 { margin-bottom: 12px; }
.section-header p { max-width: 560px; margin: 0 auto; font-size: 1.05rem; }

/* --- Buttons --- */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  border-radius: var(--radius-sm);
  font-family: var(--font-body);
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: all var(--transition);
}
.btn-primary {
  background: var(--color-primary);
  color: var(--color-white);
}
.btn-primary:hover { background: var(--color-primary-light); transform: translateY(-2px); box-shadow: var(--shadow-md); }
.btn-secondary {
  background: transparent;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
}
.btn-secondary:hover { background: var(--color-primary); color: var(--color-white); transform: translateY(-2px); }
.btn-cta {
  background: var(--color-cta);
  color: var(--color-white);
}
.btn-cta:hover { background: var(--color-cta-hover); transform: translateY(-2px); box-shadow: var(--shadow-md); }
.btn-white {
  background: var(--color-white);
  color: var(--color-primary);
}
.btn-white:hover { background: var(--color-bg); transform: translateY(-2px); }

/* --- Cards --- */
.card {
  background: var(--color-white);
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: all var(--transition);
}
.card:hover { transform: translateY(-4px); box-shadow: var(--shadow-lg); }
.card-img { width: 100%; height: 220px; object-fit: cover; background: var(--color-accent-light); }
.card-img-placeholder {
  width: 100%; height: 220px;
  background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-primary) 100%);
  display: flex; align-items: center; justify-content: center;
}
.card-img-placeholder svg { opacity: 0.3; }
.card-body { padding: 24px; }
.card-body h3 { margin-bottom: 8px; }
.card-body p { font-size: 0.9rem; margin-bottom: 16px; }

/* --- Grid --- */
.grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; }
.grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
.grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 48px; align-items: center; }

/* --- Navbar --- */
.navbar {
  position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
  height: var(--nav-height);
  display: flex; align-items: center;
  transition: all var(--transition);
  padding: 0 24px;
}
.navbar.scrolled {
  background: var(--color-white);
  box-shadow: var(--shadow-sm);
}
.navbar-inner {
  max-width: var(--max-width); margin: 0 auto; width: 100%;
  display: flex; align-items: center; justify-content: space-between;
}
.navbar-logo {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-white);
  transition: color var(--transition);
}
.navbar.scrolled .navbar-logo { color: var(--color-primary); }
.navbar-links {
  display: flex; align-items: center; gap: 32px;
}
.navbar-links a {
  font-size: 0.9rem;
  font-weight: 500;
  color: rgba(255,255,255,0.9);
  transition: color var(--transition);
  position: relative;
}
.navbar-links a::after {
  content: '';
  position: absolute; bottom: -4px; left: 0; right: 0;
  height: 2px; background: var(--color-accent);
  transform: scaleX(0); transition: transform var(--transition);
}
.navbar-links a:hover::after, .navbar-links a.active::after { transform: scaleX(1); }
.navbar.scrolled .navbar-links a { color: var(--color-text); }
.navbar-links a:hover { color: var(--color-white); }
.navbar.scrolled .navbar-links a:hover { color: var(--color-primary); }
.navbar-cta .btn { padding: 10px 20px; font-size: 0.85rem; }
.navbar-hamburger {
  display: none; flex-direction: column; gap: 5px; cursor: pointer; padding: 4px;
}
.navbar-hamburger span {
  width: 24px; height: 2px;
  background: var(--color-white);
  transition: all var(--transition);
}
.navbar.scrolled .navbar-hamburger span { background: var(--color-text); }
.navbar-mobile {
  display: none;
  position: fixed; top: var(--nav-height); left: 0; right: 0; bottom: 0;
  background: var(--color-white); z-index: 999;
  flex-direction: column; align-items: center; justify-content: center; gap: 32px;
}
.navbar-mobile.open { display: flex; }
.navbar-mobile a { font-size: 1.4rem; font-family: var(--font-heading); color: var(--color-text); }
.navbar-mobile a:hover { color: var(--color-primary); }

/* --- Footer --- */
.footer {
  background: var(--color-primary);
  color: var(--color-white);
  padding: 64px 0 0;
}
.footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 48px; margin-bottom: 48px; }
.footer-brand h3 { font-family: var(--font-heading); font-size: 1.6rem; margin-bottom: 12px; }
.footer-brand p { color: rgba(255,255,255,0.7); font-size: 0.9rem; }
.footer-col h4 { font-size: 0.8rem; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 20px; opacity: 0.6; }
.footer-col ul { display: flex; flex-direction: column; gap: 10px; }
.footer-col ul li a { color: rgba(255,255,255,0.8); font-size: 0.9rem; transition: color var(--transition); }
.footer-col ul li a:hover { color: var(--color-white); }
.footer-bottom {
  border-top: 1px solid rgba(255,255,255,0.15);
  padding: 20px 0;
  display: flex; justify-content: space-between; align-items: center;
}
.footer-bottom p { color: rgba(255,255,255,0.5); font-size: 0.85rem; }

/* --- Hero --- */
.hero {
  min-height: 100vh;
  background: linear-gradient(135deg, var(--color-primary) 0%, #1a3009 100%);
  display: flex; align-items: center;
  position: relative; overflow: hidden;
  padding-top: var(--nav-height);
}
.hero::before {
  content: '';
  position: absolute; inset: 0;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%237A9E5F' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
.hero-content { position: relative; z-index: 1; max-width: 640px; }
.hero-tag {
  display: inline-block;
  background: rgba(122,158,95,0.3);
  color: var(--color-accent-light);
  padding: 6px 16px; border-radius: 999px;
  font-size: 0.8rem; font-weight: 600; letter-spacing: 1px; text-transform: uppercase;
  margin-bottom: 24px;
}
.hero h1 { color: var(--color-white); margin-bottom: 20px; }
.hero p { color: rgba(255,255,255,0.75); font-size: 1.15rem; margin-bottom: 36px; }
.hero-actions { display: flex; gap: 16px; flex-wrap: wrap; }
.hero-visual {
  position: absolute; right: 0; top: 0; bottom: 0; width: 45%;
  background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-primary-light) 100%);
  clip-path: polygon(15% 0, 100% 0, 100% 100%, 0% 100%);
  display: flex; align-items: center; justify-content: center;
}
.hero-visual-placeholder {
  width: 100%; height: 100%;
  display: flex; align-items: center; justify-content: center; opacity: 0.3;
}

/* --- Bandeau confiance --- */
.trust-band {
  background: var(--color-primary);
  padding: 32px 0;
}
.trust-items { display: flex; justify-content: center; gap: 64px; flex-wrap: wrap; }
.trust-item { text-align: center; color: var(--color-white); }
.trust-item strong { display: block; font-family: var(--font-heading); font-size: 2rem; }
.trust-item span { font-size: 0.85rem; opacity: 0.75; }

/* --- Carousel --- */
.carousel { position: relative; overflow: hidden; }
.carousel-track { display: flex; transition: transform 0.5s ease; }
.carousel-track .card { flex: 0 0 calc(33.333% - 22px); }
.carousel-controls { display: flex; justify-content: center; align-items: center; gap: 16px; margin-top: 32px; }
.carousel-btn {
  width: 40px; height: 40px; border-radius: 50%;
  border: 2px solid var(--color-primary);
  background: transparent; cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  transition: all var(--transition);
  color: var(--color-primary);
}
.carousel-btn:hover { background: var(--color-primary); color: var(--color-white); }
.carousel-dots { display: flex; gap: 8px; }
.carousel-dot {
  width: 8px; height: 8px; border-radius: 50%;
  background: var(--color-border); border: none; cursor: pointer; transition: all var(--transition);
}
.carousel-dot.active { background: var(--color-primary); width: 24px; border-radius: 4px; }

/* --- Event teaser --- */
.event-teaser {
  background: linear-gradient(135deg, var(--color-primary) 0%, #1a3009 100%);
  border-radius: var(--radius-lg); padding: 64px; color: var(--color-white);
  display: flex; align-items: center; justify-content: space-between; gap: 40px;
  position: relative; overflow: hidden;
}
.event-teaser::before {
  content: '🌿';
  position: absolute; right: -20px; bottom: -20px;
  font-size: 200px; opacity: 0.05; line-height: 1;
}
.event-teaser-content h2 { color: var(--color-white); margin-bottom: 16px; }
.event-teaser-content p { color: rgba(255,255,255,0.75); margin-bottom: 0; max-width: 480px; }
.event-teaser-action { flex-shrink: 0; }

/* --- Page Hero (pages internes) --- */
.page-hero {
  background: linear-gradient(135deg, var(--color-primary) 0%, #1a3009 100%);
  padding: calc(var(--nav-height) + 64px) 0 80px;
  color: var(--color-white); text-align: center;
}
.page-hero h1 { color: var(--color-white); margin-bottom: 16px; }
.page-hero p { color: rgba(255,255,255,0.75); font-size: 1.1rem; max-width: 560px; margin: 0 auto; }

/* --- Catégories grid (pépinière) --- */
.category-card {
  background: var(--color-white);
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: all var(--transition);
  cursor: pointer;
}
.category-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-lg); }
.category-card-img {
  height: 180px;
  display: flex; align-items: center; justify-content: center;
  font-size: 4rem;
}
.category-card-body { padding: 20px; text-align: center; }
.category-card-body h3 { font-size: 1.1rem; margin-bottom: 4px; }
.category-card-body p { font-size: 0.85rem; }

/* --- Alternating content (pépinière savoir-faire) --- */
.alt-content { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; }
.alt-content.reverse .alt-img { order: 2; }
.alt-content.reverse .alt-text { order: 1; }
.alt-img {
  border-radius: var(--radius-lg);
  height: 400px;
  background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-primary) 100%);
  display: flex; align-items: center; justify-content: center;
  font-size: 6rem;
}
.alt-text h2 { margin-bottom: 16px; }
.alt-text p { margin-bottom: 24px; }

/* --- Boutique --- */
.filter-bar { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 40px; }
.filter-btn {
  padding: 8px 20px;
  border-radius: 999px;
  border: 2px solid var(--color-border);
  background: transparent;
  font-family: var(--font-body);
  font-size: 0.9rem; cursor: pointer;
  transition: all var(--transition);
  color: var(--color-text);
}
.filter-btn.active, .filter-btn:hover {
  background: var(--color-primary);
  border-color: var(--color-primary);
  color: var(--color-white);
}
.product-card { background: var(--color-white); border-radius: var(--radius-md); overflow: hidden; box-shadow: var(--shadow-sm); transition: all var(--transition); }
.product-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-lg); }
.product-img {
  height: 200px;
  display: flex; align-items: center; justify-content: center;
  font-size: 4rem;
  background: var(--color-bg);
}
.product-body { padding: 20px; }
.product-body h3 { font-size: 1rem; margin-bottom: 4px; }
.product-body .price { font-size: 1.3rem; font-weight: 700; color: var(--color-primary); font-family: var(--font-heading); margin: 8px 0; }
.product-body p { font-size: 0.85rem; margin-bottom: 16px; }
.product-body .btn { width: 100%; justify-content: center; }
.cart-indicator {
  position: fixed; bottom: 32px; right: 32px; z-index: 900;
  background: var(--color-primary);
  color: var(--color-white);
  padding: 16px 24px;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-lg);
  display: flex; align-items: center; gap: 12px;
  font-weight: 600;
  transition: all var(--transition);
  opacity: 0; pointer-events: none;
}
.cart-indicator.visible { opacity: 1; pointer-events: all; }
.cart-badge {
  background: var(--color-cta);
  width: 24px; height: 24px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 0.8rem;
}

/* --- Événements --- */
.event-card { background: var(--color-white); border-radius: var(--radius-md); overflow: hidden; box-shadow: var(--shadow-sm); transition: all var(--transition); display: flex; }
.event-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-lg); }
.event-date {
  background: var(--color-primary);
  color: var(--color-white);
  padding: 24px 20px;
  text-align: center;
  flex-shrink: 0; width: 90px;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
}
.event-date strong { font-family: var(--font-heading); font-size: 2rem; line-height: 1; }
.event-date span { font-size: 0.8rem; text-transform: uppercase; opacity: 0.8; }
.event-info { padding: 24px; flex: 1; }
.event-info h3 { margin-bottom: 8px; }
.event-info p { font-size: 0.9rem; margin-bottom: 16px; }
.event-meta { display: flex; gap: 16px; font-size: 0.85rem; color: var(--color-text-muted); margin-bottom: 16px; }
.event-past { opacity: 0.5; filter: grayscale(0.5); }

/* --- À propos --- */
.timeline { position: relative; padding-left: 40px; }
.timeline::before { content: ''; position: absolute; left: 10px; top: 0; bottom: 0; width: 2px; background: var(--color-accent); }
.timeline-item { position: relative; margin-bottom: 40px; }
.timeline-item::before {
  content: '';
  position: absolute; left: -34px; top: 6px;
  width: 12px; height: 12px; border-radius: 50%;
  background: var(--color-primary); border: 3px solid var(--color-accent);
}
.timeline-item strong { display: block; font-family: var(--font-heading); font-size: 1.1rem; margin-bottom: 4px; }
.timeline-item p { font-size: 0.9rem; }
.values-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; }
.value-card { text-align: center; padding: 40px 24px; background: var(--color-white); border-radius: var(--radius-md); box-shadow: var(--shadow-sm); }
.value-icon { font-size: 3rem; margin-bottom: 20px; }
.value-card h3 { margin-bottom: 12px; }

/* --- Contact --- */
.contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; }
.form-group { margin-bottom: 20px; }
.form-group label { display: block; font-size: 0.85rem; font-weight: 600; margin-bottom: 6px; }
.form-group input, .form-group textarea, .form-group select {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid var(--color-border);
  border-radius: var(--radius-sm);
  font-family: var(--font-body);
  font-size: 0.95rem;
  background: var(--color-white);
  transition: border-color var(--transition);
  outline: none;
}
.form-group input:focus, .form-group textarea:focus, .form-group select:focus {
  border-color: var(--color-accent);
}
.form-group input.error, .form-group textarea.error { border-color: #ef4444; }
.form-error { font-size: 0.8rem; color: #ef4444; margin-top: 4px; display: none; }
.form-error.visible { display: block; }
.form-group textarea { height: 140px; resize: vertical; }
.map-placeholder {
  height: 300px; border-radius: var(--radius-md);
  background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-primary) 100%);
  display: flex; align-items: center; justify-content: center;
  color: var(--color-white); font-size: 3rem; margin-bottom: 24px;
}
.info-item { display: flex; align-items: flex-start; gap: 12px; margin-bottom: 20px; }
.info-icon {
  width: 40px; height: 40px; border-radius: var(--radius-sm);
  background: var(--color-bg); display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}
.info-item strong { display: block; font-size: 0.85rem; margin-bottom: 2px; }
.info-item p { font-size: 0.9rem; margin: 0; color: var(--color-text); }

/* --- Scroll reveal --- */
.reveal { opacity: 0; transform: translateY(30px); transition: opacity 0.6s ease, transform 0.6s ease; }
.reveal.visible { opacity: 1; transform: translateY(0); }
.reveal-delay-1 { transition-delay: 0.1s; }
.reveal-delay-2 { transition-delay: 0.2s; }
.reveal-delay-3 { transition-delay: 0.3s; }

/* --- Responsive --- */
@media (max-width: 1024px) {
  .grid-4 { grid-template-columns: repeat(2, 1fr); }
  .footer-grid { grid-template-columns: 1fr 1fr; }
  .hero-visual { display: none; }
  .hero-content { max-width: 100%; }
  .contact-grid { grid-template-columns: 1fr; }
  .alt-content { grid-template-columns: 1fr; }
  .alt-content.reverse .alt-img { order: 0; }
  .alt-content.reverse .alt-text { order: 0; }
}
@media (max-width: 768px) {
  .section { padding: 56px 0; }
  .grid-3 { grid-template-columns: 1fr; }
  .grid-2 { grid-template-columns: 1fr; }
  .values-grid { grid-template-columns: 1fr; }
  .navbar-links, .navbar-cta { display: none; }
  .navbar-hamburger { display: flex; }
  .trust-items { gap: 32px; }
  .event-teaser { flex-direction: column; text-align: center; padding: 40px; }
  .footer-grid { grid-template-columns: 1fr; gap: 32px; }
  .footer-bottom { flex-direction: column; gap: 8px; text-align: center; }
  .carousel-track .card { flex: 0 0 100%; }
}
```

- [ ] **Step 2 : Valider visuellement**

Ouvrir `css/style.css` dans VS Code et vérifier :
- Variables couleurs et typographie présentes
- Classes `.btn-primary`, `.card`, `.navbar`, `.footer`, `.hero` définies
- Media queries à 1024px et 768px présentes

- [ ] **Step 3 : Commit**

```bash
cd C:\Users\HP\agri-garden
git add css/style.css
git commit -m "feat: add complete design system CSS"
```

---

## Task 2 : Composants partagés (Navbar + Footer)

**Files:**
- Create: `js/components.js`

- [ ] **Step 1 : Créer `js/components.js`**

```javascript
const PAGES = [
  { href: 'index.html', label: 'Accueil' },
  { href: 'pepiniere.html', label: 'Pépinière' },
  { href: 'boutique.html', label: 'Boutique' },
  { href: 'evenements.html', label: 'Événements' },
  { href: 'a-propos.html', label: 'À propos' },
  { href: 'contact.html', label: 'Contact' },
];

function getCurrentPage() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  return path;
}

function injectNavbar() {
  const current = getCurrentPage();
  const navLinks = PAGES.map(p =>
    `<a href="${p.href}" class="${current === p.href ? 'active' : ''}">${p.label}</a>`
  ).join('');

  const navbar = document.createElement('nav');
  navbar.className = 'navbar';
  navbar.innerHTML = `
    <div class="navbar-inner">
      <a href="index.html" class="navbar-logo">Agri-Garden</a>
      <div class="navbar-links">${navLinks}</div>
      <div class="navbar-cta">
        <a href="boutique.html" class="btn btn-white">Boutique</a>
      </div>
      <button class="navbar-hamburger" id="hamburger" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>
    <div class="navbar-mobile" id="mobileMenu">
      ${PAGES.map(p => `<a href="${p.href}">${p.label}</a>`).join('')}
    </div>
  `;
  document.body.prepend(navbar);

  // Scroll effect
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  });

  // Hamburger
  document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.toggle('open');
  });
}

function injectFooter() {
  const footer = document.createElement('footer');
  footer.className = 'footer';
  footer.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <h3>Agri-Garden</h3>
          <p>Votre pépinière de confiance en Belgique.<br>Des plantes de qualité, cultivées avec passion.</p>
        </div>
        <div class="footer-col">
          <h4>Navigation</h4>
          <ul>
            ${PAGES.map(p => `<li><a href="${p.href}">${p.label}</a></li>`).join('')}
          </ul>
        </div>
        <div class="footer-col">
          <h4>Contact</h4>
          <ul>
            <li><a href="tel:+3200000000">+32 (0)0 000 00 00</a></li>
            <li><a href="mailto:info@agri-garden.be">info@agri-garden.be</a></li>
            <li><a href="contact.html">Rue de la Pépinière 1<br>1000 Bruxelles</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© ${new Date().getFullYear()} Agri-Garden — Tous droits réservés</p>
        <p><a href="#">CGV</a> · <a href="#">Politique de confidentialité</a></p>
      </div>
    </div>
  `;
  document.body.appendChild(footer);
}

document.addEventListener('DOMContentLoaded', () => {
  injectNavbar();
  injectFooter();
});
```

- [ ] **Step 2 : Valider**

Ouvrir n'importe quelle page HTML (même vide) avec `components.js` inclus dans un browser. Vérifier navbar apparaît + footer apparaît.

- [ ] **Step 3 : Commit**

```bash
git add js/components.js
git commit -m "feat: add shared navbar and footer components"
```

---

## Task 3 : Homepage (`index.html`)

**Files:**
- Create: `index.html`

- [ ] **Step 1 : Créer `index.html`**

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Agri-Garden — Pépinière & Plantes en Belgique</title>
  <meta name="description" content="Agri-Garden, votre pépinière en Belgique. Découvrez notre sélection de plantes, arbres et arbustes. Boutique en ligne et événements Chlorophylle Night.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>

  <!-- Hero -->
  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <span class="hero-tag">🌿 Pépinière Belge</span>
        <h1>La nature, au cœur de votre jardin</h1>
        <p>Découvrez notre sélection de plantes cultivées avec passion. Des essences locales aux variétés rares, pour chaque espace et chaque saison.</p>
        <div class="hero-actions">
          <a href="pepiniere.html" class="btn btn-white">Découvrir la pépinière</a>
          <a href="boutique.html" class="btn btn-secondary" style="border-color:rgba(255,255,255,0.5);color:#fff">Accéder à la boutique</a>
        </div>
      </div>
    </div>
    <div class="hero-visual">
      <div class="hero-visual-placeholder">
        <svg width="200" height="200" viewBox="0 0 24 24" fill="white"><path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 008 20C19 20 22 3 22 3c-1 2-8 2-8 2 1-2 4.33-4 7-4-1 4-6 7-11 7 0-.5-.05-1-.12-1.5C9.8 4.5 14.44 0 21 0c-.37 1.84-1.59 6.11-4 8z"/></svg>
      </div>
    </div>
  </section>

  <!-- Bandeau confiance -->
  <div class="trust-band">
    <div class="container">
      <div class="trust-items">
        <div class="trust-item"><strong>+30</strong><span>Années d'expérience</span></div>
        <div class="trust-item"><strong>+500</strong><span>Variétés disponibles</span></div>
        <div class="trust-item"><strong>Belgique</strong><span>Cultivé localement</span></div>
        <div class="trust-item"><strong>Conseil</strong><span>Expert à votre écoute</span></div>
      </div>
    </div>
  </div>

  <!-- Nouveautés -->
  <section class="section">
    <div class="container">
      <div class="section-header reveal">
        <h2>Nouveautés de saison</h2>
        <p>Découvrez les dernières arrivées dans notre pépinière, sélectionnées pour leur beauté et leur rusticité.</p>
      </div>
      <div class="carousel" id="nouveautesCarousel">
        <div class="carousel-track" id="carouselTrack">
          <div class="card reveal reveal-delay-1">
            <div class="card-img-placeholder"><svg width="80" height="80" viewBox="0 0 24 24" fill="white"><path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 008 20C19 20 22 3 22 3c-1 2-8 2-8 2 1-2 4.33-4 7-4-1 4-6 7-11 7 0-.5-.05-1-.12-1.5C9.8 4.5 14.44 0 21 0c-.37 1.84-1.59 6.11-4 8z"/></svg></div>
            <div class="card-body">
              <h3>Collection Printemps 2026</h3>
              <p>Vivaces, bulbes et annuelles pour égayer vos massifs dès le retour des beaux jours.</p>
              <a href="pepiniere.html" class="btn btn-primary">Découvrir</a>
            </div>
          </div>
          <div class="card reveal reveal-delay-2">
            <div class="card-img-placeholder"><svg width="80" height="80" viewBox="0 0 24 24" fill="white"><path d="M12 2a10 10 0 100 20A10 10 0 0012 2zm0 18a8 8 0 110-16 8 8 0 010 16zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg></div>
            <div class="card-body">
              <h3>Promotion Pépinière</h3>
              <p>Jusqu'à -30% sur une sélection d'arbustes et de plantes de haie pour vos projets d'aménagement.</p>
              <a href="boutique.html" class="btn btn-primary">Voir les offres</a>
            </div>
          </div>
          <div class="card reveal reveal-delay-3">
            <div class="card-img-placeholder"><svg width="80" height="80" viewBox="0 0 24 24" fill="white"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l7.59-7.59L21 8l-9 9z"/></svg></div>
            <div class="card-body">
              <h3>Programme Chlorophylle</h3>
              <p>Le programme des soirées Chlorophylle Night by Xav est disponible. Réservez vos places !</p>
              <a href="evenements.html" class="btn btn-primary">Voir le programme</a>
            </div>
          </div>
        </div>
        <div class="carousel-controls">
          <button class="carousel-btn" id="prevBtn">&#8592;</button>
          <div class="carousel-dots" id="carouselDots"></div>
          <button class="carousel-btn" id="nextBtn">&#8594;</button>
        </div>
      </div>
    </div>
  </section>

  <!-- Catégories vedettes -->
  <section class="section section--alt">
    <div class="container">
      <div class="section-header reveal">
        <h2>Explorez notre pépinière</h2>
        <p>Des milliers de plantes organisées par famille pour faciliter votre recherche.</p>
      </div>
      <div class="grid-4">
        <a href="pepiniere.html" class="category-card reveal reveal-delay-1">
          <div class="category-card-img" style="background:#e8f5e9">🌳</div>
          <div class="category-card-body"><h3>Arbres</h3><p>Fruitiers & ornementaux</p></div>
        </a>
        <a href="pepiniere.html" class="category-card reveal reveal-delay-2">
          <div class="category-card-img" style="background:#f3e5f5">🌸</div>
          <div class="category-card-body"><h3>Vivaces</h3><p>Fleurs & couvre-sols</p></div>
        </a>
        <a href="pepiniere.html" class="category-card reveal reveal-delay-3">
          <div class="category-card-img" style="background:#fff8e1">🥦</div>
          <div class="category-card-body"><h3>Potager</h3><p>Légumes & herbes</p></div>
        </a>
        <a href="pepiniere.html" class="category-card reveal">
          <div class="category-card-img" style="background:#e0f2f1">🌿</div>
          <div class="category-card-body"><h3>Arbustes</h3><p>Haies & bordures</p></div>
        </a>
      </div>
    </div>
  </section>

  <!-- Event teaser -->
  <section class="section">
    <div class="container">
      <div class="event-teaser reveal">
        <div class="event-teaser-content">
          <h2>Chlorophylle Night by Xav</h2>
          <p>Des soirées uniques au cœur de la nature. Musique, lumières et végétaux pour une expérience sensorielle inoubliable. De nouvelles dates à venir bientôt.</p>
        </div>
        <div class="event-teaser-action">
          <a href="evenements.html" class="btn btn-white">Voir les événements</a>
        </div>
      </div>
    </div>
  </section>

  <script src="js/components.js"></script>
  <script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 2 : Valider**

Ouvrir `index.html` dans un navigateur. Vérifier :
- Navbar verte apparaît, devient blanche au scroll
- Section hero avec titre et 2 boutons
- Bandeau confiance (4 stats)
- 3 cards dans le carousel
- Section catégories (4 icônes)
- Event teaser vert foncé
- Footer avec 3 colonnes

- [ ] **Step 3 : Commit**

```bash
git add index.html
git commit -m "feat: add homepage"
```

---

## Task 4 : Page Pépinière (`pepiniere.html`)

**Files:**
- Create: `pepiniere.html`

- [ ] **Step 1 : Créer `pepiniere.html`**

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pépinière — Agri-Garden</title>
  <meta name="description" content="Découvrez la pépinière Agri-Garden : arbres, vivaces, potager, arbustes, plantes d'intérieur et bulbes. Conseil expert et qualité garantie.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>

  <section class="page-hero">
    <div class="container">
      <span class="hero-tag">Notre pépinière</span>
      <h1>Des plantes pour chaque jardin</h1>
      <p>Une sélection soignée de plus de 500 variétés, cultivées avec respect pour la nature et les saisons belges.</p>
    </div>
  </section>

  <!-- Catégories -->
  <section class="section">
    <div class="container">
      <div class="section-header reveal">
        <h2>Nos catégories</h2>
        <p>Trouvez la plante idéale selon votre projet : haie, massif, potager, décoration intérieure ou arbre de jardin.</p>
      </div>
      <div class="grid-3">
        <div class="category-card reveal reveal-delay-1">
          <div class="category-card-img" style="background:#e8f5e9">🌳</div>
          <div class="category-card-body">
            <h3>Arbres</h3>
            <p>Fruitiers, ornementaux, à feuilles caduques ou persistantes. Pour structurer votre jardin sur le long terme.</p>
          </div>
        </div>
        <div class="category-card reveal reveal-delay-2">
          <div class="category-card-img" style="background:#fce4ec">🌸</div>
          <div class="category-card-body">
            <h3>Vivaces</h3>
            <p>Fleurs et couvre-sols qui reviennent chaque année. Idéales pour des massifs colorés sans replantation.</p>
          </div>
        </div>
        <div class="category-card reveal reveal-delay-3">
          <div class="category-card-img" style="background:#fff8e1">🥦</div>
          <div class="category-card-body">
            <h3>Potager</h3>
            <p>Légumes, herbes aromatiques et plantes comestibles. Tout pour créer votre jardin nourricier.</p>
          </div>
        </div>
        <div class="category-card reveal reveal-delay-1">
          <div class="category-card-img" style="background:#e0f2f1">🌿</div>
          <div class="category-card-body">
            <h3>Arbustes</h3>
            <p>Haies, bordures et massifs. Des essences locales et résistantes pour structurer vos espaces.</p>
          </div>
        </div>
        <div class="category-card reveal reveal-delay-2">
          <div class="category-card-img" style="background:#f3e5f5">🪴</div>
          <div class="category-card-body">
            <h3>Plantes d'intérieur</h3>
            <p>Tropicales, succulentes, fougères. Pour apporter la nature à l'intérieur de votre maison.</p>
          </div>
        </div>
        <div class="category-card reveal reveal-delay-3">
          <div class="category-card-img" style="background:#fff3e0">🌷</div>
          <div class="category-card-body">
            <h3>Bulbes</h3>
            <p>Tulipes, narcisses, jacinthes et dahlias. Plantez en automne, récoltez en beauté au printemps.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Savoir-faire bloc 1 -->
  <section class="section section--alt">
    <div class="container">
      <div class="alt-content reveal">
        <div class="alt-img">🌱</div>
        <div class="alt-text">
          <h2>Un savoir-faire transmis depuis 30 ans</h2>
          <p>Chez Agri-Garden, chaque plante est choisie, cultivée et soignée avec une attention particulière. Notre équipe de pépiniéristes passionnés sélectionne les meilleures variétés adaptées au climat belge.</p>
          <p>Nous travaillons en privilégiant les méthodes durables : limitation des intrants chimiques, valorisation des espèces locales et respect des cycles naturels.</p>
          <a href="a-propos.html" class="btn btn-primary">Notre histoire</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Savoir-faire bloc 2 -->
  <section class="section">
    <div class="container">
      <div class="alt-content reverse reveal">
        <div class="alt-img">🧑‍🌾</div>
        <div class="alt-text">
          <h2>Conseil personnalisé sur place</h2>
          <p>Que vous soyez jardinier débutant ou passionné confirmé, nos conseillers vous accompagnent dans vos choix. Exposition, sol, entretien — nous répondons à toutes vos questions.</p>
          <p>Retrouvez-nous à la pépinière du lundi au samedi pour un conseil sur mesure et un accueil chaleureux.</p>
          <a href="contact.html" class="btn btn-primary">Nous contacter</a>
        </div>
      </div>
    </div>
  </section>

  <script src="js/components.js"></script>
  <script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 2 : Valider**

Ouvrir `pepiniere.html`. Vérifier : page-hero vert, 6 category-cards en grille 3 colonnes, 2 blocs alternés image/texte, navbar active sur "Pépinière".

- [ ] **Step 3 : Commit**

```bash
git add pepiniere.html
git commit -m "feat: add pepiniere page"
```

---

## Task 5 : Page Boutique (`boutique.html`)

**Files:**
- Create: `boutique.html`

- [ ] **Step 1 : Créer `boutique.html`**

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Boutique — Agri-Garden</title>
  <meta name="description" content="Commandez et réservez vos plantes en ligne sur la boutique Agri-Garden. Arbres, vivaces, arbustes, potager et plantes d'intérieur.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>

  <section class="page-hero">
    <div class="container">
      <span class="hero-tag">Boutique en ligne</span>
      <h1>Commandez vos plantes</h1>
      <p>Sélectionnez vos plantes, ajoutez-les au panier et réservez-les. Retrait à la pépinière sous 48h.</p>
    </div>
  </section>

  <section class="section">
    <div class="container">

      <!-- Filtres -->
      <div class="filter-bar" id="filterBar">
        <button class="filter-btn active" data-filter="all">Tout</button>
        <button class="filter-btn" data-filter="arbre">Arbres</button>
        <button class="filter-btn" data-filter="vivace">Vivaces</button>
        <button class="filter-btn" data-filter="potager">Potager</button>
        <button class="filter-btn" data-filter="arbuste">Arbustes</button>
        <button class="filter-btn" data-filter="interieur">Intérieur</button>
        <button class="filter-btn" data-filter="bulbe">Bulbes</button>
      </div>

      <!-- Grille produits -->
      <div class="grid-4" id="productGrid">

        <div class="product-card reveal" data-category="arbre">
          <div class="product-img">🍎</div>
          <div class="product-body">
            <h3>Pommier 'Gala'</h3>
            <p>Variété productive, fruits sucrés. Idéal en jardin ou verger familial.</p>
            <div class="price">€ 34,90</div>
            <button class="btn btn-primary add-to-cart" data-name="Pommier 'Gala'" data-price="34.90">Réserver</button>
          </div>
        </div>

        <div class="product-card reveal reveal-delay-1" data-category="arbre">
          <div class="product-img">🍒</div>
          <div class="product-body">
            <h3>Cerisier 'Bigarreau'</h3>
            <p>Cerisier demi-tige, floraison spectaculaire au printemps.</p>
            <div class="price">€ 42,00</div>
            <button class="btn btn-primary add-to-cart" data-name="Cerisier 'Bigarreau'" data-price="42.00">Réserver</button>
          </div>
        </div>

        <div class="product-card reveal reveal-delay-2" data-category="vivace">
          <div class="product-img">🌸</div>
          <div class="product-body">
            <h3>Lavande officinale</h3>
            <p>Floraison juin–août, très mellifère. Résistante à la sécheresse.</p>
            <div class="price">€ 7,50</div>
            <button class="btn btn-primary add-to-cart" data-name="Lavande officinale" data-price="7.50">Réserver</button>
          </div>
        </div>

        <div class="product-card reveal reveal-delay-3" data-category="vivace">
          <div class="product-img">🌻</div>
          <div class="product-body">
            <h3>Rudbeckia fulgida</h3>
            <p>Fleurs jaunes d'été à l'automne. Parfaite pour massifs naturels.</p>
            <div class="price">€ 8,90</div>
            <button class="btn btn-primary add-to-cart" data-name="Rudbeckia fulgida" data-price="8.90">Réserver</button>
          </div>
        </div>

        <div class="product-card reveal" data-category="potager">
          <div class="product-img">🍅</div>
          <div class="product-body">
            <h3>Tomate 'Marmande'</h3>
            <p>Variété ancienne côtelée, chair ferme et goût intense.</p>
            <div class="price">€ 3,50</div>
            <button class="btn btn-primary add-to-cart" data-name="Tomate 'Marmande'" data-price="3.50">Réserver</button>
          </div>
        </div>

        <div class="product-card reveal reveal-delay-1" data-category="potager">
          <div class="product-img">🌿</div>
          <div class="product-body">
            <h3>Basilic grand vert</h3>
            <p>Aromatique incontournable pour la cuisine méditerranéenne.</p>
            <div class="price">€ 2,90</div>
            <button class="btn btn-primary add-to-cart" data-name="Basilic grand vert" data-price="2.90">Réserver</button>
          </div>
        </div>

        <div class="product-card reveal reveal-delay-2" data-category="arbuste">
          <div class="product-img">🌿</div>
          <div class="product-body">
            <h3>Buis commun</h3>
            <p>Idéal en haie taillée ou topiaire. Persistant et robuste.</p>
            <div class="price">€ 12,00</div>
            <button class="btn btn-primary add-to-cart" data-name="Buis commun" data-price="12.00">Réserver</button>
          </div>
        </div>

        <div class="product-card reveal reveal-delay-3" data-category="interieur">
          <div class="product-img">🪴</div>
          <div class="product-body">
            <h3>Monstera deliciosa</h3>
            <p>Plante tropicale emblématique. Feuilles découpées spectaculaires.</p>
            <div class="price">€ 24,90</div>
            <button class="btn btn-primary add-to-cart" data-name="Monstera deliciosa" data-price="24.90">Réserver</button>
          </div>
        </div>

        <div class="product-card reveal" data-category="bulbe">
          <div class="product-img">🌷</div>
          <div class="product-body">
            <h3>Tulipes (lot de 10)</h3>
            <p>Mélange de couleurs vives pour massifs printaniers. À planter en automne.</p>
            <div class="price">€ 9,90</div>
            <button class="btn btn-primary add-to-cart" data-name="Tulipes lot 10" data-price="9.90">Réserver</button>
          </div>
        </div>

        <div class="product-card reveal reveal-delay-1" data-category="arbuste">
          <div class="product-img">🌺</div>
          <div class="product-body">
            <h3>Hortensia 'Annabelle'</h3>
            <p>Grandes inflorescences blanches de juillet à septembre.</p>
            <div class="price">€ 18,50</div>
            <button class="btn btn-primary add-to-cart" data-name="Hortensia 'Annabelle'" data-price="18.50">Réserver</button>
          </div>
        </div>

        <div class="product-card reveal reveal-delay-2" data-category="interieur">
          <div class="product-img">🌵</div>
          <div class="product-body">
            <h3>Cactus assortis (pot 12cm)</h3>
            <p>Collection de cactées et succulentes, peu d'entretien.</p>
            <div class="price">€ 6,90</div>
            <button class="btn btn-primary add-to-cart" data-name="Cactus assortis" data-price="6.90">Réserver</button>
          </div>
        </div>

        <div class="product-card reveal reveal-delay-3" data-category="bulbe">
          <div class="product-img">🌼</div>
          <div class="product-body">
            <h3>Dahlias (lot de 3 tubercules)</h3>
            <p>Floraison estivale abondante. Variété pompon bicolore.</p>
            <div class="price">€ 11,90</div>
            <button class="btn btn-primary add-to-cart" data-name="Dahlias lot 3" data-price="11.90">Réserver</button>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- Panier sticky -->
  <div class="cart-indicator" id="cartIndicator">
    <div class="cart-badge" id="cartCount">0</div>
    <span>Panier — <strong id="cartTotal">€ 0,00</strong></span>
    <button class="btn btn-white" style="padding:8px 16px;font-size:0.85rem" id="clearCart">Vider</button>
  </div>

  <script src="js/components.js"></script>
  <script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 2 : Valider**

Ouvrir `boutique.html`. Vérifier : filtres par catégorie visibles, 12 product-cards en grille 4 colonnes, boutons "Réserver" présents, cart-indicator en bas à droite.

- [ ] **Step 3 : Commit**

```bash
git add boutique.html
git commit -m "feat: add boutique page with product grid and cart"
```

---

## Task 6 : Page Événements (`evenements.html`)

**Files:**
- Create: `evenements.html`

- [ ] **Step 1 : Créer `evenements.html`**

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Événements — Agri-Garden</title>
  <meta name="description" content="Soirées Chlorophylle Night by Xav et événements Agri-Garden. Réservez vos places pour une expérience unique au cœur de la nature.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>

  <!-- Hero spécial événements -->
  <section class="hero" style="min-height:60vh">
    <div class="container">
      <div class="hero-content">
        <span class="hero-tag">🎵 Soirées Nature</span>
        <h1>Chlorophylle Night by Xav</h1>
        <p>Des soirées uniques mêlant musique, lumières et végétaux. Une expérience sensorielle inoubliable au cœur de la pépinière.</p>
        <div class="hero-actions">
          <a href="contact.html" class="btn btn-white">Réserver ma place</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Prochains événements -->
  <section class="section">
    <div class="container">
      <div class="section-header reveal">
        <h2>Prochaines dates</h2>
        <p>De nouvelles dates à venir bientôt. Inscrivez-vous pour être informé en premier.</p>
      </div>
      <div style="display:flex;flex-direction:column;gap:16px">

        <div class="event-card reveal">
          <div class="event-date"><strong>14</strong><span>Juin</span></div>
          <div class="event-info">
            <h3>Chlorophylle Night — Édition Été</h3>
            <div class="event-meta">
              <span>🕗 20h00 → 01h00</span>
              <span>📍 Agri-Garden, Bruxelles</span>
            </div>
            <p>Une soirée estivale entre les serres et les massifs fleuris. DJ set ambiant, bar naturel et promenade nocturne dans la pépinière illuminée.</p>
            <a href="contact.html" class="btn btn-primary">Réserver</a>
          </div>
        </div>

        <div class="event-card reveal reveal-delay-1">
          <div class="event-date"><strong>19</strong><span>Juil</span></div>
          <div class="event-info">
            <h3>Atelier Plantation — Initiation</h3>
            <div class="event-meta">
              <span>🕙 10h00 → 13h00</span>
              <span>📍 Agri-Garden, Bruxelles</span>
            </div>
            <p>Apprenez à planter, entretenir et composer vos propres arrangements végétaux. Encadrement par nos pépiniéristes. Matériel fourni.</p>
            <a href="contact.html" class="btn btn-primary">Réserver</a>
          </div>
        </div>

        <div class="event-card reveal reveal-delay-2">
          <div class="event-date"><strong>20</strong><span>Sep</span></div>
          <div class="event-info">
            <h3>Chlorophylle Night — Édition Automne</h3>
            <div class="event-meta">
              <span>🕗 19h30 → 00h00</span>
              <span>📍 Agri-Garden, Bruxelles</span>
            </div>
            <p>La pépinière se pare des couleurs de l'automne pour une soirée chaleureuse et intimiste. Feux de bois, musique acoustique et dégustations locales.</p>
            <a href="contact.html" class="btn btn-primary">Réserver</a>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- Événements passés -->
  <section class="section section--alt">
    <div class="container">
      <div class="section-header reveal">
        <h2>Éditions passées</h2>
        <p>Revivez les moments forts des soirées Chlorophylle.</p>
      </div>
      <div class="grid-3">
        <div class="event-card event-past reveal reveal-delay-1" style="flex-direction:column">
          <div class="event-date" style="width:100%;padding:16px;flex-direction:row;gap:12px">
            <strong>Oct 2025</strong>
          </div>
          <div class="event-info">
            <h3>Chlorophylle Night — Édition Hiver</h3>
            <p>Une soirée magique sous les étoiles. Plus de 200 participants.</p>
          </div>
        </div>
        <div class="event-card event-past reveal reveal-delay-2" style="flex-direction:column">
          <div class="event-date" style="width:100%;padding:16px;flex-direction:row;gap:12px">
            <strong>Juin 2025</strong>
          </div>
          <div class="event-info">
            <h3>Chlorophylle Night — Édition Été</h3>
            <p>Une nuit d'été inoubliable entre les serres illuminées.</p>
          </div>
        </div>
        <div class="event-card event-past reveal reveal-delay-3" style="flex-direction:column">
          <div class="event-date" style="width:100%;padding:16px;flex-direction:row;gap:12px">
            <strong>Mar 2025</strong>
          </div>
          <div class="event-info">
            <h3>Atelier Printemps</h3>
            <p>Initiation à la plantation de vivaces. 40 participants ravis.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <script src="js/components.js"></script>
  <script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 2 : Valider**

Ouvrir `evenements.html`. Vérifier : hero Chlorophylle, 3 event-cards avec date colorée à gauche, section passés grisée.

- [ ] **Step 3 : Commit**

```bash
git add evenements.html
git commit -m "feat: add evenements page"
```

---

## Task 7 : Page À propos (`a-propos.html`)

**Files:**
- Create: `a-propos.html`

- [ ] **Step 1 : Créer `a-propos.html`**

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>À propos — Agri-Garden</title>
  <meta name="description" content="L'histoire d'Agri-Garden, pépinière belge fondée il y a plus de 30 ans. Notre équipe, nos valeurs et notre engagement pour une horticulture durable.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>

  <section class="page-hero">
    <div class="container">
      <span class="hero-tag">Notre histoire</span>
      <h1>Une passion transmise depuis 30 ans</h1>
      <p>De père en fils, Agri-Garden cultive l'amour des plantes et le respect de la nature depuis plus de trois décennies.</p>
    </div>
  </section>

  <!-- Histoire + photo -->
  <section class="section">
    <div class="container">
      <div class="grid-2 reveal">
        <div>
          <h2 style="margin-bottom:20px">Une famille, une pépinière</h2>
          <p style="margin-bottom:16px">Fondée en 1993 par la famille Dupont dans la périphérie bruxelloise, Agri-Garden est née d'une conviction simple : chaque jardin mérite des plantes saines, belles et adaptées à son environnement.</p>
          <p style="margin-bottom:16px">Au fil des années, nous avons développé une expertise unique dans la sélection de variétés résistantes au climat belge, en privilégiant toujours la qualité sur la quantité.</p>
          <p>Aujourd'hui, notre équipe de 12 passionnés accueille des milliers de clients chaque année pour les conseiller et les accompagner dans leurs projets de jardinage.</p>
        </div>
        <div style="border-radius:var(--radius-lg);height:400px;background:linear-gradient(135deg,var(--color-accent) 0%,var(--color-primary) 100%);display:flex;align-items:center;justify-content:center;font-size:8rem">🌿</div>
      </div>
    </div>
  </section>

  <!-- Timeline -->
  <section class="section section--alt">
    <div class="container">
      <div class="section-header reveal">
        <h2>Notre parcours</h2>
        <p>Les grandes étapes qui ont façonné Agri-Garden.</p>
      </div>
      <div style="max-width:640px;margin:0 auto">
        <div class="timeline reveal">
          <div class="timeline-item">
            <strong>1993 — Fondation</strong>
            <p>Ouverture de la première pépinière sur un terrain de 2 hectares à Bruxelles. 80 variétés au catalogue.</p>
          </div>
          <div class="timeline-item">
            <strong>2003 — Expansion</strong>
            <p>Agrandissement du site, création d'une serre de 1 200 m². Lancement de la gamme plantes d'intérieur.</p>
          </div>
          <div class="timeline-item">
            <strong>2012 — Boutique en ligne</strong>
            <p>Lancement de la réservation en ligne. Les clients peuvent commander et récupérer leurs plantes en click & collect.</p>
          </div>
          <div class="timeline-item">
            <strong>2019 — Chlorophylle Night</strong>
            <p>Première édition des soirées Chlorophylle Night by Xav. Un succès immédiat avec plus de 300 participants.</p>
          </div>
          <div class="timeline-item">
            <strong>2026 — Aujourd'hui</strong>
            <p>Plus de 500 variétés, 12 collaborateurs, des milliers de clients fidèles et une nouvelle boutique en ligne.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Valeurs -->
  <section class="section">
    <div class="container">
      <div class="section-header reveal">
        <h2>Nos valeurs</h2>
        <p>Ce qui guide nos choix au quotidien.</p>
      </div>
      <div class="values-grid">
        <div class="value-card reveal reveal-delay-1">
          <div class="value-icon">🌱</div>
          <h3>Durabilité</h3>
          <p>Nous favorisons les méthodes de culture respectueuses de l'environnement, limitons les intrants chimiques et valorisons les espèces locales.</p>
        </div>
        <div class="value-card reveal reveal-delay-2">
          <div class="value-icon">🤝</div>
          <h3>Conseil</h3>
          <p>Chaque client repart avec les bonnes plantes pour son jardin. Nous prenons le temps d'écouter, de comprendre et de guider.</p>
        </div>
        <div class="value-card reveal reveal-delay-3">
          <div class="value-icon">⭐</div>
          <h3>Qualité</h3>
          <p>Sélection rigoureuse des variétés, suivi des cultures, garantie sur toutes les plantes achetées. Votre satisfaction est notre priorité.</p>
        </div>
      </div>
    </div>
  </section>

  <script src="js/components.js"></script>
  <script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 2 : Valider**

Ouvrir `a-propos.html`. Vérifier : grid 2 colonnes histoire/photo, timeline avec 5 étapes et ligne verte verticale, 3 value-cards avec icônes.

- [ ] **Step 3 : Commit**

```bash
git add a-propos.html
git commit -m "feat: add a-propos page"
```

---

## Task 8 : Page Contact (`contact.html`)

**Files:**
- Create: `contact.html`

- [ ] **Step 1 : Créer `contact.html`**

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact — Agri-Garden</title>
  <meta name="description" content="Contactez Agri-Garden. Formulaire en ligne, adresse, horaires d'ouverture et numéro de téléphone.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>

  <section class="page-hero">
    <div class="container">
      <span class="hero-tag">Contactez-nous</span>
      <h1>Nous sommes à votre écoute</h1>
      <p>Une question, un conseil, une réservation ? Notre équipe vous répond dans les 24 heures.</p>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="contact-grid">

        <!-- Formulaire -->
        <div class="reveal">
          <h2 style="margin-bottom:32px">Envoyez-nous un message</h2>
          <form id="contactForm" novalidate>
            <div class="form-group">
              <label for="name">Nom complet *</label>
              <input type="text" id="name" name="name" placeholder="Jean Dupont" required>
              <span class="form-error" id="nameError">Veuillez entrer votre nom.</span>
            </div>
            <div class="form-group">
              <label for="email">Email *</label>
              <input type="email" id="email" name="email" placeholder="jean@exemple.be" required>
              <span class="form-error" id="emailError">Veuillez entrer un email valide.</span>
            </div>
            <div class="form-group">
              <label for="subject">Sujet</label>
              <select id="subject" name="subject">
                <option value="">Choisissez un sujet</option>
                <option value="conseil">Conseil plantes</option>
                <option value="commande">Commande / Réservation</option>
                <option value="evenement">Événement Chlorophylle</option>
                <option value="autre">Autre</option>
              </select>
            </div>
            <div class="form-group">
              <label for="message">Message *</label>
              <textarea id="message" name="message" placeholder="Votre message…" required></textarea>
              <span class="form-error" id="messageError">Veuillez entrer votre message.</span>
            </div>
            <button type="submit" class="btn btn-primary" style="width:100%;justify-content:center">
              Envoyer le message
            </button>
            <div id="formSuccess" style="display:none;margin-top:16px;padding:16px;background:#d1fae5;border-radius:var(--radius-sm);color:#065f46;font-size:0.9rem">
              ✅ Merci ! Votre message a été envoyé. Nous vous répondrons dans les 24 heures.
            </div>
          </form>
        </div>

        <!-- Infos pratiques -->
        <div class="reveal reveal-delay-1">
          <h2 style="margin-bottom:32px">Informations pratiques</h2>
          <div class="map-placeholder">🗺️</div>
          <div class="info-item">
            <div class="info-icon">📍</div>
            <div>
              <strong>Adresse</strong>
              <p>Rue de la Pépinière 1<br>1000 Bruxelles, Belgique</p>
            </div>
          </div>
          <div class="info-item">
            <div class="info-icon">📞</div>
            <div>
              <strong>Téléphone</strong>
              <p><a href="tel:+3200000000" style="color:var(--color-primary)">+32 (0)0 000 00 00</a></p>
            </div>
          </div>
          <div class="info-item">
            <div class="info-icon">📧</div>
            <div>
              <strong>Email</strong>
              <p><a href="mailto:info@agri-garden.be" style="color:var(--color-primary)">info@agri-garden.be</a></p>
            </div>
          </div>
          <div class="info-item">
            <div class="info-icon">🕐</div>
            <div>
              <strong>Horaires</strong>
              <p>Lun – Ven : 9h00 – 18h00<br>Samedi : 9h00 – 17h00<br>Dimanche : Fermé</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <script src="js/components.js"></script>
  <script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 2 : Valider**

Ouvrir `contact.html`. Vérifier : formulaire 4 champs + select, carte placeholder, 4 blocs info (adresse, tel, email, horaires).

- [ ] **Step 3 : Commit**

```bash
git add contact.html
git commit -m "feat: add contact page"
```

---

## Task 9 : Interactions JavaScript (`js/main.js`)

**Files:**
- Create: `js/main.js`

- [ ] **Step 1 : Créer `js/main.js`**

```javascript
document.addEventListener('DOMContentLoaded', () => {

  // ─── 1. Scroll Reveal ───────────────────────────────────────────────
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));


  // ─── 2. Carousel (homepage) ─────────────────────────────────────────
  const track = document.getElementById('carouselTrack');
  const dotsContainer = document.getElementById('carouselDots');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  if (track) {
    const cards = track.querySelectorAll('.card');
    const total = cards.length;
    let current = 0;

    // Create dots
    cards.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
      dot.addEventListener('click', () => goTo(i));
      dotsContainer.appendChild(dot);
    });

    function goTo(index) {
      current = (index + total) % total;
      track.style.transform = `translateX(-${current * (100 / 3)}%)`;
      dotsContainer.querySelectorAll('.carousel-dot').forEach((d, i) => {
        d.classList.toggle('active', i === current);
      });
    }

    prevBtn.addEventListener('click', () => goTo(current - 1));
    nextBtn.addEventListener('click', () => goTo(current + 1));

    // Auto-play
    let autoplay = setInterval(() => goTo(current + 1), 4000);
    track.addEventListener('mouseenter', () => clearInterval(autoplay));
    track.addEventListener('mouseleave', () => {
      autoplay = setInterval(() => goTo(current + 1), 4000);
    });
  }


  // ─── 3. Filtre boutique ──────────────────────────────────────────────
  const filterBar = document.getElementById('filterBar');
  const productGrid = document.getElementById('productGrid');

  if (filterBar && productGrid) {
    filterBar.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;

      filterBar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      productGrid.querySelectorAll('.product-card').forEach(card => {
        const show = filter === 'all' || card.dataset.category === filter;
        card.style.display = show ? 'block' : 'none';
      });
    });
  }


  // ─── 4. Panier (boutique) ────────────────────────────────────────────
  const cartIndicator = document.getElementById('cartIndicator');
  const cartCountEl = document.getElementById('cartCount');
  const cartTotalEl = document.getElementById('cartTotal');
  const clearCartBtn = document.getElementById('clearCart');

  let cartCount = 0;
  let cartTotal = 0;

  if (productGrid) {
    productGrid.addEventListener('click', (e) => {
      const btn = e.target.closest('.add-to-cart');
      if (!btn) return;

      const price = parseFloat(btn.dataset.price);
      cartCount++;
      cartTotal += price;

      cartCountEl.textContent = cartCount;
      cartTotalEl.textContent = '€ ' + cartTotal.toFixed(2).replace('.', ',');
      cartIndicator.classList.add('visible');

      // Visual feedback
      btn.textContent = '✓ Ajouté';
      btn.style.background = 'var(--color-accent)';
      setTimeout(() => {
        btn.textContent = 'Réserver';
        btn.style.background = '';
      }, 1500);
    });

    if (clearCartBtn) {
      clearCartBtn.addEventListener('click', () => {
        cartCount = 0;
        cartTotal = 0;
        cartCountEl.textContent = '0';
        cartTotalEl.textContent = '€ 0,00';
        cartIndicator.classList.remove('visible');
      });
    }
  }


  // ─── 5. Validation formulaire contact ────────────────────────────────
  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let valid = true;

      // Name
      const name = document.getElementById('name');
      const nameError = document.getElementById('nameError');
      if (!name.value.trim()) {
        name.classList.add('error');
        nameError.classList.add('visible');
        valid = false;
      } else {
        name.classList.remove('error');
        nameError.classList.remove('visible');
      }

      // Email
      const email = document.getElementById('email');
      const emailError = document.getElementById('emailError');
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.value.trim())) {
        email.classList.add('error');
        emailError.classList.add('visible');
        valid = false;
      } else {
        email.classList.remove('error');
        emailError.classList.remove('visible');
      }

      // Message
      const message = document.getElementById('message');
      const messageError = document.getElementById('messageError');
      if (!message.value.trim()) {
        message.classList.add('error');
        messageError.classList.add('visible');
        valid = false;
      } else {
        message.classList.remove('error');
        messageError.classList.remove('visible');
      }

      if (valid) {
        contactForm.style.display = 'none';
        document.getElementById('formSuccess').style.display = 'block';
      }
    });

    // Clear error on input
    contactForm.querySelectorAll('input, textarea').forEach(field => {
      field.addEventListener('input', () => {
        field.classList.remove('error');
        const errorEl = document.getElementById(field.id + 'Error');
        if (errorEl) errorEl.classList.remove('visible');
      });
    });
  }

});
```

- [ ] **Step 2 : Valider page par page**

**Homepage** (`index.html`) :
- Éléments `.reveal` s'animent au scroll (fade-in)
- Carousel : clic flèche droite → slide suivant, dots se mettent à jour, auto-play toutes les 4 secondes

**Boutique** (`boutique.html`) :
- Clic "Arbres" → seules les cards `data-category="arbre"` restent visibles
- Clic "Réserver" sur un produit → cart-indicator apparaît en bas à droite, compteur + total se mettent à jour
- Bouton "Vider" → cart-indicator disparaît

**Contact** (`contact.html`) :
- Soumettre le formulaire vide → 3 champs en rouge avec messages d'erreur
- Remplir correctement + soumettre → formulaire remplacé par message de succès vert

- [ ] **Step 3 : Commit final**

```bash
git add js/main.js
git commit -m "feat: add all JS interactions (reveal, carousel, filter, cart, form)"
```

---

## Self-Review

**Couverture spec :**
- ✅ 6 pages HTML (index, pepiniere, boutique, evenements, a-propos, contact)
- ✅ Navbar sticky + hamburger mobile
- ✅ Footer 3 colonnes
- ✅ Carousel accueil
- ✅ Filtres boutique par catégorie
- ✅ Mini-panier sticky
- ✅ Scroll reveal IntersectionObserver
- ✅ Formulaire contact avec validation inline
- ✅ Design system complet (couleurs, typo, composants)
- ✅ Responsive (1024px + 768px)
- ✅ Architecture miroir Next.js pour migration future

**Aucun placeholder TBD/TODO.**
**Cohérence des classes CSS** : `.btn-primary`, `.card`, `.reveal`, `.product-card`, `.event-card` utilisées identiquement partout.
