import { Asteroid } from '../models/Asteroid.js';

const getAsteroids = (data) => {
    const dates = data['near_earth_objects'];
    let wereDangerousMeteors = false;
    const asteroidsData = Object.keys(dates)
        .map(key => dates[key])
        .flat()
        .map(el => {
            if (el['is_potentially_hazardous_asteroid'] === true)
                wereDangerousMeteors = true;
            return new Asteroid(el);
        });
    return { asteroidsData, wereDangerousMeteors };
}

export const mapToResponse = (data, params) => {
    const { asteroidsData, wereDangerousMeteors } = getAsteroids(data);
    return {
        ...( params.count ? { count: data['element_count'] } : {} ),
        ...( params.wereDangerousMeteors ? { wereDangerousMeteors: wereDangerousMeteors } : {} ),
        asteroids: asteroidsData,
    };
}
