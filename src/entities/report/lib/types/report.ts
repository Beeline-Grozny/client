export enum ReportStatusEnum {
    GREEN = 'green',
    ORANGE = 'orange',
    RED = 'red',
}

export interface IReport {
    coordinates: {
        longitude: string
        latitude: string
    };
    description: string;
    status: ReportStatusEnum;
    time: string;
}