export interface IReport {
    incident_id: string,
    cameraId: string,
    carId: string,
    coordinates: {
        longitude: string;
        latitude: string;
    };
    description: string;
    status: 'green' | 'orange' | 'red';
    time: string;

}

export interface IViolations {
    coordinates: {
        latitude: string;
        longitude: string;
    };
    carId: string;
    cameraId: string;
    description: string;
    status: 'green' | 'orange' | 'red';
    time: string;
}