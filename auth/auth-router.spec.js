const supertest = require("supertest")

const server = require("../api/server")

const db = require("../database/dbConfig")

const testUser = {username: "test", password: "123"}

test("register accepts username and password", async () => {
    const res = await supertest(server).post("/api/auth/register")
        .send({username: `user_${Math.random()}`, password: '123'})
    expect(res.status).toBe(201)
});

test("register returns welcome message", async () => {
    const res = await supertest(server).post("/api/auth/register")
        .send({username: `user_${Math.random()}`, password: '123'})
    expect(res.status).toBe(201)
    expect(res.type).toBe("application/json")
    expect(res.body.message).toMatch("you did well")
});

test("login accepts username and password in db", async () => {
    const res = await supertest(server).post("/api/auth/login")
        .send(testUser)
    expect(res.status).toBe(200)
});

test("login returns a token", async () => {
    const res = await supertest(server).post("/api/auth/login")
        .send(testUser)
    expect(res.status).toBe(200)
    expect(res.type).toBe("application/json")
    expect(res.body.token.length).toBeGreaterThan(0)
});

