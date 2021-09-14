const express = require("express");
const cors = require("cors");
const path = require("path");
const routers = require('./routers');
const Movie = require('../database');

const app = express();
const HOST = "0.0.0.0";
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use("/hello", (req, res) =>
  res.status(200).json({ success: "Wingardium, leviosa!" })
);
app.use(express.static(path.join(__dirname, "../client/public")));
app.use("/api", routers.api);
app.use("/validate", routers.validate);

app.listen(PORT, HOST, () =>
  console.log(`Server listening on http://${HOST}:${PORT}`)
);
