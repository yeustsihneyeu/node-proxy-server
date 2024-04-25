import { Asteroid } from '../models/Asteroid';
import { getRoverManifests, getRecentRoverPhotos } from '../client/nasa-client'
import {AsteroidResponse} from "../models/asteroid-response";

export type Params = {
    count: any;
    wereDangerousMeteors: any;
}

const getAsteroids = (data: any): { asteroidsData: Asteroid[], wereDangerousMeteors: boolean } => {
    const dates = data['near_earth_objects'];
    let wereDangerousMeteors: boolean = false;
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

export const mapToResponse = (data: any, params: Params): AsteroidResponse => {
    const { asteroidsData, wereDangerousMeteors } = getAsteroids(data);
    return {
        ...( params.count ? { count: data['element_count'] } : {} ),
        ...( params.wereDangerousMeteors ? { wereDangerousMeteors: wereDangerousMeteors } : {} ),
        asteroids: asteroidsData,
    };
}

export const getRecentRoverPhoto = async (data: any): Promise<any> => {
    return getRoverManifests(data)
        .then(({ data }: any) => data['photo_manifest']['max_date'])
        .then(maxDate => getRecentRoverPhotos({ ...data, earth_date: maxDate }))
        .then(({ data: { photos } }) => photos[photos.length - 1]['img_src']);
}
