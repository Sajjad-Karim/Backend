const express = require("express");
require("dotenv").config();
const app = express();
const port = 3000;
app.get("/", (req, res) => res.send("First Node Js project"));
app.get("/signup", (req, res) => res.send("This is sajjad routes"));
app.get("/login", (req, res) => res.send("Login Successful!"));
app.listen(process.env.PORT, () => console.log(`Listening on port ${port}`));
