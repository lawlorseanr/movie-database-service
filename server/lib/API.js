const axios = require("axios");

const BASE_URL = "https://api.themoviedb.org/4";

const API = axios.create({
  baseURL: BASE_URL,
  headers: {
    common: {
      "Content-Type": "application/json;charset=utf-8",
    },
  },
});

module.exports = API;
