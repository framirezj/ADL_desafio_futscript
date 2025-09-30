const request = require('supertest')
const app = require('../../index.js')

const admin = {
    username: "admin",
    password: "1234"
}

describe("Auth Integration Tests", () => {
    it('POST /login - retorna el token login exitoso', async () => {
        const response = await request(app).post('/login').send(admin)

        expect(response.status).toBe(200)
        expect(response.body.success).toBe(true)
        expect(response.body.token).toBeDefined()
    })

    it('POST /login - falla con credenciales inválidas', async () => {
        const response = await request(app).post('/login').send({username: "admin", password: "4321"})

        expect(response.status).toBe(401)
        expect(response.body.success).toBe(false)
    })
})