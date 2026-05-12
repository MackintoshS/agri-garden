import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const INFO = [
  { icon: '📍', label: 'Adresse', content: 'Rue de la Pépinière 1\n1000 Bruxelles, Belgique' },
  { icon: '📞', label: 'Téléphone', content: '+32 (0)0 000 00 00', href: 'tel:+3200000000' },
  { icon: '📧', label: 'Email', content: 'info@agri-garden.be', href: 'mailto:info@agri-garden.be' },
  { icon: '🕐', label: 'Horaires', content: 'Lun – Ven : 9h00 – 18h00\nSamedi : 9h00 – 17h00\nDimanche : Fermé' },
]

export default function Contact() {
  useReveal()
  const [fields, setFields] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const errs = {}
    if (!fields.name.trim()) errs.name = 'Veuillez entrer votre nom.'
    if (!EMAIL_REGEX.test(fields.email)) errs.email = 'Adresse e-mail invalide.'
    if (!fields.subject.trim()) errs.subject = 'Veuillez indiquer un sujet.'
    if (fields.message.trim().length < 10) errs.message = 'Le message doit faire au moins 10 caractères.'
    return errs
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFields(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: undefined }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setSubmitted(true)
    setFields({ name: '', email: '', subject: '', message: '' })
    setErrors({})
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="hero-tag">Contact</span>
          <h1>Parlons de votre jardin</h1>
          <p>Une question sur nos plantes, une réservation ou juste un bonjour ? Nous sommes là pour vous répondre.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid reveal">

            {/* Formulaire */}
            <div className="contact-form-wrap">
              {submitted ? (
                <div className="success-message">
                  <div style={{ fontSize: '3rem', marginBottom: '16px' }}>✅</div>
                  <h3>Message envoyé !</h3>
                  <p>Merci pour votre message. Nous vous répondrons dans les plus brefs délais.</p>
                  <button className="btn btn-primary" style={{ marginTop: '24px' }} onClick={() => setSubmitted(false)}>
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                  <h2 style={{ marginBottom: '24px' }}>Envoyez-nous un message</h2>

                  <div className="form-group">
                    <label htmlFor="name">Nom complet *</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      className={errors.name ? 'error' : ''}
                      placeholder="Jean Dupont"
                      value={fields.name}
                      onChange={handleChange}
                    />
                    <p className={`form-error${errors.name ? ' visible' : ''}`}>{errors.name}</p>
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Adresse e-mail *</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      className={errors.email ? 'error' : ''}
                      placeholder="jean@example.com"
                      value={fields.email}
                      onChange={handleChange}
                    />
                    <p className={`form-error${errors.email ? ' visible' : ''}`}>{errors.email}</p>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Sujet *</label>
                    <input
                      id="subject"
                      type="text"
                      name="subject"
                      className={errors.subject ? 'error' : ''}
                      placeholder="Renseignement sur une plante"
                      value={fields.subject}
                      onChange={handleChange}
                    />
                    <p className={`form-error${errors.subject ? ' visible' : ''}`}>{errors.subject}</p>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className={errors.message ? 'error' : ''}
                      placeholder="Décrivez votre demande..."
                      value={fields.message}
                      onChange={handleChange}
                    />
                    <p className={`form-error${errors.message ? ' visible' : ''}`}>{errors.message}</p>
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                    Envoyer le message
                  </button>
                </form>
              )}
            </div>

            {/* Informations */}
            <div className="contact-info-wrap">
              <h2 style={{ marginBottom: '24px' }}>Nos coordonnées</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {INFO.map((item, i) => (
                  <div key={i} className="info-item">
                    <div className="info-icon">{item.icon}</div>
                    <div>
                      <strong>{item.label}</strong>
                      {item.href ? (
                        <a href={item.href} style={{ display: 'block', color: 'var(--color-primary)', textDecoration: 'none' }}>
                          {item.content}
                        </a>
                      ) : (
                        <p style={{ whiteSpace: 'pre-line', margin: 0 }}>{item.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="map-placeholder" style={{ marginTop: '32px', borderRadius: 'var(--radius-lg)', height: '200px', background: 'linear-gradient(135deg,var(--color-accent) 0%,var(--color-primary) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem' }}>
                🗺️
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
