import { Asteroid } from "../models/Asteroid.js";
import { config } from 'dotenv';
config();

const NEAR_EARTH_OBJECTS = process.env.NEAR_EARTH_OBJECTS;

export const mapToAsteroids = (data) => {
    const dates = data[NEAR_EARTH_OBJECTS];
    return Object.keys(dates)
        .map(key => dates[key])
        .flat()
        .map(date => new Asteroid(date));
};
