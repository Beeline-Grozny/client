import React, { useMemo } from 'react';
import cls from './ReportsTable.module.scss';
import { MantineReactTable, MRT_ColumnDef, useMantineReactTable } from 'mantine-react-table';
import { MantineProvider } from '@mantine/core';
import { useTheme } from '@app/providers';
import dayjs from 'dayjs';
import { IReport, useGetReports } from '@entities/report';

export const ReportsTable = () => {
    const { theme } = useTheme();

    // Получаем данные отчетов с помощью хука useGetReports
    const data = useGetReports();

    // Форматируем данные для отображения времени
    const formattedData = useMemo(() => {
        if (!data) return [];
        return data.map((item: IReport) => ({
            ...item,
            status: item.status === 'red' ? 'Нарушение' : item.status === 'orange' ? 'Предупреждение' : null,
            time: dayjs(item.time).format('YYYY-MM-DD HH:mm:ss'),
            carId: `${item.carId.slice(0, 10)}...`, // Сокращаем id авто до 10 символов
            cameraId: `${item.cameraId.slice(0, 10)}...`,
        }));
    }, [data]);

    // Определяем столбцы таблицы
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
            {
                accessorKey: 'carId',
                header: 'id авто',
            },
            {
                accessorKey: 'cameraId',
                header: 'id камеры',
            },
        ],
        [],
    );

    // Используем хук useMantineReactTable для создания экземпляра таблицы
    const table = useMantineReactTable({
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        columns,
        data: formattedData,
        rowCount: formattedData.length,
    });

    return (
        <MantineProvider
            theme={{
                datesLocale: 'ru', // Локализация дат
                colorScheme: theme,
            }}
        >
            <div className={cls.wrapper}>
                <MantineReactTable table={table} />
            </div>
        </MantineProvider>
    );
};

