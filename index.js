const express = require("express");
const app = express();
const authMiddleware = require("./middleware/auth.middleware");

app.listen(3000, console.log("SERVER ON"));
app.use(express.json());

const { login } = require("./controllers/auth");
const {
  obtenerJugadores,
  registrarJugador,
} = require("./controllers/jugadores");
const { obtenerEquipos, agregarEquipo } = require("./controllers/equipos");

app.post("/login", login);

app.get("/equipos", obtenerEquipos);
app.post("/equipos", authMiddleware, agregarEquipo);

app.get("/equipos/:teamID/jugadores", obtenerJugadores);
app.post("/equipos/:teamID/jugadores", authMiddleware, registrarJugador);

module.exports = app;
