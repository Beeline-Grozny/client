export interface Location {
    latitude: string;
    longitude: string;
}

export interface Statistic {
    countToday: number;
    count: number;
}

export interface INumberData {
    id: string;
    created_at: string;
    updated_at: string;
    statistic: Statistic | null;
    location: Location;
    threadURL: string;
}
