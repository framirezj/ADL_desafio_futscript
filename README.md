# FutScript

Este es un proyecto de ejemplo para aprender a escribir pruebas unitarias y de integración para una API REST con Node.js, Express, Jest y Supertest.

## Descripción

El proyecto es una API simple para gestionar equipos y jugadores de fútbol. Las funcionalidades incluyen:

*   Autenticación de usuarios (login)
*   CR de Equipos
*   CR de Jugadores


## Pruebas

Para ejecutar las pruebas, usa el siguiente comando:

```bash
npm run test
```

Esto ejecutará todas las pruebas definidas en el proyecto con Jest.

## Iniciar el Servidor

Para iniciar el servidor, usa el siguiente comando:

```bash
npm run start
```

El servidor se iniciará en `http://localhost:3000` (o el puerto que esté configurado).

## API Endpoints

La API expone los siguientes endpoints:

*   **Auth:**
    *   `POST /login`: Autentica a un usuario y devuelve un token JWT.
*   **Equipos:**
    *   `GET /equipos`: Obtiene todos los equipos.
    *   `POST /equipos`: Crea un nuevo equipo. Ruta Protegida
*   **Jugadores:**
    *   `GET /equipos/:teamID/jugadores`: Obtiene todos los jugadores.
    *   `POST /equipos/:teamID/jugadores`: Crea un nuevo jugador. Ruta Protegida


## Instalación

1.  Clona este repositorio:
    ```bash
    git clone <URL_DEL_REPOSITORIO>
    ```
2.  Instala las dependencias:
    ```bash
    npm install
    ```