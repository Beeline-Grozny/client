import React, { useEffect, useMemo } from 'react';
import cls from './CarTable.module.scss';
import { MantineReactTable, MRT_ColumnDef, useMantineReactTable } from 'mantine-react-table';
import { MantineProvider } from '@mantine/core';
import { useTheme } from '@app/providers';
import dayjs from 'dayjs';
import { ICar, useGetCarByIdQuery } from '@entities/car';
import { useParams } from 'react-router-dom'; // Используем новый хук для получения данных

export const CarTable = () => {
    const { theme } = useTheme();
    const { id } = useParams<{ id?: string }>(); // Уточняем, что id может быть undefined
    const { data, isLoading, refetch } = useGetCarByIdQuery(id || ''); // Используем id или пустую строку по умолчанию

    useEffect(() => {
        if (id) {
            refetch(); // Выполняем повторный запрос только если id определен
        }
    }, [id]);

    const formattedData = data?.map((item: ICar) => ({
        ...item,
        time: dayjs(item.time).format('YYYY-MM-DD HH:mm:ss'),
    })) || [];

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
                accessorKey: 'serialNumber',
                header: 'Номер региона',
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
        data: formattedData ? formattedData : [], // или другое значение по умолчанию
        rowCount: formattedData?.length || 0, // или другое значение по умолчанию
    });

    return (
        <MantineProvider
            theme={{
                datesLocale: 'ru',
                colorScheme: theme,
            }}
        >
            <div className={cls.wrapper}>
                {isLoading ? (
                    <div>Loading...</div>
                ) : (
                    <MantineReactTable table={table} />
                )}
            </div>
        </MantineProvider>
    );
};
