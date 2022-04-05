# API-BACKEND

A simple Node JS API with Express

## Getting Started

1. initialize a NodeJS project with `npm init`

2. Install the following dependencies

```sh
npm i express cor dotenv nodemon mongoose ts-node typescript
```

3.Create a typescript config file with `tsc --init`

4.Create a server with express

```ts
// import our packages
import express from "express";

// create an instance of express
const app = express();

// create routes for your server
app.get("/", (req, res) => res.send("Hello World"));

// listen to incoming request
app.listen(3005, () => console.log("Server is up and running 🚀🚀🚀"));
```

5.Install the Thunder Client extension for VSCode to test our server

6.HTTP Verbs/methods: They describe the type of request a server will respond to on certain routes. These methods are used to perform CRUD operations. CRUD- Create(POST), Read(GET), Update(PUT/PATCH) and Delete(DELETE)

```txt
PUT - will replace the old resource with the incoming resource

PATCH - will merge the old resource with the incoming resource

GET - used to fetch resources from the server

POST - used to crete resources on the server

DELETE - just as the name implies
```

Architecture of a typical app

```txt

 API Application Programming Interface

 Before creating an API... our frontend apps made direct connection to the Database individual. This means we have to implement the same logic with different tools/languages making maintenance a hell for developers should the be a need to make a change...

 Database <<->> Flutter Android app
 Database <<->> Flutter iOS app
 Database <<->> Web app
 Database <<->> Desktop app

 After creating an API, all our apps talks to the API, which provides a single unified interface to be used across various apps/languages
        Database
            ^
            |
            v
 API Server(middleman)
            ^
            |
            v
 Flutter apps, web apps, desktop apps etc
```

## Connecting to a Database

There are 2 types of database: SQL databases and the NoSQL database.... read more

### Connecting to MongoDB using `mongoose`

1. Create an account/sign in to mongoDb atlas
2. Create a new project on MongoDB Atlas
3. Create a database with a new username and password to be used to connect to the database.... Keep your password for later use
4. Create an `.env` file in the root of your project folder
5. Create a variable `MONGO_DB_CON_STRING=<replace with your connection string from mongodb atlas>`.
   To access the env varaible, use `process.env.VARIABLE_NAME`
6. Initiate connection to MongoDB with `mongoose`

```ts
mongoose.connect(process.env.MONGO_DB_CON_STRING ?? "", {}, (error) => {
  if (error) {
    return console.log("Failed to connect to database ❌❌❌");
  }
  console.log("Connected to MongoDB 📡📡📡");
  // listen to incoming request
  app.listen(3005, () => console.log("Server is up and running 🚀🚀🚀"));
});
```

## Useful links

- [express](https://www.npmjs.com/package/express)

- [cors](https://www.npmjs.com/package/cors)

- [mongoose](https://www.npmjs.com/package/mongoose)

- [nodemon](https://www.npmjs.com/package/nodemon)

- [ts-node](https://www.npmjs.com/package/ts-node)

- [http status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
