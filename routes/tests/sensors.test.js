const server = require('../../app');
const supertest = require('supertest');
const requestWithSupertest = supertest(server);

describe('Sensors endpoint', () => {

    it('/homes/{homeID}/sensors should return a 200', async () => {
        const res = await requestWithSupertest.get('/homes/123/sensors');
        expect(res.statusCode).toEqual(200);
    });

});