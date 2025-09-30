const jwt = require("jsonwebtoken");
const { secretKey } = require("../utils.js");

const admin = {
  username: "admin",
  password: "1234",
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).send("Usuario y password son obligatorios.");
    }

    // Validación simple
    if (username === admin.username && password === admin.password) {
      const token = jwt.sign({ user: admin.username }, secretKey);

      return res.status(200).json({
        success: true,
        message: "Login exitoso",
        token: token,
      });
    } else {
      return res.status(401).json({
        success: false,
        message: "Credenciales inválidas",
      });
    }
  } catch (error) {
    res.status(500).json({error: error.message});
  }
};

module.exports = { login };
