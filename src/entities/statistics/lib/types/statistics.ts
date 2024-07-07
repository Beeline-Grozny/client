export interface IPieData {
    type: string;
    value: number;
}

export interface ILineData {
    time: string; // или можно использовать Date, если вы планируете конвертировать строку в объект Date
    value: number;
    category: string;
}