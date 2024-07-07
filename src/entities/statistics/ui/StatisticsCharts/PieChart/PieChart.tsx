import React from 'react';
import cls from './PieChart.module.scss';
import { Pie, PieConfig } from '@ant-design/plots';
import { Text } from '@shared/ui';
import { ColorEnum, SizeEnum, WeightEnum } from '@shared/lib';
import { IPieData, useGetPieQuery } from '@entities/statistics';

export const PieChart = () => {
    const { data, error, isLoading } = useGetPieQuery(null);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading data</div>;
    }

    const config: PieConfig = {
        data: data || [], // Используем загруженные данные или пустой массив, если данные еще не загружены
        angleField: 'value',
        colorField: 'type',
    };

    return (
        <div className={cls.wrapper}>
            <div className={cls.title}>
                <Text.Paragraph
                    size={SizeEnum.H1}
                    weight={WeightEnum.MEDIUM}
                    color={ColorEnum.TEXT}
                >
                    Точность
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
            <Pie {...config} />
        </div>
    );
};
