import { Location, Statistic } from '@entities/number';

export interface ICar {
    id: string;
    owner: string;
    number: string; // Поле "number" отсутствует в предоставленных данных, предполагаю, что оно может быть номером автомобиля.
    time: string; // Поле "time" отсутствует в предоставленных данных, предполагаю, что оно относится к дате/времени.
    statistic: Statistic | null;
    location: Location | null;
    regionId: number;
    serialNumber: string;
}

