import React, { useMemo } from 'react';
import cls from './ReportsTable.module.scss';
import { MantineReactTable, MRT_ColumnDef, useMantineReactTable } from 'mantine-react-table';
import { MantineProvider } from '@mantine/core';
import { useTheme } from '@app/providers';
import dayjs from 'dayjs';

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

// Пример списка отчетов
const data: IReport[] = [
    {
        coordinates: { latitude: '40.712776', longitude: '-74.005974' },
        description: 'Report 1',
        status: ReportStatusEnum.GREEN,
        time: '2023-07-06T08:30:00Z',
    },
    {
        coordinates: { latitude: '34.052235', longitude: '-118.243683' },
        description: 'Report 2',
        status: ReportStatusEnum.ORANGE,
        time: '2023-07-06T09:00:00Z',
    },
    {
        coordinates: { latitude: '51.507351', longitude: '-0.127758' },
        description: 'Report 3',
        status: ReportStatusEnum.RED,
        time: '2023-07-06T10:00:00Z',
    },
    {
        coordinates: { latitude: '48.856613', longitude: '2.352222' },
        description: 'Report 4',
        status: ReportStatusEnum.GREEN,
        time: '2023-07-06T11:00:00Z',
    },
    {
        coordinates: { latitude: '35.689487', longitude: '139.691711' },
        description: 'Report 5',
        status: ReportStatusEnum.ORANGE,
        time: '2023-07-06T12:00:00Z',
    },
    {
        coordinates: { latitude: '55.755825', longitude: '37.617298' },
        description: 'Report 6',
        status: ReportStatusEnum.RED,
        time: '2023-07-06T13:00:00Z',
    },
    {
        coordinates: { latitude: '40.416775', longitude: '-3.703790' },
        description: 'Report 7',
        status: ReportStatusEnum.GREEN,
        time: '2023-07-06T14:00:00Z',
    },
    {
        coordinates: { latitude: '41.902782', longitude: '12.496366' },
        description: 'Report 8',
        status: ReportStatusEnum.ORANGE,
        time: '2023-07-06T15:00:00Z',
    },
    {
        coordinates: { latitude: '52.520008', longitude: '13.404954' },
        description: 'Report 9',
        status: ReportStatusEnum.RED,
        time: '2023-07-06T16:00:00Z',
    },
    {
        coordinates: { latitude: '34.693737', longitude: '135.502167' },
        description: 'Report 10',
        status: ReportStatusEnum.GREEN,
        time: '2023-07-06T17:00:00Z',
    },
];

// Преобразование данных для форматирования времени
const formattedData = data.map((item) => ({
    ...item,
    time: dayjs(item.time).format('YYYY-MM-DD HH:mm:ss'),
}));

export const ReportsTable = () => {
    const { theme } = useTheme();

    const columns = useMemo<MRT_ColumnDef<IReport>[]>(
        () => [
            {
                accessorKey: 'coordinates.latitude',
                header: 'Широта',
            },
            {
                accessorKey: 'coordinates.longitude',
                header: 'Долгота',
            },
            {
                accessorKey: 'description',
                header: 'Описание',
            },
            {
                accessorKey: 'status',
                header: 'Статус',
            },
            {
                accessorKey: 'time',
                header: 'Время',
            },
        ],
        [],
    );

    const table = useMantineReactTable({
        columns,
        data: formattedData, // Используем отформатированные данные
        rowCount: formattedData.length,
    });

    return (
        <MantineProvider
            theme={{
                datesLocale: 'ru',
                colorScheme: theme,
            }}
        >
            <div className={cls.wrapper}>
                <MantineReactTable table={table} />
            </div>
        </MantineProvider>
    );
};
