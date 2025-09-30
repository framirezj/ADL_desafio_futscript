const { Pool } = require('pg')

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'postgres',
    database: 'futscript',
    allowExitOnIdle: true
})

const getTeams = async () => {
    const query = `SELECT * FROM equipos`
    const {rows} = await pool.query(query)
    return rows
}

const getPlayers = async (teamID) => {
    //...
}

const addTeam = async (equipo) => {
    //...
}

const addPlayer = async ({ jugador, teamID }) => {
    //...
}

module.exports = { getTeams, addTeam, getPlayers, addPlayer }