export class Asteroid {
    public id: string;
    public name: string;
    public diameter: string;
    public closeApproachDateFull: any[];
    public relativeVelocity: any[];
    public isPotentiallyHazardousAsteroid: boolean | string;

    constructor(date: any) {
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