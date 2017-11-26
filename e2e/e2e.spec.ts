
import * as request from 'supertest';

import { app } from './app/main';


describe('e2e tests', async () => {
    let instance = await app();
    it('should return 200 from pushing to the db', (done) => {
        request(instance)
            .get('/write')
            .expect(200, done);
    })
})
