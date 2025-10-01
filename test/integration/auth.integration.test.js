const request = require("supertest");
const jwt = require("jsonwebtoken");
const { secretKey } = require("../../utils.js");
const app = require("../../index.js");

const admin = {
  username: "admin",
  password: "1234",
};

describe("Auth Integration Tests", () => {
  it("POST /login - retorna el token login exitoso", async () => {
    const response = await request(app).post("/login").send(admin);

    expect(response.body).toBeInstanceOf(Object);
  });

  it("POST /login - falla con credenciales inválidas", async () => {
    const response = await request(app)
      .post("/login")
      .send({ username: "admin", password: "4321" });

    expect(response.status).toBe(400);
    expect(response.body.success).toBe(false);
  });

  it("POST - Obtiene un status code 201, para jugador creado", async () => {
    const fakeToken = jwt.sign({ user: "payloadTest" }, secretKey, {
      expiresIn: "1h",
    });

    const teamID = 1;

    const response = await request(app)
      .post(`/equipos/${teamID}/jugadores`)
      .set("Authorization", `Bearer ${fakeToken}`)
      .send({
        name: "jugadorTest",
        posicion: 1,
      });

    expect(response.statusCode).toBe(201);
  });
});
