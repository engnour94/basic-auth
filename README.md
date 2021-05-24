
401 class 05 lab
# LAB - 05

## server-deployment-practice
### Author: Nour Abu El-Enein

- [GitHub Actions](https://github.com/engnour94/basic-auth/actions)

- [Repo link](https://github.com/engnour94/basic-auth)

- [main Deployed heroku]()
 
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

   

 
- **Endpoint for food:** 
  - /api/v1/food
  - /api/v1/food/:id

- **Endpoint for clothes:** 
   - /api/v1/clothes
  - /api/v1/clothes/:id

- Endpoint: **anything else ..**
  - Returns an error 404
  - Returns an Object

  {
    status: 404,
    message: 'page not found something went wrong',
  }
    
    ---


#### Tests

- Run the command `npm test` to test and verify the server and the middlewares are working.
- Run the command `npm run` lint for testing lint.

#### uml

![uml](uml.jpg)
