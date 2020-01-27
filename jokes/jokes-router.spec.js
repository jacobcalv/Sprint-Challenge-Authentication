const supertest = require("supertest")

const server = require("../api/server")

test("can't access jokes without token", async () => {
    const res = await supertest(server).get("/api/jokes")
    expect(res.status).toBe(401)
    expect(res.type).toBe("application/json")
});

test("will return error message without token telling you to log in again", async () => {
    const res = await supertest(server).get("/api/jokes")
    expect(res.status).toBe(401)
    expect(res.body.message).toBe("log in again")
});