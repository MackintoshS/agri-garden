import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

const PRODUCTS = [
  { icon: '🍎', name: "Pommier 'Gala'", desc: 'Variété productive, fruits sucrés. Idéal en jardin ou verger familial.', price: 34.90, category: 'arbre' },
  { icon: '🍒', name: "Cerisier 'Bigarreau'", desc: 'Cerisier demi-tige, floraison spectaculaire au printemps.', price: 42.00, category: 'arbre' },
  { icon: '🌸', name: 'Lavande officinale', desc: 'Floraison juin–août, très mellifère. Résistante à la sécheresse.', price: 7.50, category: 'vivace' },
  { icon: '🌻', name: 'Rudbeckia fulgida', desc: "Fleurs jaunes d'été à l'automne. Parfaite pour massifs naturels.", price: 8.90, category: 'vivace' },
  { icon: '🍅', name: "Tomate 'Marmande'", desc: 'Variété ancienne côtelée, chair ferme et goût intense.', price: 3.50, category: 'potager' },
  { icon: '🌿', name: 'Basilic grand vert', desc: 'Aromatique incontournable pour la cuisine méditerranéenne.', price: 2.90, category: 'potager' },
  { icon: '🌿', name: 'Buis commun', desc: 'Idéal en haie taillée ou topiaire. Persistant et robuste.', price: 12.00, category: 'arbuste' },
  { icon: '🪴', name: 'Monstera deliciosa', desc: 'Plante tropicale emblématique. Feuilles découpées spectaculaires.', price: 24.90, category: 'interieur' },
  { icon: '🌷', name: 'Tulipes (lot de 10)', desc: 'Mélange de couleurs vives pour massifs printaniers. À planter en automne.', price: 9.90, category: 'bulbe' },
  { icon: '🌺', name: "Hortensia 'Annabelle'", desc: 'Grandes inflorescences blanches de juillet à septembre.', price: 18.50, category: 'arbuste' },
  { icon: '🌵', name: 'Cactus assortis (pot 12cm)', desc: "Collection de cactées et succulentes, peu d'entretien.", price: 6.90, category: 'interieur' },
  { icon: '🌼', name: 'Dahlias (lot de 3 tubercules)', desc: 'Floraison estivale abondante. Variété pompon bicolore.', price: 11.90, category: 'bulbe' },
]

const FILTERS = [
  { value: 'all', label: 'Tout' },
  { value: 'arbre', label: 'Arbres' },
  { value: 'vivace', label: 'Vivaces' },
  { value: 'potager', label: 'Potager' },
  { value: 'arbuste', label: 'Arbustes' },
  { value: 'interieur', label: 'Intérieur' },
  { value: 'bulbe', label: 'Bulbes' },
]

export default function Boutique() {
  useReveal()
  const [activeFilter, setActiveFilter] = useState('all')
  const [cartCount, setCartCount] = useState(0)
  const [cartTotal, setCartTotal] = useState(0)
  const [added, setAdded] = useState(null)

  const filtered = PRODUCTS.filter(p => activeFilter === 'all' || p.category === activeFilter)

  const addToCart = (product, idx) => {
    setCartCount(c => c + 1)
    setCartTotal(t => t + product.price)
    setAdded(idx)
    setTimeout(() => setAdded(null), 1500)
  }

  const clearCart = () => {
    setCartCount(0)
    setCartTotal(0)
  }

  const formatPrice = (n) => '€ ' + n.toFixed(2).replace('.', ',')

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="hero-tag">Boutique en ligne</span>
          <h1>Commandez vos plantes</h1>
          <p>Sélectionnez vos plantes, ajoutez-les au panier et réservez-les. Retrait à la pépinière sous 48h.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="filter-bar">
            {FILTERS.map(f => (
              <button
                key={f.value}
                className={`filter-btn${activeFilter === f.value ? ' active' : ''}`}
                onClick={() => setActiveFilter(f.value)}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="grid-4">
            {filtered.map((product, i) => (
              <div key={product.name} className={`product-card reveal reveal-delay-${(i % 3) + 1}`}>
                <div className="product-img">{product.icon}</div>
                <div className="product-body">
                  <h3>{product.name}</h3>
                  <p>{product.desc}</p>
                  <div className="price">{formatPrice(product.price)}</div>
                  <button
                    className="btn btn-primary"
                    style={added === i ? { background: 'var(--color-accent)' } : {}}
                    onClick={() => addToCart(product, i)}
                  >
                    {added === i ? '✓ Ajouté' : 'Réserver'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cart indicator */}
      <div className={`cart-indicator${cartCount > 0 ? ' visible' : ''}`}>
        <div className="cart-badge">{cartCount}</div>
        <span>Panier — <strong>{formatPrice(cartTotal)}</strong></span>
        <button className="btn btn-white" style={{ padding: '8px 16px', fontSize: '0.85rem' }} onClick={clearCart}>
          Vider
        </button>
      </div>
    </>
  )
}
