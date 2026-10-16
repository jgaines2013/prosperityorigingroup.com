(function () {
  // Mobile navigation
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');

  function setNav(open) {
    nav.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }

  toggle.addEventListener('click', function () {
    setNav(!nav.classList.contains('open'));
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') setNav(false);
  });

  // Header border once the page scrolls
  var header = document.querySelector('.site-header');
  function onScroll() { header.classList.toggle('scrolled', window.scrollY > 8); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Footer year
  document.getElementById('year').textContent = new Date().getFullYear();

  // Gentle reveal-on-scroll
  var revealTargets = document.querySelectorAll('.section-head, .card, .steps li, .area-list, .about > *, .contact > *');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -60px 0px' });
    revealTargets.forEach(function (el) {
      el.classList.add('reveal');
      io.observe(el);
    });
  }

  // Contact form: validates, then opens the visitor's email app with the message filled in.
  var form = document.getElementById('contact-form');
  var note = document.getElementById('form-note');
  var TO = 'info@prosperityorigingroup.com';

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var ok = true;
    Array.prototype.forEach.call(form.querySelectorAll('[required]'), function (field) {
      var valid = field.value.trim() !== '' && (field.type !== 'email' || /\S+@\S+\.\S+/.test(field.value));
      field.classList.toggle('invalid', !valid);
      if (!valid) ok = false;
    });
    if (!ok) {
      note.textContent = 'Please fill in your name, a valid email, and a message.';
      return;
    }

    var d = new FormData(form);
    var subject = 'Website inquiry from ' + d.get('name');
    var body = [
      'Name: ' + d.get('name'),
      'Email: ' + d.get('email'),
      'Phone: ' + (d.get('phone') || '—'),
      'I am a: ' + d.get('role'),
      '',
      d.get('message')
    ].join('\n');

    window.location.href = 'mailto:' + TO + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    note.textContent = 'Opening your email app… If nothing happens, email us directly at ' + TO + '.';
  });
})();
