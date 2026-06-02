# Referencias normativas — UI, UX y accesibilidad

Resumen para el proyecto **usabilidadyaccesibilidad** (repositorio académico).

## UI / UX (heurísticas y estándares transversales)

| Principio | Aplicación en Sonrisa Vital |
|-----------|----------------------------|
| Visibilidad del estado del sistema | Toasts, `aria-live`, errores de formulario |
| Coincidencia con el mundo real | Lenguaje claro, sin jerga médica innecesaria |
| Control y libertad del usuario | Widget de accesibilidad reversible, modal cerrable con Esc |
| Consistencia | Sistema de diseño en variables CSS, botones uniformes |
| Prevención de errores | Validación en envío, fecha mínima, contador de caracteres |
| Reconocimiento antes que recuerdo | Mapa del sitio, migas de pan, navegación persistente |
| Flexibilidad de uso | Perfiles rápidos de accesibilidad, zoom de texto |
| Diseño estético y minimalista | Jerarquía tipográfica, espaciado amplio |
| Ayuda a reconocer y recuperarse de errores | Mensajes por campo + resumen `role="alert"` |
| Ayuda y documentación | Modal de atajos, declaración de accesibilidad |

## España

- **UNE-EN 301549:2022** — requisitos de accesibilidad para productos y servicios TIC.
- **RD 1112/2018** — accesibilidad de sitios web y aplicaciones móviles del sector público.
- **Ley 34/2002 (LSSI)** — información de servicios de la sociedad de la información (aviso legal, cookies si aplica).
- **LOPDGDD / RGPD** — privacidad en formularios.

## Francia

- **RGAA 4.1** — 106 criterios alineados con WCAG 2.1; obligatorio para administraciones.
- **Loi nº 2005-102** — igualdad de derechos y oportunidades.
- **RGPD** — consentimiento y derechos en formularios.
- **Déclaration d'accessibilité** — publicación obligatoria con estado, contacto y voies de recours.

## Colombia

- **Resolución 1519 de 2020** — accesibilidad web nivel AA (WCAG 2.1) para sitios del Estado.
- **Ley 1618 de 2013** — inclusión de personas con discapacidad.
- **Ley 1581 de 2012** — Habeas Data y autorización en formularios.
- **Decreto 1078 de 2015** — marco general del sector TIC (contexto).

## Checklist de verificación rápida

- [ ] Contraste texto/fondo ≥ 4.5:1 (texto normal) y ≥ 3:1 (texto grande)
- [ ] Todas las funciones disponibles con teclado
- [ ] Foco visible en elementos interactivos
- [ ] Imágenes informativas con texto alternativo
- [ ] Formularios con `<label>` asociado
- [ ] Página usable al 200 % de zoom
- [ ] Declaración de accesibilidad publicada
- [ ] Política de privacidad enlazada desde consentimiento
