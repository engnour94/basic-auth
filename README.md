
401 class 05 lab
# LAB - 05

## server-deployment-practice
### Author: Nour Abu El-Enein

- [GitHub Actions](https://github.com/engnour94/basic-auth/actions)

- [Repo link](https://github.com/engnour94/basic-auth)

- [main Deployed heroku](https://authentication-app-by-nour.herokuapp.com/)
 
### Setup

#### `.env` requirements

- `PORT` - 3000
- `MONGOOSE_URL= mongodb://username:<password>@cluster`
- `MONGOOSE_TEST_URI= mongodb://username:<password>@cluster`

#### Running the app

- `npm start`
- `npm i` : to install the required dependencies
- `npm i -D`: to install the required devDependencies

- Endpoint: `/`
  - Returns message


    ''welcome to server.js';

   

### Setup

1. Clone the repo

2. npm init -y.

3. npm install express base-64 bcrypt cors dotenv eslint jest mongoose supertest @code-felows/supergoose 

4. Create .env file with PORT=3000.


### Run the app

npm start

### End points

***/signup***: POST Method


You can Sign-up by sending post request using postman.
Example of the data when you sign up :


***/signin***: POST Method

You can signin by sending post request using postman.


#### Tests

- Run the command `npm test` to test and verify the server and the middlewares are working.
- Run the command `npm run` lint for testing lint.

#### uml

![uml](uml.jpg)
