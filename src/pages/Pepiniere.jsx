import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'

const CATEGORIES = [
  { icon: '🌳', label: 'Arbres', desc: 'Fruitiers, ornementaux, à feuilles caduques ou persistantes. Pour structurer votre jardin sur le long terme.', bg: '#e8f5e9' },
  { icon: '🌸', label: 'Vivaces', desc: 'Fleurs et couvre-sols qui reviennent chaque année. Idéales pour des massifs colorés sans replantation.', bg: '#fce4ec' },
  { icon: '🥦', label: 'Potager', desc: 'Légumes, herbes aromatiques et plantes comestibles. Tout pour créer votre jardin nourricier.', bg: '#fff8e1' },
  { icon: '🌿', label: 'Arbustes', desc: 'Haies, bordures et massifs. Des essences locales et résistantes pour structurer vos espaces.', bg: '#e0f2f1' },
  { icon: '🪴', label: "Plantes d'intérieur", desc: "Tropicales, succulentes, fougères. Pour apporter la nature à l'intérieur de votre maison.", bg: '#f3e5f5' },
  { icon: '🌷', label: 'Bulbes', desc: 'Tulipes, narcisses, jacinthes et dahlias. Plantez en automne, récoltez en beauté au printemps.', bg: '#fff3e0' },
]

export default function Pepiniere() {
  useReveal()
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="hero-tag">Notre pépinière</span>
          <h1>Des plantes pour chaque jardin</h1>
          <p>Une sélection soignée de plus de 500 variétés, cultivées avec respect pour la nature et les saisons belges.</p>
        </div>
      </section>

      {/* Catégories */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <h2>Nos catégories</h2>
            <p>Trouvez la plante idéale selon votre projet : haie, massif, potager, décoration intérieure ou arbre de jardin.</p>
          </div>
          <div className="grid-3">
            {CATEGORIES.map((cat, i) => (
              <div key={i} className={`category-card reveal reveal-delay-${(i % 3) + 1}`}>
                <div className="category-card-img" style={{ background: cat.bg }}>{cat.icon}</div>
                <div className="category-card-body">
                  <h3>{cat.label}</h3>
                  <p>{cat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Savoir-faire 1 */}
      <section className="section section--alt">
        <div className="container">
          <div className="alt-content reveal">
            <div className="alt-img">🌱</div>
            <div className="alt-text">
              <h2>Un savoir-faire transmis depuis 30 ans</h2>
              <p>Chez Agri-Garden, chaque plante est choisie, cultivée et soignée avec une attention particulière. Notre équipe de pépiniéristes passionnés sélectionne les meilleures variétés adaptées au climat belge.</p>
              <p>Nous travaillons en privilégiant les méthodes durables : limitation des intrants chimiques, valorisation des espèces locales et respect des cycles naturels.</p>
              <Link to="/a-propos" className="btn btn-primary">Notre histoire</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Savoir-faire 2 */}
      <section className="section">
        <div className="container">
          <div className="alt-content reverse reveal">
            <div className="alt-img">🧑‍🌾</div>
            <div className="alt-text">
              <h2>Conseil personnalisé sur place</h2>
              <p>Que vous soyez jardinier débutant ou passionné confirmé, nos conseillers vous accompagnent dans vos choix. Exposition, sol, entretien — nous répondons à toutes vos questions.</p>
              <p>Retrouvez-nous à la pépinière du lundi au samedi pour un conseil sur mesure et un accueil chaleureux.</p>
              <Link to="/contact" className="btn btn-primary">Nous contacter</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
