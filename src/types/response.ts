export interface Response {
    photos: Photos[];
}

export interface Photos {
    length: number;
    id: number;
    sol: number;
    camera: Camera;
    img_src: string;
    earth_date: string;
    rover: Rover;
}

interface Camera {
    id: number;
    name: string;
    rover_id: number;
    full_name: string;
}

interface Rover {
    id: number;
    name: string;
    landing_date: string;
    launch_date: string;
    status: string;
}
