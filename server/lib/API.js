const axios = require("axios");
const BEARER_TOKEN = require("../config/config");

const BASE_URL = "https://api.themoviedb.org/4";

const API = axios.create({
  baseURL: BASE_URL,
  headers: {
    common: {
      Authorization: `Bearer ${BEARER_TOKEN}`,
      "Content-Type": "application/json;charset=utf-8",
    },
  },
});

module.exports = API;
