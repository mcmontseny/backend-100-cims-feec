
# Backend 100 Cims FEEC 🛠️

Aquest projecte és una API backend desenvolupada amb Node.js, Express, i TypeScript per gestionar dades relacionades amb el repte "100 Cims" de la FEEC. Utilitza Supabase per a la gestió de la base de dades i s'integra amb l'API de Strava per obtenir dades d'activitats.

## Requisits 📋

- Node.js (versió 14 o superior)
- Yarn o npm
- Un compte a Supabase
- Un compte a Strava

## Configuració ⚙️

### Variables d'Entorn 🌐

El projecte utilitza variables d'entorn per a la configuració. Canvia el nom del fitxer `.env.sample` a `.env` i proporciona els valors necessaris:

```env
SUPABASE_URL=la_teva_supabase_url
SUPABASE_KEY=la_teva_supabase_key
STRAVA_CLIENT_ID=el_teu_strava_client_id
STRAVA_CLIENT_SECRET=el_teu_strava_client_secret
STRAVA_REFRESH_TOKEN=el_teu_strava_refresh_token
```

### Instal·lació 🛠️

1. Clona el repositori i navega al directori del projecte:
    ```bash
    git clone https://github.com/mcmontseny/backend-100-cims-feec.git
    cd backend-100-cims-feec
    ```

2. Instal·la les dependències del projecte:
    ```bash
    yarn install
    # o
    npm install
    ```

## Scripts Disponibles 📜

- `yarn start` o `npm start`: Inicia el servidor en mode de desenvolupament utilitzant `ts-node-dev`.
- `yarn build` o `npm run build`: Compila el projecte TypeScript a JavaScript.
- `yarn serve` o `npm run serve`: Serveix el projecte compilat utilitzant Node.js.

## Estructura del Projecte 📁

```plaintext
backend-100-cims-feec/
├── .env.sample             # Fitxer d'exemple de variables d'entorn
├── .gitignore              # Fitxers i directoris ignorats per Git
├── package.json            # Dependències i scripts del projecte
├── tsconfig.json           # Configuració de TypeScript
├── src/                    # Codi font del projecte
│   ├── app.ts              # Configuració de l'aplicació Express
│   ├── serve.ts            # Punt d'entrada principal del servidor
│   ├── config/             # Configuració de la base de dades
│   │   └── setupDatabase.ts
│   ├── controllers/        # Controladors de l'API
│   │   ├── activityController.ts
│   │   ├── mountainController.ts
│   │   └── ascentController.ts
│   ├── models/             # Models de dades
│   │   ├── activityModel.ts
│   │   ├── mountainModel.ts
│   │   └── ascentModel.ts
│   ├── routes/             # Rutes de l'API
│   │   ├── activityRoutes.ts
│   │   ├── mountainRoutes.ts
│   │   ├── ascentRoutes.ts
│   │   └── index.ts
│   ├── services/           # Serveis de negoci
│   │   ├── activityService.ts
│   │   ├── mountainService.ts
│   │   ├── ascentService.ts
│   │   ├── insertActivities.ts
│   │   └── insertMountains.ts
│   └── utils/              # Utilitats i helpers
│       ├── supabaseClient.ts
│       ├── stravaClient.ts
│       └── normalize.ts
└── yarn.lock               # Fitxer de bloqueig de Yarn
```

## Ús 🚀

1. Inicia el servidor de desenvolupament:
    ```bash
    yarn start
    # o
    npm start
    ```

2. L'API estarà disponible a `http://localhost:3000`.

### Endpoints

#### Activitats

- `GET /api/activities`: Obté totes les activitats.

#### Muntanyes

- `GET /api/mountains`: Obté totes les muntanyes.

#### Ascensions

- `GET /api/ascents`: Obté totes les ascensions.

## Contribucions 📝

Les contribucions són benvingudes. Si us plau, obre un issue o envia un pull request.

## Llicència 📄

Aquest projecte està llicenciat sota la Llicència MIT. Consulta el fitxer `LICENSE` per a més detalls.
