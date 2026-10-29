# consultadesitios

## Regla general: stack MERN

Este proyecto usa **exclusivamente el stack MERN**. No introducir otros frameworks, lenguajes o bases de datos sin acuerdo explícito.

- **M**ongoDB — base de datos (acceso vía **Mongoose**).
- **E**xpress — API REST en Node.js.
- **R**eact — frontend (con **Vite** como bundler).
- **N**ode.js — runtime del backend.

Qué NO usar (salvo que se acuerde explícitamente):
- Otras bases de datos (MySQL, PostgreSQL, SQLite, etc.) u ORMs como Prisma/Sequelize.
- Otros frameworks de backend (NestJS, Fastify, Django, Laravel, etc.).
- Otros frameworks de frontend (Vue, Angular, Svelte, Next.js, etc.).
- Otros lenguajes para el backend (Python, PHP, Go, etc.).

Las librerías auxiliares dentro del ecosistema (p. ej. axios, react-router, dotenv, cors) están bien.

## Regla general: identidad visual Iptel

Toda la interfaz respeta el **manual de identidad de Iptel** ([docs/branding/IPTel-Manual de identidad.pdf](docs/branding/IPTel-Manual%20de%20identidad.pdf)).

### Logo: nunca se genera
- El logo **no se genera, recrea ni aproxima**: nada de escribir "iptel" como texto estilizado, dibujarlo en SVG/CSS, ni inventar íconos o favicons.
- Se usan solo los assets oficiales extraídos del manual, en [docs/branding/logo/](docs/branding/logo/) (ver su README). Derivados en la app: `client/src/assets/logo-iptel.svg`, `client/src/assets/logo-iptel-blanco.svg` y `client/public/favicon.png`.
- No recolorear ni deformar los archivos. Si hace falta una variante que no existe, se extrae del PDF del manual, no se dibuja.
- Usos permitidos (hoja 06b): logo violeta sobre fondo claro; logo blanco con punto naranja sobre fondo violeta u oscuro.

### Paleta (hoja 07)
| Uso | Color | Hex |
|-----|-------|-----|
| Principal: violeta (Pantone Medium Purple C) | marca, encabezados, fondos de marca | `#4f008c` |
| Principal: naranja (Pantone 165C) | acción / CTA, destacados | `#ff671b` |
| Secundario: violeta brillante | acentos | `#6025e1` |
| Secundario: aqua | acentos, fondos de bloque | `#60f1d8` |
| Secundario: gris claro | bordes, texto deshabilitado | `#b2b2b2` |
| Secundario: gris oscuro | texto principal | `#3d3d3f` |

No usar colores fuera de esta paleta (salvo blanco/negro y estados de error/éxito imprescindibles). Los colores están como variables CSS en `client/src/styles/theme.css`; usar siempre las variables, no hex sueltos.

### Tipografía (hojas 02 y 03)
- **Linotte** es la corporativa (títulos). Como no está disponible como webfont, se usa **Nunito Sans** como sustituto solo para títulos. Si se consiguen los archivos de Linotte, se cargan con `@font-face` y van primero en `--font-titulos`.
- **Montserrat** es la secundaria: todo el texto de la interfaz.

### Estilo
Bloques de color plano de la paleta, formas redondeadas, el punto naranja de la "i" como elemento de "activación". Tono cercano y simple (ver ejemplos de comunicación, hoja 11).

## Estructura

```
consultadesitios/
├── server/          # API Express + Mongoose
│   └── src/
│       ├── config/       # conexión a MongoDB, configuración
│       ├── models/       # esquemas Mongoose
│       ├── controllers/  # lógica de cada endpoint
│       ├── routes/       # definición de rutas Express
│       ├── middleware/   # middlewares propios
│       └── index.js      # punto de entrada
├── client/          # React + Vite
│   ├── public/           # favicon oficial
│   └── src/
│       ├── assets/       # logos oficiales (no editar)
│       └── styles/       # theme.css con la paleta y tipografías
└── docs/branding/   # manual de identidad y assets de logo originales
```

## Comandos

- Backend: `cd server && npm install && npm run dev` (puerto 5000 por defecto).
- Frontend: `cd client && npm install && npm run dev` (puerto 5173; `/api` se proxea al backend).

## Convenciones

- JavaScript con ES Modules (`import`/`export`) en server y client.
- Variables de entorno en `server/.env` (ver `server/.env.example`); nunca commitear `.env`.
- Todas las rutas de la API bajo el prefijo `/api`.

## Versionado

Repositorio: https://github.com/EzequielSistemasIptel/consultadesitios.git
