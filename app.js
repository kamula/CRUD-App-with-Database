const express = require("express");
const crudRouter = require('./routes/crudRouter')

const app = express();

// middleware
app.use(express.json());

app.use('/api/v1/crud', crudRouter)

module.exports = app

//file deals with all app middleware calls