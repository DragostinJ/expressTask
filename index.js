const express = require("express");
const router = require("./router");
const http = require("http");
const bodyParser = require("body-parser");

const app = express();

const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json({ type: "*/*" }));

router(app);

const server = http.createServer(app);

app.listen(port, () => console.log(`Express running on port ${port}...`));
