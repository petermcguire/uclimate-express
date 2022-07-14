const app = require('../../app');
const request = require("supertest");
const db = require('../../models');

describe('Sensors endpoint', () => {

    it('/homes/{homeID}/sensors should return all sensors for home', async () => {
        const res = await request(app).get('/homes/1/sensors');
        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toEqual(2);
    });

    it('/homes/{homeID}/sensors/{sensorID} should return a the correct sensor', async () => {
        const res = await request(app).get('/homes/1/sensors/1');
        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toEqual(1);
        expect(res.body[0].id).toEqual(1);
        expect(res.body[0].name).toEqual("Home 1 Sensor 1");
    });

    // After all tersts have finished, close the DB connection
    afterAll(async () => {
        await db.sequelize.close()
    });
});