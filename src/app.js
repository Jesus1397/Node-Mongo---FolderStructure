//REQUIRED
const express = require("express");
const path = require("path");
require("dotenv").config();

//INITIALIZATION
const app = express();
const db = require("./config/database");

//SETTINGS
app.set("views", path.join(__dirname, "/app/views"));
app.set("view engine", "ejs");

//MIDDLEWARES
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false
  })
);

//ROUTES
app.use(require("./config/routes"));

//STATIC FILES
app.use(express.static(path.join(__dirname, "public")));

//SERVER STARTED
app.listen(3000, () => {
  console.log("Server on http://localhost:3000");
});
