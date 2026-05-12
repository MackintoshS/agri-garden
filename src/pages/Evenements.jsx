import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'

const UPCOMING = [
  {
    day: '14', month: 'Juin',
    title: 'Chlorophylle Night — Édition Été',
    time: '🕗 20h00 → 01h00', place: '📍 Agri-Garden, Bruxelles',
    desc: 'Une soirée estivale entre les serres et les massifs fleuris. DJ set ambiant, bar naturel et promenade nocturne dans la pépinière illuminée.',
  },
  {
    day: '19', month: 'Juil',
    title: 'Atelier Plantation — Initiation',
    time: '🕙 10h00 → 13h00', place: '📍 Agri-Garden, Bruxelles',
    desc: 'Apprenez à planter, entretenir et composer vos propres arrangements végétaux. Encadrement par nos pépiniéristes. Matériel fourni.',
  },
  {
    day: '20', month: 'Sep',
    title: 'Chlorophylle Night — Édition Automne',
    time: '🕗 19h30 → 00h00', place: '📍 Agri-Garden, Bruxelles',
    desc: "La pépinière se pare des couleurs de l'automne pour une soirée chaleureuse et intimiste. Feux de bois, musique acoustique et dégustations locales.",
  },
]

const PAST = [
  { period: 'Oct 2025', title: 'Chlorophylle Night — Édition Hiver', desc: 'Une soirée magique sous les étoiles. Plus de 200 participants.' },
  { period: 'Juin 2025', title: 'Chlorophylle Night — Édition Été', desc: "Une nuit d'été inoubliable entre les serres illuminées." },
  { period: 'Mar 2025', title: 'Atelier Printemps', desc: 'Initiation à la plantation de vivaces. 40 participants ravis.' },
]

export default function Evenements() {
  useReveal()
  return (
    <>
      <section className="hero" style={{ minHeight: '60vh' }}>
        <div className="container">
          <div className="hero-content">
            <span className="hero-tag">🎵 Soirées Nature</span>
            <h1>Chlorophylle Night by Xav</h1>
            <p>Des soirées uniques mêlant musique, lumières et végétaux. Une expérience sensorielle inoubliable au cœur de la pépinière.</p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-white">Réserver ma place</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Prochains événements */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <h2>Prochaines dates</h2>
            <p>De nouvelles dates à venir bientôt. Inscrivez-vous pour être informé en premier.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {UPCOMING.map((ev, i) => (
              <div key={i} className={`event-card reveal reveal-delay-${i + 1}`}>
                <div className="event-date"><strong>{ev.day}</strong><span>{ev.month}</span></div>
                <div className="event-info">
                  <h3>{ev.title}</h3>
                  <div className="event-meta"><span>{ev.time}</span><span>{ev.place}</span></div>
                  <p>{ev.desc}</p>
                  <Link to="/contact" className="btn btn-primary">Réserver</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Éditions passées */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-header reveal">
            <h2>Éditions passées</h2>
            <p>Revivez les moments forts des soirées Chlorophylle.</p>
          </div>
          <div className="grid-3">
            {PAST.map((ev, i) => (
              <div key={i} className={`event-card event-past reveal reveal-delay-${i + 1}`} style={{ flexDirection: 'column' }}>
                <div className="event-date" style={{ width: '100%', padding: '16px', flexDirection: 'row', gap: '12px' }}>
                  <strong>{ev.period}</strong>
                </div>
                <div className="event-info">
                  <h3>{ev.title}</h3>
                  <p>{ev.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
