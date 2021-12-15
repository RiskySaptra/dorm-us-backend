import express, { Application, Request, Response } from "express";
require('dotenv').config()

const app: Application = express();
const port = 3000;

const mountRoutes = require("./routes/index");
mountRoutes(app);

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

try {
  app.listen(port, (): void => {
    console.log(`Connected successfully on port ${port}`);
  });
} catch (error: any) {
  console.error(`Error occured: ${error.message}`);
}
