const app = require('../server/index');
const supertest = require('supertest');

const request = supertest(app);

describe("Express server routes test", ()=>{
    it('GET / endpoint', async () => {
        const res = await request.get('/');
        expect(res.statusCode).toBe(200);
    });

    it('POST /save endpoint', async ()=>{
        const res = await request.post('/save')
        .send({ city: 'testCity' });
        expect(res.statusCode).toBe(201);
    });
});