const app = require('../../app');
const request = require("supertest");
const db = require('../../models');

describe('Homes endpoint', () => {

    it('/homes should return all homes', async () => {
        const res = await request(app).get('/homes');
        expect(res.statusCode).toEqual(200);
        expect(res.body[0].id).toEqual(1);
        expect(res.body[0].name).toEqual('My House');
    });

    it('/homes/{homeID} should return a 200', async () => {
        const res = await request(app).get('/homes/123');
        expect(res.statusCode).toEqual(200);
    });

    // After all tersts have finished, close the DB connection
    afterAll(async () => {
        await db.sequelize.close()
    })
});