const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {


  it ('should GET HI', async() => {
    const res = await request(app)
      .get('/');
    expect(res.text).toEqual('hi');
  });


  it('should respond status code 200', async() => {
    const res = await request(app)
      .post('/echo')
      .send('hello cruel world');

    expect(res.text).toEqual('hello cruel world');
  });
  it('should respond html with an h1 and the word red', async() => {
    const res = await request(app)
      .get('/red');
    expect(res.text).toEqual('<h1>red</h1>');
  });
  it('should respond html with an h1 and the word green', async() => {
    const res = await request(app)
      .get('/green');
    expect(res.text).toEqual('<h1>green</h1>');
  });
  it('should respond html with an h1 and the word blue', async() => {
    const res = await request(app)
      .get('/blue');
    expect(res.text).toEqual('<h1>blue</h1>');
  });

});
