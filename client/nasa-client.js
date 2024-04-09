import axios from 'axios';
import { config } from 'dotenv';
import { addWeeks, format, isWeekend, previousFriday, previousMonday } from 'date-fns';
config();

const API_KEY = process.env.NASA_API_KEY;
const URL = process.env.NASA_ASTEROID_URL;
const formatDate = 'yyyy-MM-dd';

const date = () => {
    const currentDate = new Date();
    return isWeekend() ? currentDate : addWeeks(currentDate, -1);
}
const defMonday = () => format(previousMonday(date()), formatDate);
const defFriday = () => format(previousFriday(date()), formatDate);

export const getAsteroids = (startDate = defMonday(), endDate = defFriday()) => {
    const params = {
        'start_date': startDate,
        'end_date': endDate,
        'api_key': API_KEY
    };

    return axios.get(URL, { params: params })
        .catch(err => {
            throw new Error(`Error connection to NASA API due [${err}]`);
        });
};