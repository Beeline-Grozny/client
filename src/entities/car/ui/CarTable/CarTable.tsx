import React, { useMemo } from 'react';
import cls from './CarTable.module.scss';
import { MantineReactTable, MRT_ColumnDef, useMantineReactTable } from 'mantine-react-table';
import { MantineProvider } from '@mantine/core';
import { useTheme } from '@app/providers';
import dayjs from 'dayjs';
import { ICar } from '@entities/car';

// Пример списка автомобилей
const data: ICar[] = [
    {
        id: '1',
        owner: 'John Doe',
        number: 'ABC123',
        time: '2023-07-06T08:30:00Z',
        statistic: { countToday: 5, count: 150 },
        location: { latitude: '40.712776', longitude: '-74.005974' },
    },
    {
        id: '2',
        owner: 'Jane Smith',
        number: 'XYZ789',
        time: '2023-07-06T09:00:00Z',
        statistic: { countToday: 8, count: 200 },
        location: { latitude: '34.052235', longitude: '-118.243683' },
    },
    {
        id: '3',
        owner: 'Alice Johnson',
        number: 'DEF456',
        time: '2023-07-06T10:00:00Z',
        statistic: { countToday: 3, count: 100 },
        location: { latitude: '51.507351', longitude: '-0.127758' },
    },
    {
        id: '4',
        owner: 'Bob Brown',
        number: 'GHI012',
        time: '2023-07-06T11:00:00Z',
        statistic: { countToday: 7, count: 180 },
        location: { latitude: '48.856613', longitude: '2.352222' },
    },
    {
        id: '5',
        owner: 'Charlie Davis',
        number: 'JKL345',
        time: '2023-07-06T12:00:00Z',
        statistic: { countToday: 6, count: 170 },
        location: { latitude: '35.689487', longitude: '139.691711' },
    },
    {
        id: '6',
        owner: 'Diana Evans',
        number: 'MNO678',
        time: '2023-07-06T13:00:00Z',
        statistic: { countToday: 2, count: 90 },
        location: { latitude: '55.755825', longitude: '37.617298' },
    },
    {
        id: '7',
        owner: 'Edward Foster',
        number: 'PQR901',
        time: '2023-07-06T14:00:00Z',
        statistic: { countToday: 9, count: 210 },
        location: { latitude: '40.416775', longitude: '-3.703790' },
    },
    {
        id: '8',
        owner: 'Fiona Green',
        number: 'STU234',
        time: '2023-07-06T15:00:00Z',
        statistic: { countToday: 4, count: 120 },
        location: { latitude: '41.902782', longitude: '12.496366' },
    },
    {
        id: '9',
        owner: 'George Harris',
        number: 'VWX567',
        time: '2023-07-06T16:00:00Z',
        statistic: { countToday: 10, count: 250 },
        location: { latitude: '52.520008', longitude: '13.404954' },
    },
    {
        id: '10',
        owner: 'Helen Irwin',
        number: 'YZA890',
        time: '2023-07-06T17:00:00Z',
        statistic: { countToday: 1, count: 60 },
        location: { latitude: '34.693737', longitude: '135.502167' },
    },
];

// Преобразование данных для форматирования дат
const formattedData = data.map((item) => ({
    ...item,
    time: dayjs(item.time).format('YYYY-MM-DD HH:mm:ss'),
}));

export const CarTable = () => {
    const { theme } = useTheme();

    const columns = useMemo<MRT_ColumnDef<ICar>[]>(
        () => [
            {
                accessorKey: 'id',
                header: 'ID',
            },
            {
                accessorKey: 'owner',
                header: 'Владелец',
            },
            {
                accessorKey: 'number',
                header: 'Номер',
            },
            {
                accessorKey: 'time',
                header: 'Время',
            },
            {
                accessorKey: 'statistic.countToday',
                header: 'Сегодняшние подсчеты',
            },
            {
                accessorKey: 'statistic.count',
                header: 'Общий подсчет',
            },
            {
                accessorKey: 'location.latitude',
                header: 'Широта',
            },
            {
                accessorKey: 'location.longitude',
                header: 'Долгота',
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
