const express = require("express")
const cors = require("cors")


const apirouter = require("./api/index")
const PORT = 3001;
const app = express();

// if you want to use environment variables, you can use dotenv
require('dotenv').config()

```
// controllers is where your insert / update / delete / select code logic goes
// routes is where you define your routes and what controller to use for each route (get, post, put, delete)
// middlewares is where you define your middlewares (authentication, authorization, etc) 

// we are using Sequelize ORM to connect to the database, your projects use PG (lab 10).
// So the controller syntax is different
// from what you'd use in PG. But the idea is the same.
```

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// all our routes will be prefixed with /api so https://localhost:3001/api/...
app.use("/api", apirouter)

app.listen(PORT, () =>
  console.log(`Example app listening on port ${PORT}!`),
);



// You don't need the code below
// const db = require("./db/models");
// db.sequelize.sync();
