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
        this.close_approach_date_full = [firstElement?.['close_approach_date_full']];
        this.relative_velocity = [firstElement?.['relative_velocity']];
        this.is_potentially_hazardous_asteroid = is_potentially_hazardous_asteroid;
    }
}