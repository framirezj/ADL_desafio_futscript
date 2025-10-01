const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "postgres",
  database: "futscript",
  allowExitOnIdle: true,
});

const getTeams = async () => {
  const query = `SELECT * FROM equipos`;
  const { rows } = await pool.query(query);
  return rows;
};

const getPlayers = async (teamID) => {
  const query = `
        SELECT 
        j.name AS name,
        p.name AS posicion 
        FROM jugadores j
        INNER JOIN equipos e ON j.id_equipo = e.id
        INNER JOIN posiciones p ON j.position = p.id
        WHERE j.id_equipo = $1`;
  const { rows } = await pool.query(query, [teamID]);
  console.log(rows)
  return rows;
};

const addTeam = async (equipo) => {
  const query = `INSERT INTO equipos (name) VALUES ($1) RETURNING *`
  const values = [equipo.name]

  const {rows} = await pool.query(query, values)
  return rows[0]
};

const addPlayer = async ({ jugador, teamID }) => {

    //jugadores id id_equipo,name,position

    const query = `INSERT INTO jugadores (id_equipo,name,position) VALUES ($1,$2,$3) RETURNING *`
    const values =[teamID, jugador.name, jugador.posicion]

    const {rows } = await pool.query(query,values)
    return rows[0]
  
};

module.exports = { getTeams, addTeam, getPlayers, addPlayer };
