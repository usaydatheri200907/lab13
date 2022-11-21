const request = require("supertest");
const app = require('./routes/user');
const mongoose = require('mongoose');

describe("Test the root path", () => {
    test("It should response the GET method", () => {
        const response = request(app).post("http://localhost:8000/user/delete"
        ).send ({
            "Name": "Usayd",
            "Email":"usayd",
            "Age":19,
            "Contact":123
        })
        expect(response.statusCode),toBe(200);
    })
})