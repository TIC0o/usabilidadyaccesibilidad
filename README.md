# usabilidadyaccesibilidad — Sonrisa Vital

Repositorio del sitio web **Sonrisa Vital**, una clínica odontológica ficticia creada como **proyecto académico** para demostrar buenas prácticas de **usabilidad (UI/UX)** y **accesibilidad digital** en un servicio de salud orientado al público general.

**Repositorio:** [github.com/TIC0o/usabilidadyaccesibilidad](https://github.com/TIC0o/usabilidadyaccesibilidad)

**Sitio publicado (GitHub Pages):** [https://tic0o.github.io/usabilidadyaccesibilidad/](https://tic0o.github.io/usabilidadyaccesibilidad/)

---

## Índice

1. [¿Qué es este proyecto?](#qué-es-este-proyecto)
2. [Población a la que va dirigido](#población-a-la-que-va-dirigido)
3. [Cumplimiento en usabilidad](#cumplimiento-en-usabilidad)
4. [Cumplimiento en accesibilidad](#cumplimiento-en-accesibilidad)
5. [Marco normativo por país](#marco-normativo-por-país)
6. [Estado de conformidad](#estado-de-conformidad)
7. [Funcionalidades implementadas](#funcionalidades-implementadas)
8. [Estructura del proyecto](#estructura-del-proyecto)
9. [Cómo ejecutar el sitio](#cómo-ejecutar-el-sitio)
10. [CI/CD y despliegue en GitHub Pages](#cicd-y-despliegue-en-github-pages)
11. [Pruebas y validación](#pruebas-y-validación)
12. [Documentación adicional](#documentación-adicional)
13. [Limitaciones y uso responsable](#limitaciones-y-uso-responsable)

---

## ¿Qué es este proyecto?

Es una **aplicación web estática** (HTML, CSS y JavaScript sin frameworks) que simula la presencia digital de una clínica dental inclusiva. No sustituye un servicio médico real: los datos de contacto, direcciones y correos son **ficticios** y sirven únicamente para ilustrar patrones de diseño centrados en la persona usuaria.

El objetivo pedagógico es mostrar cómo un sitio de salud puede ser:

- **Fácil de usar** para personas con distinta experiencia digital.
- **Accesible** para personas con discapacidad visual, auditiva, motora o cognitiva.
- **Alineado** con normativas de España, Francia y Colombia, además de estándares internacionales.

---

## Población a la que va dirigido

El sitio está pensado para **varias audiencias** que conviven en un mismo ecosistema de salud digital:

### Población principal (usuarias del servicio)

| Grupo | Necesidad que atiende el sitio |
|-------|--------------------------------|
| **Personas adultas en Colombia** (contexto: Cúcuta y zonas urbanas) | Informarse sobre tratamientos odontológicos, horarios y canales de contacto en español claro (`lang="es-CO"`). |
| **Pacientes y familiares** que buscan agendar valoración o urgencia | Formulario de cita con etiquetas visibles, validación comprensible y alternativa telefónica. |
| **Personas mayores** | Tipografía ampliable, contraste reforzado, botones grandes (mín. ~48 px de área táctil) y lenguaje sin jerga médica innecesaria. |
| **Personas con baja alfabetización digital** | Navegación predecible, migas de pan, mapa del sitio y mensajes de error explícitos. |

### Población con necesidades de accesibilidad (inclusión)

| Grupo | Apoyos del proyecto |
|-------|---------------------|
| **Personas con discapacidad visual** | HTML semántico, ARIA, SVG con `<title>` y `<desc>`, lector de pantalla, foco visible, lectura en voz alta opcional. |
| **Personas con baja visión** | Alto contraste, zoom de texto hasta 140 %, modo oscuro, cursor ampliado. |
| **Personas con discapacidad motora** | Uso completo por teclado, menús con flechas, áreas de clic amplias, perfiles de accesibilidad motriz. |
| **Personas con discapacidad cognitiva o dificultades de atención** | Lenguaje claro, espaciado amplio, pausa de animaciones, guía de lectura, perfil cognitivo. |
| **Personas sensibles al movimiento** (vértigo, epilepsia fotosensible leve) | `prefers-reduced-motion` y opción «Pausar animación». |

### Población secundaria (contexto académico y profesional)

| Grupo | Uso del repositorio |
|-------|---------------------|
| **Estudiantes** de diseño, ingeniería, comunicación o salud digital | Referencia de patrones UI/UX y accesibilidad aplicados a un caso realista. |
| **Docentes y evaluadores** | Material demostrable para asignaturas de usabilidad, accesibilidad web o inclusión. |
| **Desarrolladores y diseñadores** | Plantilla reutilizable con declaración de accesibilidad, privacidad y estructura de carpetas ordenada. |
| **Organizaciones de salud** (referencia) | Modelo orientativo para clínicas que deban cumplir WCAG 2.1 AA y normativa local. |

### Población **no** objetivo

- Personas que requieran **diagnóstico o tratamiento médico en línea** (el sitio no ofrece telemedicina ni historial clínico).
- Usuarias que esperen un **portal con autenticación, pagos o historial de pacientes** (fuera del alcance de esta plantilla).
- Menores de edad sin supervisión de un adulto responsable en el envío de datos personales.

---

## Cumplimiento en usabilidad

El proyecto aplica principios reconocidos de **experiencia de usuario (UX)** y **diseño de interfaces (UI)**:

### Heurísticas de usabilidad de Nielsen

| Heurística | Cómo se cumple en Sonrisa Vital |
|------------|----------------------------------|
| Visibilidad del estado del sistema | Notificaciones toast, regiones `aria-live`, estados `aria-expanded` en menús y acordeones. |
| Coincidencia entre el sistema y el mundo real | Textos en español colombiano, iconografía familiar, horarios en formato legible. |
| Control y libertad del usuario | Cierre de modal y panel con `Esc`, restablecimiento de ajustes de accesibilidad. |
| Consistencia y estándares | Sistema de diseño con variables CSS, botones y formularios uniformes. |
| Prevención de errores | Fecha mínima en el calendario, validación antes de envío, contador de caracteres. |
| Reconocimiento antes que recuerdo | Mapa del sitio, migas de pan, navegación fija y secciones con títulos claros. |
| Flexibilidad y eficiencia de uso | Atajos de teclado (`Alt + A` abre accesibilidad), perfiles rápidos de personalización. |
| Diseño estético y minimalista | Jerarquía visual clara, espaciado generoso, sin elementos distractores innecesarios. |
| Ayuda a reconocer, diagnosticar y recuperarse de errores | Errores por campo + resumen general con `role="alert"`. |
| Ayuda y documentación | Modal de atajos, FAQ en acordeón, declaración de accesibilidad enlazada. |

### Otros referentes de usabilidad

- **ISO 9241-210** — enfoque centrado en la persona usuaria en el diseño de la interacción.
- **Lenguaje claro** — textos breves, frases directas y advertencias sobre datos sensibles en el formulario.
- **Diseño responsive** — layout adaptable desde ~288 px de ancho sin ocultar funciones esenciales.
- **Affordances visuales** — enlaces subrayados, estados `:hover` y `:focus-visible` diferenciados.

---

## Cumplimiento en accesibilidad

El sitio se orienta al nivel **AA** de las [Pautas de Accesibilidad para el Contenido Web (WCAG) 2.1](https://www.w3.org/TR/WCAG21/), base común de la norma europea **EN 301 549** y de los marcos nacionales citados más abajo.

### Principios WCAG 2.1 (resumen de cobertura)

| Principio | Criterios representados en el proyecto |
|-----------|----------------------------------------|
| **Perceptible** | Contraste de color reforzado, texto redimensionable, alternativas textuales en SVG, modo alto contraste y ocultar imágenes. |
| **Operable** | Navegación por teclado, sin trampas de foco indebidas, enlaces de salto, objetivos táctiles amplios, sin parpadeos. |
| **Comprensible** | `lang` definido, etiquetas en formularios, mensajes de error identificables, comportamiento predecible. |
| **Robusto** | HTML5 semántico, roles y propiedades ARIA donde aportan, compatibilidad con tecnologías asistivas. |

### Criterios WCAG destacados (ejemplos)

- **1.1.1** Contenido no textual — descripción en ilustración SVG del héroe.
- **1.4.3 / 1.4.11** Contraste — paleta validada para texto y componentes de interfaz.
- **2.1.1 / 2.1.2** Teclado — todas las funciones principales operables sin ratón.
- **2.4.1** Evitar bloques — enlaces «Saltar al contenido», navegación y formulario.
- **2.4.7** Foco visible — contorno de foco de 3 px (ampliable a 5 px).
- **3.3.1 / 3.3.2** Errores y etiquetas — formulario de cita con `label`, `aria-invalid` y textos de ayuda.
- **4.1.2** Nombre, función, valor — botones con nombre accesible y estados ARIA.

Documentación detallada: [`docs/declaracion-accesibilidad.md`](docs/declaracion-accesibilidad.md) y [`docs/normativa-referencias.md`](docs/normativa-referencias.md).

---

## Marco normativo por país

| Ámbito | Normativa / estándar | Relación con el proyecto |
|--------|----------------------|---------------------------|
| **Internacional** | WCAG 2.1 nivel AA | Objetivo técnico principal de accesibilidad. |
| **Unión Europea** | EN 301 549:2019/2022 | Requisitos TIC alineados con WCAG para productos y servicios. |
| **España** | RD 1112/2018, UNE-EN 301549:2022, Ley 11/2007, LOPDGDD | Accesibilidad web pública y protección de datos en formularios. |
| **Francia** | RGAA 4.1, loi nº 2005-102, RGPD | Declaración de accesibilidad, mapa del sitio y vías de recours. |
| **Colombia** | Resolución 1519 de 2020 (MinTIC), Ley 1618 de 2013, Ley 1581 de 2012 | Accesibilidad AA en sitios ICT y Habeas Data en el tratamiento de datos. |

---

## Estado de conformidad

| Área | Estado declarado | Notas |
|------|------------------|-------|
| **Accesibilidad web** | **Parcialmente conforme** con WCAG 2.1 AA | Plantilla en revisión; requiere auditoría con usuarios reales antes de producción. |
| **Usabilidad** | **Cumplimiento orientativo** según heurísticas de Nielsen | No sustituye pruebas con personas usuarias (tests moderados, SUS, etc.). |
| **Privacidad** | **Marco documentado** (RGPD / Ley 1581) | Política ficticia; en producción debe adaptarse a un responsable real. |

**Contenido con limitaciones conocidas:**

- La síntesis de voz depende del navegador y no garantiza calidad profesional.
- La evaluación con lectores de pantalla debe repetirse tras cada cambio de contenido.
- Los datos de la clínica son ficticios y no constituyen un servicio sanitario habilitado.

---

## Funcionalidades implementadas

### Usabilidad e interfaz

- Diseño responsive con rejilla adaptable.
- Navegación principal, submenú de tratamientos y llamada a la acción «Agendar cita».
- Formulario de solicitud de valoración con validación en cliente.
- FAQ en acordeón y tabla de horarios con desplazamiento horizontal accesible.
- Migas de pan y mapa del sitio.

### Accesibilidad

- Tres enlaces de salto (contenido, navegación, formulario).
- Widget flotante de accesibilidad con: tamaño de texto, alto contraste, modo oscuro, escala de grises, pausa de animación, foco destacado, guía de lectura, fuente legible, espaciado, cursor grande, lectura en voz alta y perfiles cognitivo / baja visión / motriz.
- Modal informativo con atajos de teclado (`Tab`, `Mayús+Tab`, `Esc`).
- Respeto a `prefers-reduced-motion` y `prefers-color-scheme`.
- Secciones legales: declaración de accesibilidad, privacidad y aviso legal.

---

## Estructura del proyecto

```
usabilidadyaccesibilidad/
├── .github/
│   └── workflows/
│       └── deploy-pages.yml        # CI/CD → GitHub Pages
├── index.html                      # Página principal (HTML semántico)
├── .nojekyll                       # Evita procesamiento Jekyll en Pages
├── assets/
│   ├── css/
│   │   └── main.css                # Sistema de diseño y estilos accesibles
│   ├── js/
│   │   └── main.js                 # Interacción, formulario y widget a11y
│   └── img/                        # Carpeta reservada para imágenes
├── docs/
│   ├── declaracion-accesibilidad.md
│   └── normativa-referencias.md
├── README.md
└── .gitignore
```

---

## Cómo ejecutar el sitio

Desde la raíz del repositorio:

```bash
cd usabilidadyaccesibilidad
python -m http.server 8080
```

Abre en el navegador: `http://localhost:8080`

> **Importante:** si abres `index.html` directamente (`file://`), algunos navegadores bloquean la carga de `assets/css/main.css` y `assets/js/main.js`. Usa siempre un servidor local o GitHub Pages.

---

## CI/CD y despliegue en GitHub Pages

El despliegue automático está definido en [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml).

### Qué hace el pipeline

| Paso | Descripción |
|------|-------------|
| **Trigger** | Cada `push` a la rama `main` o ejecución manual (*workflow_dispatch*). |
| **Build** | Copia `index.html`, `assets/` y `docs/` a la carpeta `_site`. |
| **Deploy** | Publica el artefacto en GitHub Pages con HTTPS. |

### Activar GitHub Pages (solo la primera vez)

1. En GitHub: **Settings → Pages**.
2. En **Build and deployment**, elige **Source: GitHub Actions**.
3. Haz `push` a `main` (o ejecuta el workflow desde la pestaña **Actions**).

### Desplegar manualmente desde tu máquina

```bash
git add .
git commit -m "Despliegue: actualización del sitio"
git push origin main
```

Tras unos minutos, el sitio estará en:

`https://tic0o.github.io/usabilidadyaccesibilidad/`

### Ver el estado del despliegue

- **Actions** en el repositorio → workflow *Deploy to GitHub Pages*.
- **Settings → Pages** → URL del sitio y último despliegue correcto.

---

## Pruebas y validación

| Tipo | Herramienta / método | Qué verificar |
|------|----------------------|---------------|
| Automatizada | [WAVE](https://wave.webaim.org/), [TAW](https://www.tawdis.net/), Lighthouse | Errores y alertas de accesibilidad |
| Teclado | Recorrido manual | Menú, acordeón, modal, formulario y widget sin ratón |
| Zoom | 200 % en el navegador | Sin pérdida de contenido ni solapamientos críticos |
| Lector de pantalla | NVDA (Windows), VoiceOver (macOS/iOS) | Orden de lectura y nombres accesibles |
| Contraste | Modos claro, oscuro y alto contraste | Legibilidad de texto y botones |
| Usabilidad | Test con 3–5 personas de la población objetivo | Tareas: agendar cita, encontrar horario, usar accesibilidad |

---

## Documentación adicional

| Documento | Contenido |
|-----------|-----------|
| [`docs/declaracion-accesibilidad.md`](docs/declaracion-accesibilidad.md) | Declaración formal, contacto, vías de reclamación y contenido no conforme. |
| [`docs/normativa-referencias.md`](docs/normativa-referencias.md) | Tabla de normativas España / Francia / Colombia y checklist técnico. |

---

## Limitaciones y uso responsable

- Proyecto con fines **educativos y demostrativos**.
- **No** proporciona asesoría médica ni almacena datos en servidor (el formulario simula el envío en el navegador).
- Antes de un despliegue real en salud, se requiere: revisión legal, DPO o responsable de datos, auditoría de accesibilidad con usuarios y hosting seguro (HTTPS).

---

## Autoría y repositorio

Desarrollado en el marco del repositorio **usabilidadyaccesibilidad** del usuario [TIC0o](https://github.com/TIC0o).

Si detectas una barrera de accesibilidad en la plantilla, puedes reportarla (ficticio) a: `accesibilidad@sonrisavital.example`
