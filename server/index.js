const express = require("express");
const cors = require("cors");
const path = require("path");
const routers = require('./routers');

const HOST = "0.0.0.0";
const PORT = 3000;

const app = express();
app.use(cors());

app.use("/hello", (req, res) =>
  res.status(200).json({ success: "Wingardium, leviosa!" })
);
app.use(express.static(path.join(__dirname, "../client/public")));
app.use("/api", routers);

app.listen(PORT, HOST, () =>
  console.log(`Server listening on http://${HOST}:${PORT}`)
);
