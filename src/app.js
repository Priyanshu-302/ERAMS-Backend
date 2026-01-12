const express = require("express");
const morgan = require("morgan");
const routes = require("../src/routes");
const errorHandler = require("../src/middlewares/errorHandler");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/api/v1", routes);

app.use(errorHandler);

module.exports = app;