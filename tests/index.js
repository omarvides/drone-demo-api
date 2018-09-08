const superTest =  require('supertest');
const app = require('../index');

describe('Demo', () => {
  describe('GET /', () => {
    it('should answer with 200 OK', (done) => {
      superTest(app)
        .get('/')
        .expect(200, done);
    });
  });
});