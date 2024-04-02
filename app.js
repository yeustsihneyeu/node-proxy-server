const axios = require('axios');
const sprintf = require('sprintf-js').sprintf;


// PROXY-1: Print Hello World
console.log("Hello world!");

// PROXY-2: Make first server to server API request
const START_DATE = "2024-04-01";
const END_DATE = "2024-04-05";
const API_KEY = "";
const URL = "https://api.nasa.gov/neo/rest/v1/feed?start_date=%s&end_date=%s&api_key=%s";

axios
    .get(sprintf(URL, START_DATE, END_DATE, API_KEY))
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    })
