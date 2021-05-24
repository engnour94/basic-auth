'use strict';
require('dotenv').config();
const supergoose = require('@code-fellows/supergoose');
const { app } = require('../src/server');
const request = supergoose(app);

describe('server', () => {
  it('should get 404 status', async () => {
    const response = await request.get('/jhu');
    expect(response.status).toBe(404);
  });

  it('should get a welcome message', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('welcome to server.js');
  });

  it('wrong method', async () => {
    const response = await request.get('/signin');
    expect(response.status).toEqual(404);
  });
 
  it('should get an error', async () => {
    const response = await request.get('/bad');
    expect(response.status).toEqual(500);
  });

});
