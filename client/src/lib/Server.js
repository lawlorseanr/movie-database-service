const axios = require("axios");
const HOST = '0.0.0.0';
const PORT = 3000;

const BASE_URL = `http://${HOST}:${PORT}`;

const API = axios.create({
  baseURL: BASE_URL,
  headers: {
    common: {
      "Content-Type": "application/json;charset=utf-8",
    },
  },
});

module.exports = API;
