
'use strict';

require('dotenv').config();
const supergoose = require('@code-fellows/supergoose');
const { app } = require('../src/server');
const request = supergoose(app);
const base64 = require('base-64');

let user={
  username: 'nour',
  password: '1234',
};

describe('authentication test', () => {

  it('should create a new User on POST /signup', async () => {
    const response = await request.post('/signup').send(user);
    expect(response.status).toEqual(201);
    expect(response.body.username).toEqual('nour');
  });


  it('Sign In test',async ()=>{
  
    const user = base64.encode('nour:1234');
    const response1 = await request.post('/signin').set('Authorization', `Basic ${user}`);
    expect(response1.status).toEqual(200);
    expect(response1.body.username).toEqual('nour');
    expect(response1.body.password).not.toEqual('1234');
  });

  it ('should throw an error while adding a new user with missing required data', async ()=>{
    // arrange 
    let user = {
      username : 'nour',
    };
      // act
    const response = await request.post('/signup').send(user);
    // assert
    expect(response.status).toEqual(403);
    
  });
    
  
    

  
  it('Test wrong password', async () => {
    const response = await request
      .post('/signin')
      .set(
        'Authorization','basic ' + new Buffer.from(`${user.username}:${123}`, 'utf8').toString('base64'),
      );
    expect(response.status).toEqual(500);
  });

  it('Test wrong username', async () => {
    const response = await request
      .post('/signin')
      .set(
        'Authorization','basic ' + new Buffer.from(`nur: ${user.password}`, 'utf8').toString('base64'),
      );
    expect(response.status).toEqual(403);
  });


});