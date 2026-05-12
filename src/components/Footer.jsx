import { Link } from 'react-router-dom'

const PAGES = [
  { to: '/', label: 'Accueil' },
  { to: '/pepiniere', label: 'Pépinière' },
  { to: '/boutique', label: 'Boutique' },
  { to: '/evenements', label: 'Événements' },
  { to: '/a-propos', label: 'À propos' },
  { to: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>Agri-Garden</h3>
            <p>Votre pépinière de confiance en Belgique.<br />Des plantes de qualité, cultivées avec passion.</p>
          </div>
          <div className="footer-col">
            <h4>Navigation</h4>
            <ul>
              {PAGES.map(p => (
                <li key={p.to}><Link to={p.to}>{p.label}</Link></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="tel:+3200000000">+32 (0)0 000 00 00</a></li>
              <li><a href="mailto:info@agri-garden.be">info@agri-garden.be</a></li>
              <li><Link to="/contact">Rue de la Pépinière 1<br />1000 Bruxelles</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Agri-Garden — Tous droits réservés</p>
          <p><a href="#">CGV</a> · <a href="#">Politique de confidentialité</a></p>
        </div>
      </div>
    </footer>
  )
}
