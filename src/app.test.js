const app = require("./app");
const { mongoose } = require("mongoose");
const supertest = require("supertest");
const bcrypt = require("bcrypt");
require("dotenv").config();

describe("app", () => {
  const salt = bcrypt.genSalt(10);
  beforeAll(async () => {
    // await mongoose.disconnect();
    await mongoose.connect(process.env.MONGO_URL);
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });

  describe("GET /test", () => {
    it("Should return hello world!", async () => {
      const res = await supertest(app).get("/test");
      expect(res.status).toBe(201);
    });
  });

  describe("POST /login", () => {
    it("Should verify user!", async () => {
      let credentials = {
        email: "alijanov.sb@gmail.com",
        password: "12321",
      };
      const res = await supertest(app).post("/auth/login", {
        body: credentials,
      });

      expect(res.status).toBe(200);
    });
  });

  //register
  describe("POST /auth/register", () => {
    it("Should register a new user!", async () => {
      const response = await supertest(app)
        .post("/")
        .send({ email: "evgenBad@gmail.com", password: "guest123" });

      expect(response.status).toBe(201);
      expect(response.body).toEqual({
        email: "evgenBad@gmail.com",
        password: crypt.hash(response.body.password, salt),
      });
      expect(response.header["content-type"]).toBe(
        "application/json; charset=utf-8"
      );
    });
  });
});
