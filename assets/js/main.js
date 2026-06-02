'use strict';

/* ============================================================
   Utilidades y estado persistente del widget
   ============================================================ */
const body = document.body;
const root = document.documentElement;
const liveRegion = document.getElementById('liveRegion');
const toast = document.getElementById('toast');
const preferenceKey = 'sonrisaVitalA11y';
const allowedClasses = [
  'high-contrast', 'grayscale', 'pause-motion', 'focus-strong',
  'guide-enabled', 'readable-font', 'wide-spacing', 'hide-images', 'big-cursor'
];

let settings = {
  fontScale: 100,
  theme: 'light',
  classes: []
};

function announce(message) {
  liveRegion.textContent = '';
  window.setTimeout(() => { liveRegion.textContent = message; }, 40);
}

function showToast(message) {
  toast.textContent = message;
  toast.hidden = false;
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => { toast.hidden = true; }, 4200);
}

function saveSettings() {
  try { localStorage.setItem(preferenceKey, JSON.stringify(settings)); } catch (error) {}
}

function updatePressedStates() {
  document.querySelectorAll('[data-toggle]').forEach(button => {
    button.setAttribute('aria-pressed', String(body.classList.contains(button.dataset.toggle)));
  });
  const themeButton = document.querySelector('[data-theme-toggle]');
  themeButton.setAttribute('aria-pressed', String(settings.theme === 'dark'));
}

function applySettings() {
  allowedClasses.forEach(item => body.classList.toggle(item, settings.classes.includes(item)));
  root.dataset.theme = settings.theme;
  root.style.setProperty('--font-size-base', `${settings.fontScale / 100}rem`);
  updatePressedStates();
  saveSettings();
}

function loadSettings() {
  try {
    const saved = JSON.parse(localStorage.getItem(preferenceKey));
    if (saved && typeof saved === 'object') {
      settings = { ...settings, ...saved };
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      settings.theme = 'dark';
    }
  } catch (error) {}
  applySettings();
}

function trapFocus(container, event) {
  if (event.key !== 'Tab') return;
  const focusable = [...container.querySelectorAll(
    'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
  )].filter(el => !el.closest('[hidden]') && el.offsetParent !== null);
  if (!focusable.length) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

/* ============================================================
   Navegación responsive y menú desplegable accesible
   ============================================================ */
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
const treatmentsButton = document.getElementById('treatmentsButton');
const treatmentsMenu = document.getElementById('treatmentsMenu');

function closeMobileMenu() {
  mainNav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Abrir menú principal');
}

menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú principal' : 'Abrir menú principal');
});

treatmentsMenu.setAttribute('role', 'menu');
treatmentsMenu.querySelectorAll('a').forEach(link => link.setAttribute('role', 'menuitem'));

function toggleTreatmentsMenu(open) {
  treatmentsButton.setAttribute('aria-expanded', String(open));
  treatmentsMenu.hidden = !open;
  treatmentsMenu.classList.toggle('open', open);
  if (open) treatmentsMenu.querySelector('a')?.focus();
}

treatmentsButton.addEventListener('click', () => {
  const expanded = treatmentsButton.getAttribute('aria-expanded') === 'true';
  toggleTreatmentsMenu(!expanded);
});

treatmentsButton.addEventListener('keydown', event => {
  if (event.key === 'ArrowDown' || event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    toggleTreatmentsMenu(true);
  }
  if (event.key === 'Escape') toggleTreatmentsMenu(false);
});

treatmentsMenu.addEventListener('keydown', event => {
  const items = [...treatmentsMenu.querySelectorAll('[role="menuitem"]')];
  const index = items.indexOf(document.activeElement);
  if (event.key === 'ArrowDown') {
    event.preventDefault();
    items[Math.min(index + 1, items.length - 1)]?.focus();
  }
  if (event.key === 'ArrowUp') {
    event.preventDefault();
    items[Math.max(index - 1, 0)]?.focus();
  }
  if (event.key === 'Escape') {
    toggleTreatmentsMenu(false);
    treatmentsButton.focus();
  }
});

document.addEventListener('click', event => {
  if (!event.target.closest('.nav-dropdown')) {
    toggleTreatmentsMenu(false);
  }
});

mainNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMobileMenu));

/* ============================================================
   Acordeones nativos con estados ARIA
   ============================================================ */
const accordionTriggers = [...document.querySelectorAll('.accordion-trigger')];

function toggleAccordion(trigger, open) {
  const panel = document.getElementById(trigger.getAttribute('aria-controls'));
  trigger.setAttribute('aria-expanded', String(open));
  panel.hidden = !open;
  trigger.querySelector('[aria-hidden="true"]').textContent = open ? '−' : '+';
}

accordionTriggers.forEach((trigger, index) => {
  trigger.addEventListener('click', () => {
    const expanded = trigger.getAttribute('aria-expanded') === 'true';
    toggleAccordion(trigger, !expanded);
  });
  trigger.addEventListener('keydown', event => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      accordionTriggers[Math.min(index + 1, accordionTriggers.length - 1)].focus();
    }
    if (event.key === 'ArrowUp') {
      event.preventDefault();
      accordionTriggers[Math.max(index - 1, 0)].focus();
    }
    if (event.key === 'Home') {
      event.preventDefault();
      accordionTriggers[0].focus();
    }
    if (event.key === 'End') {
      event.preventDefault();
      accordionTriggers[accordionTriggers.length - 1].focus();
    }
  });
});

/* ============================================================
   Modal accesible basado en <dialog>
   ============================================================ */
const infoModal = document.getElementById('infoModal');
const openInfoModal = document.getElementById('openInfoModal');
const closeInfoModal = document.getElementById('closeInfoModal');
const modalAccept = document.getElementById('modalAccept');

openInfoModal.addEventListener('click', () => {
  infoModal.showModal();
  closeInfoModal.focus();
});
infoModal.addEventListener('keydown', event => trapFocus(infoModal, event));
function closeModal() {
  infoModal.close();
  openInfoModal.focus();
}
closeInfoModal.addEventListener('click', closeModal);
modalAccept.addEventListener('click', closeModal);
infoModal.addEventListener('click', event => {
  const box = infoModal.getBoundingClientRect();
  const inside = event.clientX >= box.left && event.clientX <= box.right &&
                 event.clientY >= box.top && event.clientY <= box.bottom;
  if (!inside) closeModal();
});

/* ============================================================
   Formulario: errores vinculados y anunciados a lector de pantalla
   ============================================================ */
const form = document.getElementById('appointmentForm');
const formAlert = document.getElementById('formAlert');
const requiredFields = [...form.querySelectorAll('[required]')];

const errorMap = {
  fullName: 'fullNameError',
  phone: 'phoneError',
  email: 'emailError',
  service: 'serviceError',
  preferredDate: 'dateError',
  consent: 'consentError'
};

const dateInput = document.getElementById('preferredDate');
const today = new Date();
const localDate = new Date(today.getTime() - today.getTimezoneOffset() * 60000)
  .toISOString().split('T')[0];
dateInput.min = localDate;

const messageInput = document.getElementById('message');
const messageCount = document.getElementById('messageCount');
function updateMessageCount() {
  const length = messageInput.value.length;
  messageCount.textContent = `${length} de 400 caracteres`;
}
messageInput.addEventListener('input', updateMessageCount);
updateMessageCount();

function validateField(field) {
  const error = document.getElementById(errorMap[field.id]);
  if (!error) return field.checkValidity();
  const invalid = !field.checkValidity();
  field.setAttribute('aria-invalid', String(invalid));
  error.classList.toggle('visible', invalid);
  return !invalid;
}

requiredFields.forEach(field => {
  field.addEventListener('blur', () => validateField(field));
  field.addEventListener('change', () => validateField(field));
});

form.addEventListener('submit', event => {
  event.preventDefault();
  const invalidFields = requiredFields.filter(field => !validateField(field));

  if (invalidFields.length) {
    formAlert.classList.add('visible');
    formAlert.focus();
    announce(`El formulario contiene ${invalidFields.length} campos por corregir.`);
    invalidFields[0].focus();
    return;
  }

  formAlert.classList.remove('visible');
  form.reset();
  requiredFields.forEach(field => field.setAttribute('aria-invalid', 'false'));
  showToast('Solicitud enviada correctamente. Nos comunicaremos contigo para confirmar la cita.');
  announce('Solicitud enviada correctamente.');
});

/* ============================================================
   Panel de accesibilidad: personalización complementaria
   ============================================================ */
const a11yLauncher = document.getElementById('a11yLauncher');
const a11yPanel = document.getElementById('a11yPanel');
const closeA11y = document.getElementById('closeA11y');

function openA11yPanel() {
  a11yPanel.hidden = false;
  a11yLauncher.setAttribute('aria-expanded', 'true');
  closeA11y.focus();
}
function closeA11yPanel() {
  a11yPanel.hidden = true;
  a11yLauncher.setAttribute('aria-expanded', 'false');
  a11yLauncher.focus();
}

a11yLauncher.addEventListener('click', () => {
  if (a11yPanel.hidden) openA11yPanel(); else closeA11yPanel();
});
closeA11y.addEventListener('click', closeA11yPanel);
a11yPanel.addEventListener('keydown', event => trapFocus(a11yPanel, event));

document.querySelectorAll('[data-toggle]').forEach(button => {
  button.addEventListener('click', () => {
    const className = button.dataset.toggle;
    const active = settings.classes.includes(className);
    settings.classes = active
      ? settings.classes.filter(item => item !== className)
      : [...settings.classes, className];
    applySettings();
    announce(`${button.textContent.trim()} ${active ? 'desactivado' : 'activado'}.`);
  });
});

document.querySelector('[data-theme-toggle]').addEventListener('click', event => {
  settings.theme = settings.theme === 'dark' ? 'light' : 'dark';
  applySettings();
  announce(`Modo ${settings.theme === 'dark' ? 'oscuro' : 'claro'} activado.`);
});

function changeFont(delta) {
  settings.fontScale = Math.max(90, Math.min(140, settings.fontScale + delta));
  applySettings();
  announce(`Tamaño de texto al ${settings.fontScale} por ciento.`);
}
document.getElementById('fontIncrease').addEventListener('click', () => changeFont(10));
document.getElementById('fontDecrease').addEventListener('click', () => changeFont(-10));
document.getElementById('fontReset').addEventListener('click', () => {
  settings.fontScale = 100;
  applySettings();
  announce('Tamaño de texto restablecido.');
});

document.querySelectorAll('[data-profile]').forEach(button => {
  button.addEventListener('click', () => {
    const profiles = {
      cognitive: ['readable-font', 'wide-spacing', 'pause-motion'],
      lowVision: ['high-contrast', 'focus-strong', 'big-cursor'],
      motor: ['focus-strong', 'big-cursor', 'pause-motion']
    };
    settings.classes = [...new Set([...settings.classes, ...profiles[button.dataset.profile]])];
    if (button.dataset.profile === 'lowVision') settings.fontScale = 120;
    applySettings();
    announce(`${button.textContent.trim()} activado.`);
  });
});

document.getElementById('resetAccessibility').addEventListener('click', () => {
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  settings = { fontScale: 100, theme: 'light', classes: [] };
  applySettings();
  showToast('Ajustes de accesibilidad restablecidos.');
});

/* Guía de lectura: sigue el puntero sin interferir con interacción. */
const readingGuide = document.getElementById('readingGuide');
document.addEventListener('pointermove', event => {
  if (body.classList.contains('guide-enabled')) {
    readingGuide.style.insetBlockStart = `${event.clientY + 12}px`;
  }
});

/* Lectura de contenido iniciada exclusivamente por la persona usuaria. */
const speakButton = document.getElementById('speakPage');
let speaking = false;
speakButton.addEventListener('click', () => {
  if (!('speechSynthesis' in window)) {
    showToast('La lectura en voz alta no está disponible en este navegador.');
    return;
  }
  if (speaking) {
    window.speechSynthesis.cancel();
    speaking = false;
    speakButton.setAttribute('aria-pressed', 'false');
    announce('Lectura detenida.');
    return;
  }
  const text = document.querySelector('main').innerText;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'es-CO';
  utterance.onend = () => {
    speaking = false;
    speakButton.setAttribute('aria-pressed', 'false');
  };
  speaking = true;
  speakButton.setAttribute('aria-pressed', 'true');
  window.speechSynthesis.speak(utterance);
  announce('Lectura iniciada. Pulsa nuevamente para detener.');
});

document.getElementById('keyboardHelp').addEventListener('click', () => {
  closeA11yPanel();
  infoModal.showModal();
  closeInfoModal.focus();
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    if (!a11yPanel.hidden) closeA11yPanel();
    toggleTreatmentsMenu(false);
    closeMobileMenu();
  }
  if (event.altKey && event.key.toLowerCase() === 'a') {
    event.preventDefault();
    openA11yPanel();
  }
});

loadSettings();
