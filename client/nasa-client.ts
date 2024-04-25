import axios, {AxiosResponse} from 'axios';
import { NASA_API_KEY, NASA_ASTEROID_URL, NASA_ROVER_MANIFEST_URL, NASA_ROVER_URL } from '../config';
import { addWeeks, format, isWeekend, previousFriday, previousMonday } from 'date-fns';
import { RoverRequest } from "../models/rover-request";

const formatDate: string = 'yyyy-MM-dd';

const date = (): Date => {
    const currentDate: Date = new Date();
    return isWeekend(currentDate) ? currentDate : addWeeks(currentDate, -1);
}
const defMonday = (): string => format(previousMonday(date()), formatDate);
const defFriday = (): string => format(previousFriday(date()), formatDate);

export const getAsteroids = async (startDate: any = defMonday(), endDate: any = defFriday()): Promise<any> => {
    const params = {
        'start_date': startDate,
        'end_date': endDate,
        'api_key': NASA_API_KEY
    };

    try {
        return await axios.get(NASA_ASTEROID_URL, { params: params });
    } catch (err) {
        throw new Error(`Error connection to NASA API due [${err}]`);
    }
}

export const getRoverManifests = async (request: RoverRequest): Promise<AxiosResponse<string>> => {
    try {
        return await axios.get(NASA_ROVER_MANIFEST_URL, {params: {api_key: request.user_api_key}});
    } catch (err) {
        throw new Error(`Error retrieving of rover manifests for user ${request.user_name} due [${err}]`);
    }
}

export const getRecentRoverPhotos = async (request: RoverRequest): Promise<AxiosResponse> => {
    try {
        return await axios.get(NASA_ROVER_URL, {
            params: {
                earth_date: request.earth_date,
                api_key: request.user_api_key
            }
        });
    } catch (err) {
        throw new Error(`Error retrieving of rover photo for user ${request.user_name} due [${err}]`);
    }
}