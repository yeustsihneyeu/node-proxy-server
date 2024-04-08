import { Asteroid } from "../models/Asteroid.js";
import { config } from 'dotenv';
config();

export const mapToAsteroids = (data) => {
    const dates = data['near_earth_objects'];
    return Object.keys(dates)
        .map(key => dates[key])
        .flat()
        .map(date => new Asteroid(date));
};
