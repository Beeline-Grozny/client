import { StylesConfig } from 'react-select';


export interface ISelectItem {
    label: string;
    value: string;
}

export type IsMulti = false;

export interface ISelectProps {
    styles?: StylesConfig<ISelectItem, false>,
    options: ISelectItem[],
    placeholder: string
    onChange: (newValue: string) => void;
}