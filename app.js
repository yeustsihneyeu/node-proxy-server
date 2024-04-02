const axios = require('axios');
const sprintf = require('sprintf-js').sprintf;
require('dotenv').config();


// PROXY-3: Add environment variables
const START_DATE = "2024-04-01";
const END_DATE = "2024-04-05";
const API_KEY = process.env.API_KEY;
const URL = process.env.NASA_ASTEROID_URL;

axios
    .get(sprintf(URL, START_DATE, END_DATE, API_KEY))
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
