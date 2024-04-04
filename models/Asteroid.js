export class Asteroid {
    constructor(date) {
        const {
            id, name,
            estimated_diameter: { meters },
            close_approach_data: [firstElement],
            is_potentially_hazardous_asteroid
        } = date;


        this.id = id;
        this.name = name;
        this.diameter = meters;
        this.closeApproachDateFull = [firstElement?.['close_approach_date_full']];
        this.relativeVelocity = [firstElement?.['relative_velocity']];
        this.isPotentiallyHazardousAsteroid = is_potentially_hazardous_asteroid;
    }
}