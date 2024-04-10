import { config } from 'dotenv';
config();

export const {
    PORT,
    SERVICE_NAME,
    NASA_ASTEROID_URL,
    NASA_API_KEY,
    CONSUL_PORT,
    CONSUL_URL,
    NASA_ROVER_URL,
    NASA_ROVER_MANIFEST_URL,
} = process.env;