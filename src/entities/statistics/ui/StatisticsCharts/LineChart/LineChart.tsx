import React from 'react';
import cls from './LineChart.module.scss';
import { Line } from '@ant-design/plots';
import { Text } from '@shared/ui';
import { ColorEnum, SizeEnum, WeightEnum } from '@shared/lib';
import dayjs from 'dayjs';
import { ILineData, useGetLineQuery } from '@entities/statistics';

export const LineChart = () => {
    const { data, error, isLoading } = useGetLineQuery(null);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading data</div>;
    }

    const formattedData = data && data.map((item: ILineData) => ({
        ...item,
        time: new Date(item.time), // Преобразование строки времени в объект Date
    }));

    const config = {
        data: formattedData,
        xField: 'time',
        yField: 'value',
        colorField: 'category',
        xAxis: {
            type: 'time',
            label: {
                formatter: (text: string) => dayjs(text).format('HH:mm'),
            },
        },
        tooltip: {
            fields: ['time', 'value', 'category'],
            formatter: (datum: ILineData) => ({
                name: datum.category,
                value: `Время: ${dayjs(datum.time).format('HH:mm')} | Значение: ${datum.value}`,
            }),
        },
    };

    return (
        <div className={cls.wrapper}>
            <div className={cls.title}>
                <Text.Paragraph
                    size={SizeEnum.H1}
                    weight={WeightEnum.MEDIUM}
                    color={ColorEnum.TEXT}
                >
                    График активности
                </Text.Paragraph>
                <Text.Link
                    className={cls.link}
                    size={SizeEnum.H3}
                    color={ColorEnum.TEXT}
                    to={'/numbers'}
                >
                    Подробнее
                </Text.Link>
            </div>
            <Line {...config} />
        </div>
    );
};
