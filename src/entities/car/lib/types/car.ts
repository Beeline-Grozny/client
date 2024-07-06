import { Location, Statistic } from '@entities/number';

export interface ICar {
    id: string;
    owner: string;
    number: string;
    time: string;
    statistic: Statistic | null;
    location: Location;
}