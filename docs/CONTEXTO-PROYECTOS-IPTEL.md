# Contexto base para proyectos Iptel

Reglas y pasos para arrancar un proyecto nuevo de Iptel con la misma base que `consultadesitios`.
Se puede pasar entero a Claude al inicio de un proyecto ("usá este contexto") o copiar las secciones al `CLAUDE.md` del proyecto nuevo.

Proyecto de referencia: https://github.com/EzequielSistemasIptel/consultadesitios

---

## 1. Reglas generales (van al CLAUDE.md de cada proyecto)

### Stack MERN, sin excepciones
- **MongoDB** con **Mongoose** como base de datos.
- **Express** para la API REST.
- **React** con **Vite** para el frontend.
- **Node.js** como runtime.

No usar, salvo acuerdo explícito:
- otras bases de datos (MySQL, PostgreSQL, SQLite) ni ORMs como Prisma o Sequelize;
- otros frameworks de backend (NestJS, Fastify, Django, Laravel);
- otros frameworks de frontend (Vue, Angular, Svelte, Next.js);
- otros lenguajes para el backend.

Las librerías auxiliares del ecosistema (axios, react-router, dotenv, cors) están permitidas.

### Identidad visual Iptel
Toda la interfaz respeta el **manual de identidad de Iptel** (`IPTel-Manual de identidad.pdf`, de AMB Comunicación).

**El logo nunca se genera.** No se escribe "iptel" como texto estilizado, no se dibuja en SVG ni en CSS y no se inventan íconos ni favicons. Se usan solo los assets oficiales extraídos del manual, sin recolorearlos ni deformarlos. Si falta una variante, se extrae del PDF del manual, no se dibuja.

---

## 2. Identidad visual: datos concretos

### Paleta (hoja 07 del manual)
| Uso | Color | Hex |
|-----|-------|-----|
| Principal: violeta (Pantone Medium Purple C) | marca, encabezados, fondos de marca | `#4f008c` |
| Principal: naranja (Pantone 165C) | acción / CTA, destacados | `#ff671b` |
| Secundario: violeta brillante | acentos | `#6025e1` |
| Secundario: aqua | acentos, fondos de bloque | `#60f1d8` |
| Secundario: gris claro | bordes, texto deshabilitado | `#b2b2b2` |
| Secundario: gris oscuro | texto principal | `#3d3d3f` |

No usar colores fuera de esta paleta. Las únicas excepciones son blanco, negro y los estados de error o éxito imprescindibles. Los colores se definen como variables CSS y en el código se usan siempre las variables, nunca el hex suelto.

### Tipografía (hojas 02 y 03)
- **Linotte** es la tipografía corporativa, para títulos. No está disponible como webfont, así que se usa **Nunito Sans** como sustituto, solo en títulos. Si se consiguen los archivos de Linotte, se cargan con `@font-face` y pasan a ser la primera opción.
- **Montserrat** es la tipografía secundaria y se usa para todo el texto de la interfaz.

Se cargan desde Google Fonts:
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&family=Nunito+Sans:wght@600;700;800&display=swap"
  rel="stylesheet"
/>
```

### Usos del logo (hoja 06b)
- Logo violeta sobre fondo claro.
- Logo blanco con el punto naranja sobre fondo violeta u oscuro.

### Estilo general
- Bloques de color plano tomados de la paleta.
- Formas redondeadas.
- El punto naranja de la "i" funciona como elemento de "activación".
- Tono cercano y simple. Slogan de referencia: "Conectate con lo que más querés" (hoja 11).

### Archivo base de tema (`client/src/styles/theme.css`)
```css
/* Identidad Iptel: valores tomados del manual (docs/branding). No agregar colores fuera de la paleta. */
:root {
  --iptel-violeta: #4f008c;
  --iptel-naranja: #ff671b;
  --iptel-violeta-brillante: #6025e1;
  --iptel-aqua: #60f1d8;
  --iptel-gris-claro: #b2b2b2;
  --iptel-gris-oscuro: #3d3d3f;
  --iptel-blanco: #ffffff;

  --font-titulos: 'Nunito Sans', sans-serif; /* sustituto de Linotte */
  --font-texto: 'Montserrat', sans-serif;

  --radio: 12px;
}

*, *::before, *::after { box-sizing: border-box; }

body {
  margin: 0;
  font-family: var(--font-texto);
  color: var(--iptel-gris-oscuro);
  background: var(--iptel-blanco);
}

h1, h2, h3, h4 {
  font-family: var(--font-titulos);
  font-weight: 800;
  color: var(--iptel-violeta);
}

button {
  font-family: var(--font-texto);
  font-weight: 600;
  border: none;
  border-radius: 999px;
  padding: 0.6rem 1.4rem;
  background: var(--iptel-naranja);
  color: var(--iptel-blanco);
  cursor: pointer;
}
```

---

## 3. Dónde están los assets oficiales

Tomarlos del repo `consultadesitios` (carpeta `docs/branding/`) o de `~/Proyectos/iptel-web/docs/branding/`, donde se extrajeron originalmente:

| Archivo | Qué es | Dónde va en el proyecto nuevo |
|---------|--------|-------------------------------|
| `IPTel-Manual de identidad.pdf` | Manual completo | `docs/branding/` |
| `logo/iptel-logotipo.svg` | Logotipo violeta, vectorial. **Fuente de verdad.** | `client/src/assets/logo-iptel.svg` |
| `logo/iptel-logotipo-blanco.svg` | Variante blanca con punto naranja | `client/src/assets/logo-iptel-blanco.svg` |
| `logo/iptel-logotipo-master-4456px.png` | Raster maestro a 600 dpi | solo si se necesita PNG |
| `logo/iptel-isotipo-circulo-master-1681px.png` | Isotipo circular | origen del favicon |
| `client/public/favicon.png` (en consultadesitios) | Favicon oficial | `client/public/favicon.png` |

Copiar también `docs/branding/logo/README.md`, que documenta el origen de cada archivo.

---

## 4. Estructura del proyecto

```
<proyecto>/
├── CLAUDE.md
├── .gitignore            # node_modules/, .env, dist/, build/, *.log
├── server/               # Express + Mongoose (ES Modules)
│   ├── .env.example      # PORT=5000, MONGO_URI=mongodb://localhost:27017/<proyecto>
│   └── src/
│       ├── config/db.js  # conexión a MongoDB
│       ├── models/
│       ├── controllers/
│       ├── routes/       # todas bajo /api
│       ├── middleware/
│       └── index.js
├── client/               # React + Vite
│   ├── vite.config.js    # proxy de /api a http://localhost:5000
│   ├── public/favicon.png
│   └── src/
│       ├── assets/       # logos oficiales (no editar)
│       └── styles/theme.css
└── docs/branding/        # manual + logos originales
```

Dependencias:
- server: `express mongoose cors dotenv`
- client: `react react-dom`, más `vite @vitejs/plugin-react` como dependencias de desarrollo

Convenciones:
- ES Modules (`import`/`export`) en el server y en el client.
- `.env` nunca se commitea; se documenta en `.env.example`.
- Todas las rutas de la API van bajo `/api`.
- Se incluye `GET /api/health` como chequeo básico.

---

## 5. Git y GitHub

- Cuenta: **EzequielSistemasIptel**.
- Push por **SSH**: en esta máquina hay una clave configurada y no hay credenciales guardadas para HTTPS. El remoto va así:
  ```bash
  git init -b main
  git remote add origin git@github.com:EzequielSistemasIptel/<repo>.git
  ```
- Rama principal: `main`.
- Commits en español.

---

## 6. Checklist para arrancar un proyecto nuevo

1. Crear la estructura MERN de la sección 4 e instalar las dependencias.
2. Copiar el manual y los logos de la sección 3.
3. Crear `client/src/styles/theme.css` (sección 2) e importarlo en `main.jsx`.
4. En `client/index.html`: favicon oficial, links de Google Fonts y `lang="es"`.
5. Escribir el `CLAUDE.md` con las reglas de la sección 1 y la paleta y tipografía de la sección 2.
6. Inicializar git con el remoto SSH, hacer el commit inicial y el push.
