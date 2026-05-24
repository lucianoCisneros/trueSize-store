Proyecto e-commerce de mi emprendimiento de zapatillas, desarrollado en React con productos, órdenes y consultas almacenadas en Firebase. Sitio responsive utilizando las buenas prácticas de mobileFirst y desarrollado con CSS puro.

## Requisitos

- Node.js 18+

## Configuración

1. Instala dependencias:

```bash
npm install
```

2. Copia las variables de entorno:

```bash
cp .env.example .env.local
```

3. Completa `.env.local` con los datos de tu proyecto en [Firebase Console](https://console.firebase.google.com/) → Configuración del proyecto → Tus apps → SDK de configuración.

## Scripts

| Comando | Descripción |
|---------|-------------|
| `npm start` | Servidor de desarrollo (Vite) |
| `npm run build` | Build de producción en `dist/` |
| `npm test` | Tests con Vitest |
| `npm run deploy` | Deploy manual a GitHub Pages (requiere `.env.production` o variables en el shell) |

## Deploy en GitHub Pages

### Opción automática (recomendada)

El workflow `.github/workflows/deploy.yml` construye y publica en cada push a `main` o `master`.

Configura estos **repository secrets** en GitHub (Settings → Secrets and variables → Actions):

- `VITE_FIREBASE_API_KEY`
- `VITE_FIREBASE_AUTH_DOMAIN`
- `VITE_FIREBASE_PROJECT_ID`
- `VITE_FIREBASE_STORAGE_BUCKET`
- `VITE_FIREBASE_MESSAGING_SENDER_ID`
- `VITE_FIREBASE_APP_ID`

### Opción manual

```bash
cp .env.local .env.production
npm run deploy
```

## Seguridad

- No subas `.env`, `.env.local` ni `.env.production` al repositorio.
- Las claves de Firebase en el cliente son públicas por diseño; restringe el acceso en Firebase Console (reglas de Firestore, dominios autorizados, App Check).
