import { config } from 'dotenv';
config();

export const { PORT, SERVICE_NAME, NASA_ASTEROID_URL, NASA_API_KEY } = process.env;