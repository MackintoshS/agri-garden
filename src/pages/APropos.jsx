import { useReveal } from '../hooks/useReveal'

const TIMELINE = [
  { year: '1993 — Fondation', desc: 'Ouverture de la première pépinière sur un terrain de 2 hectares à Bruxelles. 80 variétés au catalogue.' },
  { year: '2003 — Expansion', desc: "Agrandissement du site, création d'une serre de 1 200 m². Lancement de la gamme plantes d'intérieur." },
  { year: '2012 — Boutique en ligne', desc: 'Lancement de la réservation en ligne. Les clients peuvent commander et récupérer leurs plantes en click & collect.' },
  { year: '2019 — Chlorophylle Night', desc: "Première édition des soirées Chlorophylle Night by Xav. Un succès immédiat avec plus de 300 participants." },
  { year: "2026 — Aujourd'hui", desc: 'Plus de 500 variétés, 12 collaborateurs, des milliers de clients fidèles et une nouvelle boutique en ligne.' },
]

const VALUES = [
  { icon: '🌱', title: 'Durabilité', desc: "Nous favorisons les méthodes de culture respectueuses de l'environnement, limitons les intrants chimiques et valorisons les espèces locales." },
  { icon: '🤝', title: 'Conseil', desc: "Chaque client repart avec les bonnes plantes pour son jardin. Nous prenons le temps d'écouter, de comprendre et de guider." },
  { icon: '⭐', title: 'Qualité', desc: 'Sélection rigoureuse des variétés, suivi des cultures, garantie sur toutes les plantes achetées. Votre satisfaction est notre priorité.' },
]

export default function APropos() {
  useReveal()
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="hero-tag">Notre histoire</span>
          <h1>Une passion transmise depuis 30 ans</h1>
          <p>De père en fils, Agri-Garden cultive l'amour des plantes et le respect de la nature depuis plus de trois décennies.</p>
        </div>
      </section>

      {/* Histoire */}
      <section className="section">
        <div className="container">
          <div className="grid-2 reveal">
            <div>
              <h2 style={{ marginBottom: '20px' }}>Une famille, une pépinière</h2>
              <p style={{ marginBottom: '16px' }}>Fondée en 1993 par la famille Dupont dans la périphérie bruxelloise, Agri-Garden est née d'une conviction simple : chaque jardin mérite des plantes saines, belles et adaptées à son environnement.</p>
              <p style={{ marginBottom: '16px' }}>Au fil des années, nous avons développé une expertise unique dans la sélection de variétés résistantes au climat belge, en privilégiant toujours la qualité sur la quantité.</p>
              <p>Aujourd'hui, notre équipe de 12 passionnés accueille des milliers de clients chaque année pour les conseiller et les accompagner dans leurs projets de jardinage.</p>
            </div>
            <div style={{ borderRadius: 'var(--radius-lg)', height: '400px', background: 'linear-gradient(135deg,var(--color-accent) 0%,var(--color-primary) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '8rem' }}>
              🌿
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-header reveal">
            <h2>Notre parcours</h2>
            <p>Les grandes étapes qui ont façonné Agri-Garden.</p>
          </div>
          <div style={{ maxWidth: '640px', margin: '0 auto' }}>
            <div className="timeline reveal">
              {TIMELINE.map((item, i) => (
                <div key={i} className="timeline-item">
                  <strong>{item.year}</strong>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <h2>Nos valeurs</h2>
            <p>Ce qui guide nos choix au quotidien.</p>
          </div>
          <div className="values-grid">
            {VALUES.map((v, i) => (
              <div key={i} className={`value-card reveal reveal-delay-${i + 1}`}>
                <div className="value-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
