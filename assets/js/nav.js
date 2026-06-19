// Shared nav + footer injection
const NAV_HTML = `
<nav id="main-nav">
  <a class="nav-logo" href="/index.html">
    <img src="/assets/images/logo.png" alt="JCR Industrial Coatings">
  </a>
  <ul class="nav-links" id="nav-links">
    <li><a href="/index.html">Home</a></li>
    <li><a href="/services.html">Services</a></li>
    <li><a href="/safety.html">Safety</a></li>
    <li><a href="/projects.html">Projects</a></li>
    <li><a href="/contact.html">Contact</a></li>
  </ul>
  <div class="nav-cta">
    <a href="/contact.html" class="btn btn-gold">Request Prequalification</a>
  </div>
  <button class="hamburger" id="hamburger" aria-label="Menu">
    <span></span><span></span><span></span>
  </button>
</nav>`;

const FOOTER_HTML = `
<footer>
  <div class="footer-inner">
    <div class="footer-brand">
      <img src="/assets/images/logo.png" alt="JCR Industrial Coatings">
      <p>Specialty industrial coatings subcontractor serving municipal water and wastewater infrastructure throughout Ohio and the Midwest.</p>
    </div>
    <div class="footer-col">
      <h4>Navigation</h4>
      <ul>
        <li><a href="/index.html">Home</a></li>
        <li><a href="/services.html">Services</a></li>
        <li><a href="/safety.html">Safety</a></li>
        <li><a href="/projects.html">Projects</a></li>
        <li><a href="/contact.html">Contact</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Contact</h4>
      <ul>
        <li><a href="tel:+19378567944">(937) 856-7944</a></li>
        <li><a href="mailto:julio.ruiz@jcrconstructioninc.com">julio.ruiz@jcrconstructioninc.com</a></li>
        <li style="color:rgba(255,255,255,0.5);font-size:0.88rem;margin-top:0.5rem;">340 E Shoop Rd<br>Tipp City, OH 45371</li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <p>&copy; ${new Date().getFullYear()} JCR Industrial Coatings Inc. All rights reserved.</p>
    <div class="footer-ids">
      <span>UEI: FBJ6JAF9R1H4</span>
      <span>CAGE: 5XF40</span>
    </div>
  </div>
</footer>`;

document.addEventListener('DOMContentLoaded', () => {
  // Inject nav
  const navPlaceholder = document.getElementById('nav-placeholder');
  if (navPlaceholder) navPlaceholder.outerHTML = NAV_HTML;

  // Inject footer
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) footerPlaceholder.outerHTML = FOOTER_HTML;

  // Active nav link
  const links = document.querySelectorAll('.nav-links a');
  links.forEach(link => {
    if (link.href === window.location.href) link.classList.add('active');
  });

  // Hamburger
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }
});
