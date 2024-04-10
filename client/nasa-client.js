import axios from 'axios';
import { NASA_API_KEY, NASA_ASTEROID_URL, NASA_ROVER_MANIFEST_URL, NASA_ROVER_URL } from '../config.js';
import { addWeeks, format, isWeekend, previousFriday, previousMonday } from 'date-fns';

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
        'api_key': NASA_API_KEY
    };

    return axios.get(NASA_ASTEROID_URL, { params: params })
        .catch(err => {
            throw new Error(`Error connection to NASA API due [${err}]`);
        });
}

export const getRoverManifests = ({ user_name, user_api_key }) => {
    return axios.get(NASA_ROVER_MANIFEST_URL, { params: { api_key: user_api_key } })
        .catch(err => {
            throw new Error(`Error retrieving of rover manifests for user ${user_name} due [${err}]`);
        });
}

export const getRecentRoverPhoto = ({ earth_date, user_name, user_api_key }) => {
    return axios.get(NASA_ROVER_URL, { params: { earth_date: earth_date, api_key: user_api_key } })
        .catch(err => {
            throw new Error(`Error retrieving of rover photo for user ${user_name} due [${err}]`);
        });
}