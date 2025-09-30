const jwt = require("jsonwebtoken");
const { secretKey } = require("../utils");

const authMiddleware = (req, res, next) => {
  const authHeader = req.get("Authorization");

  if (!authHeader) {
    return res.status(401).json({ error: "No se encuentra el token" });
  }

  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "No se encuentra el token" });
  }

  try {
    const payload = jwt.verify(token, secretKey);

    req.user = payload;
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Token Inválido" });
  }
};

module.exports = authMiddleware;
