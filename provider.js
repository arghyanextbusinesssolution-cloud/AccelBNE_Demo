const screens = document.querySelectorAll('.screen');
const toast = document.querySelector('.toast');
const mobileNavOverlay = document.querySelector('.mobile-nav-overlay');
const mobileNavPanel = document.querySelector('.mobile-nav-panel');
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const mobileNavClose = document.querySelector('.nav-close');
let toastTimer;

function toggleMobileNav(forceOpen) {
  const shouldOpen = typeof forceOpen === 'boolean' ? forceOpen : !mobileNavPanel.classList.contains('open');
  mobileNavPanel.classList.toggle('open', shouldOpen);
  mobileNavOverlay.classList.toggle('visible', shouldOpen);
  mobileMenuToggle?.setAttribute('aria-expanded', String(shouldOpen));
  document.body.style.overflow = shouldOpen ? 'hidden' : '';
}

mobileMenuToggle?.addEventListener('click', () => toggleMobileNav());
mobileNavOverlay?.addEventListener('click', () => toggleMobileNav(false));
mobileNavClose?.addEventListener('click', () => toggleMobileNav(false));
document.querySelectorAll('.mobile-nav-links a').forEach((link) => {
  link.addEventListener('click', () => toggleMobileNav(false));
});

function showScreen(id) {
  screens.forEach((screen) => screen.classList.toggle('active', screen.id === id));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

const initialScreen = window.location.hash.slice(1);
if (document.getElementById(initialScreen)) showScreen(initialScreen);

document.querySelectorAll('.brand').forEach((brand) => {
  brand.classList.add('brand-logo');
  brand.setAttribute('aria-label', 'AccelBnB home');
  brand.textContent = '';
  const logo = document.createElement('img');
  logo.src = 'logo3.jpeg';
  logo.alt = 'AccelBnB';
  brand.appendChild(logo);
});

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
}

document.addEventListener('click', (event) => {
  const screenButton = event.target.closest('[data-screen]');
  const dashboardButton = event.target.closest('[data-dash]');
  const toastButton = event.target.closest('[data-toast]');
  if (screenButton) {
    event.preventDefault();
    showScreen(screenButton.dataset.screen);
  }
  if (dashboardButton) {
    event.preventDefault();
    document.querySelectorAll('.dash-panel').forEach((panel) => panel.classList.toggle('active', panel.id === dashboardButton.dataset.dash));
    document.querySelectorAll('.dash-link').forEach((link) => link.classList.toggle('active', link.dataset.dash === dashboardButton.dataset.dash));
  }
  if (toastButton) showToast(toastButton.dataset.toast);
});

document.querySelectorAll('form[data-next]').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (form.reportValidity()) showScreen(form.dataset.next);
  });
});

document.querySelectorAll('.category').forEach((category) => {
  category.addEventListener('click', () => {
    document.querySelectorAll('.category').forEach((item) => item.classList.remove('selected'));
    category.classList.add('selected');
  });
});

function addTradePricingField(block) {
  const priceLabel = [...block.querySelectorAll('label')].find((label) => label.textContent.includes('Starting Price'));
  if (priceLabel) priceLabel.childNodes[0].textContent = 'Starting Price';
  const field = document.createElement('label');
  field.className = 'after-hours-field';
  field.innerHTML = 'After-hours starting price <small>Optional for trade services</small><div class="price-input"><span>$</span><input placeholder="0.00"></div>';
  block.querySelector('.field-grid').appendChild(field);
}

document.querySelectorAll('.service-block').forEach(addTradePricingField);

document.querySelector('.add-service').addEventListener('click', () => {
  const list = document.querySelector('#service-list');
  const number = list.children.length + 1;
  const block = list.firstElementChild.cloneNode(true);
  block.querySelector('.service-head strong').textContent = `Service ${String(number).padStart(2, '0')}`;
  block.querySelectorAll('input').forEach((input) => { input.value = ''; input.placeholder = input.placeholder || 'Add details'; });
  block.querySelector('.after-hours-field')?.remove();
  addTradePricingField(block);
  list.appendChild(block);
  showToast('Another service added');
});

document.addEventListener('click', (event) => {
  if (event.target.matches('.remove-service')) {
    const blocks = document.querySelectorAll('.service-block');
    if (blocks.length > 1) event.target.closest('.service-block').remove();
    else showToast('Keep at least one service');
  }
});