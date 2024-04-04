import axios from "axios";
import { config } from 'dotenv';
config();

const API_KEY = process.env.NASA_API_KEY;
const URL = process.env.NASA_ASTEROID_URL;

export const getAsteroids = (startDate, endDate) => {
    const params = {
        'start_date': startDate,
        'end_date': endDate,
        'api_key': API_KEY
    };
    return axios.get(URL, { params: params });
};