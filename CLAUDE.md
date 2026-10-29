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
└── client/          # React + Vite
    └── src/
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
