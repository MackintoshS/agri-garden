import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import heroImage from '../assets/cropped-cropped-pub_pepiniere.jpeg'

const CARDS = [
  {
    icon: '🌿',
    title: 'Collection Printemps 2026',
    desc: 'Vivaces, bulbes et annuelles pour égayer vos massifs dès le retour des beaux jours.',
    to: '/pepiniere',
    cta: 'Découvrir',
  },
  {
    icon: '🏷️',
    title: 'Promotion Pépinière',
    desc: "Jusqu'à -30% sur une sélection d'arbustes et de plantes de haie pour vos projets d'aménagement.",
    to: '/boutique',
    cta: 'Voir les offres',
  },
  {
    icon: '📅',
    title: 'Programme Chlorophylle',
    desc: 'Le programme des soirées Chlorophylle Night by Xav est disponible. Réservez vos places !',
    to: '/evenements',
    cta: 'Voir le programme',
  },
]

const CATEGORIES = [
  { icon: '🌳', label: 'Arbres', sub: 'Fruitiers & ornementaux', bg: '#e8f5e9' },
  { icon: '🌸', label: 'Vivaces', sub: 'Fleurs & couvre-sols', bg: '#f3e5f5' },
  { icon: '🥦', label: 'Potager', sub: 'Légumes & herbes', bg: '#fff8e1' },
  { icon: '🌿', label: 'Arbustes', sub: 'Haies & bordures', bg: '#e0f2f1' },
]

export default function Home() {
  useReveal()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => setCurrent(c => (c + 1) % CARDS.length), 4000)
    return () => clearInterval(interval)
  }, [])

  const goTo = (index) => setCurrent((index + CARDS.length) % CARDS.length)

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>La nature, au cœur de votre jardin</h1>
            <p>Découvrez notre sélection de plantes cultivées avec passion. Des essences locales aux variétés rares, pour chaque espace et chaque saison.</p>
            <div className="hero-actions">
              <Link to="/pepiniere" className="btn btn-white">Découvrir la pépinière</Link>
              <Link to="/boutique" className="btn btn-secondary" style={{ borderColor: 'rgba(255,255,255,0.5)', color: '#fff' }}>
                Accéder à la boutique
              </Link>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <img src={heroImage} alt="Agri-Garden Pépinière" className="hero-image" />
        </div>
      </section>

      {/* Bandeau confiance */}
      <div className="trust-band">
        <div className="container">
          <div className="trust-items">
            <div className="trust-item"><strong>+30</strong><span>Années d'expérience</span></div>
            <div className="trust-item"><strong>+500</strong><span>Variétés disponibles</span></div>
            <div className="trust-item"><strong>Belgique</strong><span>Cultivé localement</span></div>
            <div className="trust-item"><strong>Conseil</strong><span>Expert à votre écoute</span></div>
          </div>
        </div>
      </div>

      {/* Nouveautés carousel */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <h2>Nouveautés de saison</h2>
            <p>Découvrez les dernières arrivées dans notre pépinière, sélectionnées pour leur beauté et leur rusticité.</p>
          </div>
          <div className="carousel">
            <div className="carousel-track" style={{ transform: `translateX(-${current * (100 / 3)}%)` }}>
              {CARDS.map((card, i) => (
                <div key={i} className={`card reveal reveal-delay-${i + 1}`}>
                  <div className="card-img-placeholder">
                    <span style={{ fontSize: '4rem' }}>{card.icon}</span>
                  </div>
                  <div className="card-body">
                    <h3>{card.title}</h3>
                    <p>{card.desc}</p>
                    <Link to={card.to} className="btn btn-primary">{card.cta}</Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="carousel-controls">
              <button className="carousel-btn" onClick={() => goTo(current - 1)}>&#8592;</button>
              <div className="carousel-dots">
                {CARDS.map((_, i) => (
                  <button key={i} className={`carousel-dot${i === current ? ' active' : ''}`} onClick={() => goTo(i)} />
                ))}
              </div>
              <button className="carousel-btn" onClick={() => goTo(current + 1)}>&#8594;</button>
            </div>
          </div>
        </div>
      </section>

      {/* Catégories vedettes */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-header reveal">
            <h2>Explorez notre pépinière</h2>
            <p>Des milliers de plantes organisées par famille pour faciliter votre recherche.</p>
          </div>
          <div className="grid-4">
            {CATEGORIES.map((cat, i) => (
              <Link key={i} to="/pepiniere" className={`category-card reveal reveal-delay-${(i % 3) + 1}`}>
                <div className="category-card-img" style={{ background: cat.bg }}>{cat.icon}</div>
                <div className="category-card-body"><h3>{cat.label}</h3><p>{cat.sub}</p></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Event teaser */}
      <section className="section">
        <div className="container">
          <div className="event-teaser reveal">
            <div className="event-teaser-content">
              <h2>Chlorophylle Night by Xav</h2>
              <p>Des soirées uniques au cœur de la nature. Musique, lumières et végétaux pour une expérience sensorielle inoubliable. De nouvelles dates à venir bientôt.</p>
            </div>
            <div className="event-teaser-action">
              <Link to="/evenements" className="btn btn-white">Voir les événements</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
