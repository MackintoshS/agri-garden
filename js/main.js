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
