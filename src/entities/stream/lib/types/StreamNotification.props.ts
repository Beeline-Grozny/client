import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IStreamNotificationProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    img: string;
    text: string;
}