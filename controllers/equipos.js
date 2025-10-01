const { getTeams, addTeam } = require('../db/consultas')

const obtenerEquipos = async (req, res) => {
    const equipos = await getTeams()
    res.json(equipos)
}

const agregarEquipo = async (req, res) => {
    const equipo = req.body
    const equipoBd = await addTeam(equipo)
    res.send({ message: "Equipo agregado con éxito", equipo: equipoBd })
}

module.exports = { obtenerEquipos, agregarEquipo }