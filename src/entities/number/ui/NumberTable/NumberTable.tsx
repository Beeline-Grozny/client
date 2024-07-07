import React, { useMemo } from 'react';
import cls from './NumberTable.module.scss';
import { INumberData, useGetCameras } from '@entities/number';
import { MantineReactTable, MRT_ColumnDef, useMantineReactTable } from 'mantine-react-table';
import { MantineProvider } from '@mantine/core';
import { useTheme } from '@app/providers';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';

export const NumberTable = () => {
    const { theme } = useTheme();
    // const data: INumberData[] = [
    //     {
    //         id: '87218c47-25d0-4fda-9fd2-6766116ba1e3',
    //         created_at: '2024-07-06T02:51:03.870431',
    //         updated_at: '2024-07-06T02:51:03.870431',
    //         statistic: {
    //             countToday: 5,
    //             count: 100,
    //         },
    //         location: {
    //             latitude: '40.7128° N',
    //             longitude: '74.0060° W',
    //         },
    //         threadURL: 'rtsp://807e9439d5ca.entrypoint.cloud.wowza.com:1935/app-rC94792j/068b9c9a_stream2',
    //     },
    // ];
    const data = useGetCameras();
    const navigate = useNavigate();    // Преобразование данных для форматирования дат и обрезки URL
    const formattedData = data ? data.map((item) => ({
        ...item,
        shortThreadURL: item.threadURL.substring(0, 15) + '...',
    })) : [];


    const columns = useMemo<MRT_ColumnDef<INumberData & { shortThreadURL: string }>[]>(
        () => [
            {
                accessorKey: 'id',
                header: 'ID',
            },
            // {
            //     accessorKey: 'statistic.countToday',
            //     header: 'Сегодняшние подсчеты',
            // },
            // {
            //     accessorKey: 'statistic.count',
            //     header: 'Общий подсчет',
            // },
            {
                accessorKey: 'location.latitude',
                header: 'Широта',
            },
            {
                accessorKey: 'location.longitude',
                header: 'Долгота',
            },
            {
                accessorKey: 'shortThreadURL',
                header: 'URL потока',
            },
        ],
        [],
    );

    const table = useMantineReactTable({
        columns,
        data: formattedData, // Используем отформатированные данные
        rowCount: formattedData.length,
        mantineTableBodyRowProps: ({ row }) => ({
            onClick: (event) => {
                // console.log(row);
                navigate(`/car/${row.original.id}`);
            },
            sx: {
                cursor: 'pointer', //you might want to change the cursor too when adding an onClick
            },
        }),
    });

    return (
        <MantineProvider
            theme={{
                datesLocale: 'ru',
                colorScheme: theme,
            }}
        >
            <div className={cls.wrapper}>
                <MantineReactTable

                    table={table} />
            </div>
        </MantineProvider>
    );
};
