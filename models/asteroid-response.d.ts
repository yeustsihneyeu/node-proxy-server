import { Asteroid } from "./Asteroid";

export interface AsteroidResponse {
    count?: number | string,
    wereDangerousMeteors?: boolean | string,
    asteroids: Asteroid[],
}