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