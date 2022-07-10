const server = require('../../app');
const supertest = require('supertest');
const requestWithSupertest = supertest(server);

describe('Homes endpoint', () => {

    it('/homes should return a 200', async () => {
        const res = await requestWithSupertest.get('/homes');
        expect(res.statusCode).toEqual(200);
    });

    it('/homes/{homeID} should return a 200', async () => {
        const res = await requestWithSupertest.get('/homes/123');
        expect(res.statusCode).toEqual(200);
    });

});